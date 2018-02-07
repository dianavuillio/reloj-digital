// Carga todo luego ejecuta
var fecha;
function escribirFecha(){
  // va a poner la escribirFecha
fecha = new Date();
﻿$('#horas').text( fecha.getHours() );
$('#minutos').text( fecha.getMinutes() );
$('#segundos').text( fecha.getSeconds() );

fecha.getMinutes()
fecha.getSeconds()

}
  $(document).ready(function(){
//alert('Ya se cargo todo bien')

escribirFecha();
setInterval( function(){
escribirFecha();
console.info('Escribiendo Fecha');
}, 1000);
})
