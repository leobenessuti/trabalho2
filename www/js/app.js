$('.mostrarPerson').on('click', function() {
	var idPer = $('#selecao').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/'+idPer+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura:" + data.height + "<br/>Ano Nasc.: " + data.birth_year + "<br/>Genero: " + data.gender + "<br/>";
}});
});


$('.mostrarPlaneta').on('click', function() {
	var idPla = $('#mostrar').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/planets/'+idPla+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contPlaneta");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Rotacao:" + data.rotation_period + "<br/>Orbita: " + data.orbital_period + "<br/>Populacao: " + data.population + "<br/>";
}});
});


$('.mostrarNave').on('click', function() {
	var idPla = $('#aparecer').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/starships/'+idPla+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contNave");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Modelo:" + data.model + "<br/>Fabricante: " + data.manufacturer + "<br/>Comprimento: " + data.length + "<br/>";
}});
});


