//notificacion de temas habilitados
alert("Estudiante eosem, cordial saludo, solo estan habilitados por el momento los temas de: \n\n - Atletismo \n - Futbol \n - Baloncesto");

//Ir a atletismo
document.getElementById('tema_uno').addEventListener('click', function() {
    window.location.href = 'atletismo.html';
});
//Ir a futbol
document.getElementById('tema_dos').addEventListener('click', function() {
    window.location.href = 'futbol.html';
});
//Ir a baloncesto
document.getElementById('tema_tres').addEventListener('click', function() {
    window.location.href = 'baloncesto.html';
});


