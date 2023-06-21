console.log("JS cargado")
function resultado() {
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var seleccion = document.getElementById('seleccion').value;
    var descuento = 0;
  
    switch (seleccion) {
      case 'opcion1': // Estudiante
        descuento = 0.8; // 80% de descuento
        break;
        
      case 'opcion2': // Trainee
        descuento = 0.5; // 50% de descuento
        break;
      case 'opcion3': // Junior
        descuento = 0.15; // 15% de descuento
        break;
    }
  
    var precioTicket = 200; // Precio del ticket sin descuento
    var subtotal = precioTicket * cantidad; // Subtotal sin descuento
    var totalPagar = subtotal - (subtotal * descuento); // Total a pagar con descuento
  
    document.getElementById('total').value = 'Total a Pagar: $' + totalPagar.toFixed(2);
  }
  

  function borrar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('seleccion').selectedIndex = 0;
    document.getElementById('total').value = 'Total a Pagar: $';
  }