// Seleccionamos el formulario por su ID
const formulario = document.getElementById('formulario-contacto');

// Escuchamos el evento 'submit'
formulario.addEventListener('submit', function(evento) {
  // Evitamos que se recargue la página
  evento.preventDefault();

  // Obtenemos los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  // Mostramos los datos en consola
  console.log('Formulario enviado');
  console.log('Nombre:', nombre);
  console.log('Correo:', email);

  // Mensaje de confirmación
  alert('¡Formulario enviado con éxito!');
});