//= require "jquery"
//= require_tree .

$(document).ready(function() {
  var meses = $('.month');

  for (var i = 0; i < meses.length; i++) {
    var mes = meses[i];
    changeMonth();
  }

  function changeMonth() {
    if (mes.innerHTML == 'January') {
      mes.innerHTML = 'Janeiro'
    } else if (mes.innerHTML == 'February') {
      mes.innerHTML = 'Fevereiro'
    } else if (mes.innerHTML == 'March') {
      mes.innerHTML = 'Março'
    } else if (mes.innerHTML == 'April') {
      mes.innerHTML = 'Abril'
    } else if (mes.innerHTML == 'May') {
      mes.innerHTML = 'Maio'
    } else if (mes.innerHTML == 'June') {
      mes.innerHTML = 'Junho'
    } else if (mes.innerHTML == 'July') {
      mes.innerHTML = 'Julho'
    } else if (mes.innerHTML == 'August') {
      mes.innerHTML = 'Agosto'
    } else if (mes.innerHTML == 'September') {
      mes.innerHTML = 'Setembro'
    } else if (mes.innerHTML == 'October') {
      mes.innerHTML = 'Outubro'
    } else if (mes.innerHTML == 'November') {
      mes.innerHTML = 'Novembro'
    } else if (mes.innerHTML == 'December') {
      mes.innerHTML = 'Dezembro'
    }
  }

});