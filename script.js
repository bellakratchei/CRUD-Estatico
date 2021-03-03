var linhaSelec = null

function onFormSubmit() {
    if (validar()) {
        var formData = lerForm();
        if (linhaSelec == null)
            inserir(formData);
        else
            atualizar(formData);
        resetarForm();
    }
}

function lerForm() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["cargo"] = document.getElementById("cargo").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}

function inserir(data) {
    var table = document.getElementById("colabLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cargo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salario;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cidade;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="editar(this)">Editar</a>
                       <a onClick="deletar(this)">Deletar</a>`;
}

function resetarForm() {
    document.getElementById("nome").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";
    linhaSelec = null;
}

function editar(td) {
    linhaSelec = td.parentElement.parentElement;
    document.getElementById("nome").value = linhaSelec.cells[0].innerHTML;
    document.getElementById("cargo").value = linhaSelec.cells[1].innerHTML;
    document.getElementById("salario").value = linhaSelec.cells[2].innerHTML;
    document.getElementById("cidade").value = linhaSelec.cells[3].innerHTML;
}
function atualizar(formData) {
    linhaSelec.cells[0].innerHTML = formData.nome;
    linhaSelec.cells[1].innerHTML = formData.cargo;
    linhaSelec.cells[2].innerHTML = formData.salario;
    linhaSelec.cells[3].innerHTML = formData.cidade;
}

function deletar(td) {
    if (confirm('Tem certeza que deseja excluir esse registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("colabLista").deleteRow(row.rowIndex);
        resetarForm();
    }
}
function validar() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("nomeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeValidationError").classList.contains("hide"))
            document.getElementById("nomeValidationError").classList.add("hide");
    }
    return isValid;
}