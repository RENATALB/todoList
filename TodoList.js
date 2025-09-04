let Lista = document.getElementById("Lista");
let i;

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

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
    document.getElementById("Input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}