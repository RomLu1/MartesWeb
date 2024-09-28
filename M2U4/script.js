
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('FormularioContacto');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
   
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var email = document.getElementById('email').value;
            var telefono = document.getElementById('telefono').value;
            var mensajeTexto = document.getElementById('mensaje').value;
          
            // Validar que todos los campos tengan valores
            if (!nombre || !apellido || !email || !telefono || !mensajeTexto) {
                alert('Por favor, completa todos los campos.');
                return;
            }
    
            // Concatenar los valores del formulario en un solo mensaje
            var mensajeFinal = `Nombre: ${nombre} ${apellido}\nCorreo: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensajeTexto}`;
    
            var numeroWhatsApp = '+5491165099450'; 
       
            // Generar la URL de WhatsApp con el mensaje codificado
            var url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeFinal)}`;

            // Abrir WhatsApp en una nueva pestaña
            window.open(url, '_blank');
        });
    } 
});