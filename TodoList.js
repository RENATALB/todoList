let Lista = document.getElementById("Lista");
let i;

function agregarElementos() {
    let li = document.createElement("li");
    let valorInput = document.getElementById("Input").value;
    let inputText = document.createTextNode(valorInput);
    li.appendChild(inputText);
        if (valorInput === '') {
            alert("El valor del item no puede ser nulo")
        } else {
            document.getElementById("Lista").appendChild(li);
        }

}
document.getElementById("Input").value = "";