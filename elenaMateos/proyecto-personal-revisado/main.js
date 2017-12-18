/* DATE */

var hour = document.getElementById('hour');
var date = document.getElementById('date');

// @ulises: Evitar redundancia
function leftpad(str){
  return  str <= 9 ? '0' + str : str;
}

function mostrarHora(){
  
  var giveHour = new Date();
  var minutes = giveHour.getMinutes();
  var seconds = giveHour.getSeconds();

  hour.innerHTML = giveHour.getHours() + ':' + leftpad(minutes) + ':' + leftpad(seconds);
  date.innerHTML = giveHour.getDate() + '/' + giveHour.getMonth() + '/' + giveHour.getFullYear();
}

// @Ulises: Arranque...
mostrarHora();

// @Ulises: Permanencia...
setInterval(mostrarHora, 1000);

