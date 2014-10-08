//= require "jquery"
//= require_tree .

$(document).ready(function() {
  // Change name of month
  var meses = $('.month');

  for (var i = 0; i < meses.length; i++) {
    var mes = meses[i];
    changeMonth();
  }

  disqus();

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

  // Adds disqus
  function disqus() {
    /* * * CONFIGURATION VARIABLES: THIS CODE IS ONLY AN EXAMPLE * * */
    var disqus_shortname = 'blogthulioph'; // Required - Replace example with your forum shortname
    var disqus_identifier = window.location.href;
    var disqus_title = window.location.href.replace('http://blog.thulioph.com/', '');
    var disqus_url = window.location.href;

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }

});