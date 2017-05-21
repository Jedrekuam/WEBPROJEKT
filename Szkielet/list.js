var a= [];
function list() {
var lista = document.getElementById("comments").value;
document.getElementById("lista").innerHTML = lista;
a.push(lista);
document.getElementById("lista").innerHTML = a;

}