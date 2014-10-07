---
title: API Geolocation
date:  2014-03-10 09:00:00
---

Depois de tanto tempo distante, para ser mais preciso 1 mês e 16 dias estou de volta e hoje vou falar sobre a [API Geolocation do HTML5][api-geolocation-google], que por sinal já é “bastante” antiga mas eu ainda não tinha conseguido fazer nada com ela, nem se quer mostrar um mapa :( Maaas agora as coisas mudaram, depois de ver com calma e brincar um pouco, finalmente consegui utiliza-la e hoje irei mostrar como, **LET’S WORK!**

O resultado deste post é este [aqui][link-final] e você pode ver todo o código comentado [aqui][codigo-comentado].

### Iniciando
A api é bastante simples e este é seu código:

<pre class="lang-javascript">
   navigator.geolocation.getCurrentPosition(success, error);
</pre>

**Papaya with sugar hein?**

Você passa como parâmetros duas funções callback: `success` e `error`, que irão determinar o que vai acontecer caso o usuário permita ser localizado ou não.

###SUCCESS
Caso o usuário permita ser localizado, esta função irá me retornar o mapa com a sua localização e um pin marcando.

Na função success eu tenho:

<pre class="lang-javascript">
function success(position) {
   var status = document.querySelector('status');
      if (status.className == 'success') {
      return;
   }

   status.className = 'success';
   status.innerHTML = 'Sua localização está no mapa abaixo.';

   var myLatlng = new google.maps.LatLng(position.coords.latitude,
   position.coords.longitude);
      var mapOptions = {
      zoom: 17,
      center: myLatlng,
      panControl: false,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   var contentString = '&lt;h2&gt;Você está aqui&lt;/h2&gt;' +
      '&lt;p&gt;Este foi um exemplo de como pegar a geolocalização do usuário&lt;/p&gt;';
      var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
   });

   var map = new google.maps.Map(document.getElementById('mapuser'), mapOptions);

   var image = 'https://cdn2.iconfinder.com/data/icons/snipicons/500/map-marker-128.png';
   var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.BOUNCE
   });

   google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
      infowindow.open(map,marcadorPersonalizado);
   });

}
</pre>


###O que foi feito?
Criei uma variável `status` que recebe o id com o mesmo nome que foi determinado no meu html. E se `status` receber a classe `success` ele retorna tudo que estiver dentro da função `success`.

###O que a função success faz?

- Adição da classe success através do `status.className`
- Através do `status.innerHTML` foi passado um texto que irá informar uma mensagem ao usuário.
- A exibição do mapa através das coordenadas que foram retornadas pela API quando o usuário aceitou ser localizado e a estilização do mapa incluindo um pin e ocultando algumas opções do mapa.

**NOTA:** Sobre a exibição do mapa, recomendo ler o material onde [falo tudo sobre a api do google maps][post-api-google-maps] e a única diferença nesta parte foi que inseri o retorno `position.coords.latitude`, `position.coords.longitude` da api na variável `myLatlng` e não declarei a latitude e longitude como no exemplo do outro post.

###ERROR
Caso o usuário não permita ser localizado, esta função irá me retornar uma mensagem informando que o usuário não permitiu ser localizado.

Na função error eu tenho:

<pre class="lang-javascript">
function error(msg) {
  var status = document.querySelector('status');
  status.innerHTML = typeof msg == 'string' ? msg : 'Você não permitiu ser localizado.';
  status.className = 'fail';
}
</pre>


###O que foi feito?
Criei uma variável `status` que recebe o id com o mesmo nome que foi declarado no meu html.

O que a função `error` faz?

- Adição da classe fail através do `status.className`;
- Através do `status.innerHTML` foi passado um texto que irá informar uma mensagem ao usuário;

###Resumindo
A API é bastante simples e te retorna dois valores `position.coords.latitude` onde indica a latitude e `position.coords.longitude` onde indica a longitude, só precisei indicar onde queria esse resultado e o resto eu já tinha feito praticamente tudo no [outro post][post-api-google-maps].

Espero que vocês tenham entendido e feedbacks são sempre bem vindos.

Links de Referência:

- [http://tableless.com.br/html5/?chapter=24][post-tableless];
- [https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation][link-mozilla];


[api-geolocation-google]: https://www.google.com.br/search?q=geolocation+api+html5&oq=geolocation+api+html5&aqs=chrome..69i57j69i65j0l4.2541j0j7&sourceid=chrome&espv=210&es_sm=119&ie=UTF-8
[link-final]: http://thulioph.github.io/geolocation/
[codigo-comentado]: https://github.com/thulioph/geolocation
[post-api-google-maps]: /api-google-maps-v3/
[post-tableless]: http://tableless.com.br/html5/?chapter=24
[link-mozilla]: https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation
