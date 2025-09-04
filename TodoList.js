function agregarElementos() {
    let li = document.createElement("li");
    let valorInput = document.getElementById("Input").value;
    let inputText = document.createTextNode(valorInput);
    li.appendChild(inputText);

    if (valorInput === '') {
        alert("El valor del item no puede ser nulo");
    } else {
        Lista.appendChild(li);
    }
    document.getElementById("Input").value = "";
}
    // 🔥 Agregamos botón Cerrar
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("×"); // símbolo de cierre
    span.className = "Cerrar";
    span.appendChild(txt);
    li.appendChild(span);

    // 🔥 Asignamos evento al nuevo botón
    span.onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }