
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('turnosForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
   
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var email = document.getElementById('email').value;
            var telefono = document.getElementById('telefono').value;
            var tamaño = document.getElementById('tamaño').value;
            var servicio = document.getElementById('servicio').value;
         
            if (!nombre || !apellido || !email || !telefono || !tamaño || !servicio) {
                alert('Por favor, completa todos los campos.');
                return;
            }
    
            var mensaje = `Hola, me gustaría solicitar un turno.\n\nNombre: ${nombre} ${apellido}\nCorreo: ${email}\nTeléfono: ${telefono}\nTamaño de la mascota: ${tamaño}\nServicio solicitado: ${servicio}`;
    
            var numeroWhatsApp = '+5491132910011'; 
       
            var url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, '_blank');
        });
    } 
});