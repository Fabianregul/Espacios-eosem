//1 - Selecciona todas las tarjetas
const cards = document.querySelectorAll('.card');
//2 - Selecciona todos los modales
const modals = document.querySelectorAll('.modal');

alert("Estudiante eosem, cordial saludo, solo estan habilitados por el momento los temas de: \n\n - Atletismo \n - Futbol");

//3 - Añade el evento de clic a cada tarjeta para abrir su modal correspondiente
cards.forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

//4 - Cierra el modal cuando se hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
