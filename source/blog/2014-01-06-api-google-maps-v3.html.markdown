---
title:  API Google Maps V3
date: 2014/01/06
category: javascript
---

O primeiro post de 2014 será sobre a melhor descoberta que tive no ano, passaram-se 365 dias e no último mês, aos 20 minutos do segundo tempo eu aprendi uma nova ferramenta que irá agregar e muito valor aos meus projetos de hoje em diante. Neste post irei falar um pouco sobre a [API GOOGLE MAPS V3][api-link-google] onde ela sofreu atualizações e veio agora com algumas melhorias e recursos adicionais para dispositivos móveis e desktops.


No último projeto que participei o designer incluiu no layout um mapa com um local e width: 100%. Até ai nada demais não é? Fui no google maps, digitei o endereço do local e incorporei o mapa ao meu projeto com aquele iframe lindo cheio de coisas inúteis _sobrinho detected_. Pois é querido (ouvinte?) era assim mesmo que eu fazia nos meus projetos e achava isso tão lindo e fácil, agora tenho vergonha de falar que utilizava mapas assim :(


Para ser mais preciso, dia 12 de Dezembro de 2013 foi o dia que fiz este passo pela “última vez”.. Não sei o que deu em mim que não estava curtindo vê aquele iframe fdp no meu código, me dava dor nos olhos, me deu ânsia de vômitos, dor de cabeça, eu suei frio.. E fui aprender como manipular a API do Google Maps. Vamos ao que interessa, irei descrever abaixo o passo a passo de como eu cheguei [neste resultado][link-final], com esta base você consegue brincar bastante e personalizar o quanto quiser seu mapa.


###HTML
No HTML criei uma div que irá receber o mapa e estilizei esta div com CSS, determinando uma largura, altura e uma borda para melhor visualiza-la. *OBS:Não considere a prática do estilo inline, utilizei para melhor ilustrar o exemplo*


<pre class="lang-html">
&lt;div id='mapa' style='width: 100%; height: 500px; border: 1px solid #ccc;'&gt;&lt;/div&gt;
</pre>


Criei um arquivo com o nome de **mapa.js** onde terá todas as configurações e parâmetros do mapa e executei a chamada no HTML.

<pre class="lang-javascript">
&lt;script src='js/mapa.js'&gt;&lt;/script&gt;
</pre>


Meu HTML ficou desta forma:


<pre class="lang-html">
&lt;!doctype html&gt;
 &lt;html lang=”pt,BR”&gt;
  &lt;head&gt;
   &lt;meta charset=”UTF-8”&gt;
   &lt;title&gt;API Google Maps V3&lt;/title&gt;

   &lt;script src=”js/mapa.js”&gt;&lt;/script&gt;
  &lt;/head&gt;

&lt;body&gt;
  &lt;div id=”mapa” style=”width: 100%; height: 500px; border:1px solid #ccc;”&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>


###JS/CRIANDO MINHA CHAVE API
Para começar a brincar, será preciso criar uma chave de API, de acordo com as normas do Google esta chave é necessária para suas aplicações serem monitoradas e terem um “cadastro”, assim o google poderá entrar em contato com você com relação a sua aplicação caso seja necessário.


Como crio uma chave?

- Entre no site de [Console de APIs](https://code.google.com/apis/console "Console de APIs");
- Clique no lado esquerdo em **serviços**;
- Ative o serviço **API do Google Maps v3**;
- No menu esquerdo clique no link **acesso á api**, a chave de acesso estará disponível nesta página na sessão **acesso simples a api**;


###JS/EXIBINDO UM MAPA SIMPLES
Agora que você já tem uma chave pode iniciar a brincadeira, e a primeira coisa a se fazer é mostrar o mapa do local no html. Como funciona?


- Criei uma função `initialize()` onde irá englobar todos os parâmetros e configurações do mapa;
- Criei uma variável `myLatlng` onde passo a latitude, longitude (nesta ordem) do local do mapa;
- Criei um objeto `var mapOptions = {};` onde contém as variáveis de inicialização do mapa;
- `zoom` define a resolução inicial do mapa, o quanto perto ou longe ele será, os valores podem ir de 0 até qualquer número;
- `center` define que o mapa será em um ponto específico, ponto este passado na variável `myLatlng`;
- `mapTypeId` define o tipo de mapa que será exibido: ROADMAP (mapa padrão), SATELLITE (blocos fotográficos), HYBRID (rodovias, cidades, etc..), TERRAIN (exibe montanhas, rios, etc.);
- Foi definida uma variável `var map` e atribui a ela um novo objeto `Map` passando as opções definidas no `mapOptions`;


<pre class="lang-javascript">
function initialize() {

   // Exibir mapa;
   var myLatlng = new google.maps.LatLng(-8.0631495, -34.87131120000004);
   var mapOptions = {
      zoom: 17,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   // Exibir o mapa na div #mapa;
   var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

}
</pre>

Para o mapa aparecer de fato no seu projeto, é preciso inserir o script da api do google maps, mas não vou declarar no HTML o script vou inseri-lo no meu **mapa.js** onde ele carregado de forma assíncrona, melhorando o desempenho. Como faz?

- A função `loadScript()` é a que faz este procedimento, ela cria através do js a tag script no seu documento HTML com todos os parâmetros passados abaixo;
- Crio um elemento script definindo o type e o src do mesmo;
- Atenção para os parâmetros do **script.src** onde em **key** você terá que inserir a sua chave de API, em **sensor=true/false** você informa se sua aplicação usa algum sensor para determinar a localização do usuário (gps) e em **callback=initialize** você instrui a api para só executar a função `initialize()` após a api ser totalmente carregada;

<pre class="lang-javascript">
   // Função para carregamento assíncrono
function loadScript() {
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src ='http://maps.googleapis.com/maps/api/js?key=SUA_API_KEY
   &sensor=true_or_false&callback=initialize';

   document.body.appendChild(script);
}

window.onload = loadScript;
</pre>

Até agora você conseguiu mostrar o mapa na div que foi declarada no HTML e carregou de forma assíncrona a API do Google Maps, tá duvidando? Veja como ficou o [código até aqui][codigo-ate-aqui-1] e teste na sua aplicação.

###JS/MODIFICANDO OS CONTROLES DO USUÁRIO
Quando acessamos algum mapa no Google Maps ele nos mostra alguns controles como: controle de zoom, panorâmico, controle de escala, controle de giro e mapa de visão geral, mas você pode personalizar e escolher o que quer disponibilizar para seu usuário.

Caso não queira personalizar nada e deixar seu usuário com todas as configurações padrão, possibilitando que o Google futuramente adicione mais controles, não especifique nada, se você se parece comigo e gosta de "ser do contra" (no bom sentido rsrs) e quer personalizar, vamos lá!

Para desabilitar todas as configurações automáticas do Google maps defina a propriedade `disableDefaultUI: true` no objeto `Map options`. Você também pode escolher quais controles seu usuário terá acesso, os controles só aceitam valores boolean e todos definidos dentro de `Map options`, esses controles são:

- `panControl` true or false (controle panorâmico);
- `zoomControl` true or false (controle de zoom);
- `mapTypeControl` true or false (controle do tipo de mapa);
- `scaleControl` true or false (controle de escala);
- `streetViewControl` true or false (controle do street view);
- `overviewMapControl` true or false (controle de visão geral do mapa);

No meu exemplo eu desativei o controle panorâmico e agora meu `mapOptions` ficou desta forma:

<pre class="lang-javascript">
var mapOptions = {
  zoom: 17,
  center: myLatlng,
  panControl: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
</pre>

Até este momento, você já consegue visualizar o mapa e escolher quais controles seu usuário terá acesso. Não duvide, apenas [veja como está][codigo-ate-aqui-2] e teste!

###JS/INSERINDO PIN PERSONALIZADO
Os marcadores do Google maps são padrão, e você pode altera-los, e inserir um pin personalizado e dar um efeito a ele. Imagine que você quer colocar no seu site pessoal um mapa do bairro onde você mora e marcar a sua casa com um pin que será uma imagem sua (pra que isso? rsrs) vamos lá!

- O construtor capaz de fazer isto é `new google.maps.Marker`;
- Criei uma variável com o nome de `marcadorPersonalizado` passando algumas propriedades;
- `position` especifica a localização do marcador e como eu quero que ele fique na minha localização, informo a variável que contém estas informações `myLatlng`;
- `map` especifica onde o marcador vai ser posicionado (não precisa ser declarado, valor opcional). Caso eu utilize o pin em mais algum local, criei uma variável `image` informando o caminho do meu pin;
- `icon` especifica a imagem que será o marcador, aqui você inclui o caminho da imagem podendo ser absoluto ou relativo. A própria api irá redimensionar a imagem para o tamanho padrão;
- `title` especifica o texto que irá aparecer ao encostar o mouse em cima do pin;
- `animation` define alguma animação já definida pela api do google maps, os possíveis valores são DROP (o marcador “cai do céu” para o local indicado) e BOUNCE (o marcador fica pulando no local indicado);


<pre class="lang-javascript">
// Marcador personalizado;
var image = 'https://cdn1.iconfinder.com/data/icons/gpsmapicons/
blue/gpsmapicons01.png';
  var marcadorPersonalizado = new google.maps.Marker({
  position: myLatlng,
  map: map,
  icon: image,
  title: 'Marco Zero - Recife/PE',
  animation: google.maps.Animation.DROP
});
</pre>


Até aqui você está mostrando o mapa, personalizando os controles e modificando o pin para um de seu gosto e de quebra ainda consegue anima-los. [Veja como está ficando o JS até agora][codigo-ate-aqui-3].


###JS/JANELA DE INFORMAÇÕES NO MAPA
Em alguns mapas quando o usuário clica no pin do local é aberto uma espécia de balão de texto sobre aquele pin, com algumas informações tipo telefone, e-mail, ou qualquer coisa do gênero. Esta “janela” que se abre é chamada de janela de informações ou `InfoWindow` (nome bastante óbvio rsrs), agora vamos inseri-la no nosso mapa. Seguindo o exemplo anterior, agora você quer que quando o usuário clique na sua foto do mapa, apareça seus dados para contato, e-mail, telefone, etc. Mãos a obra!


- `new google.maps.InfoWindow` realiza toda a mágica;
- `content` deverá ter uma string de texto ou nó no DOM para exibir na janela. Aqui dentro será inserido o conteúdo que você deseja que apareça no balão de informações. Caso queira utilizar esta string em outro local, criei uma variável com o nome `contentString` onde inseri as informações do balão.;
- `maxWidth` especifica em pixels a largura máxima do balão de informações. Por padrão a janela se expande para incluir o conteúdo e o texto é quebrado automaticamente, quando se aplica um valor no `maxWidth` você força um determinado tamanho para ela;
- É preciso atribuir um evento ao método `infowindow.open` caso contrário ele não será aberto no clique. O `google.maps.event.addListener` adiciona um evento de 'click' ao `marcadorPersonalizado`, isso irá disparar o método `infowindow.open` no `map` e no `marcadorPersonalizado`. Agora quando você clicar no pin irá abrir o balão de informações com o conteúdo da variável `contentString`;

<pre class="lang-javascript">
   // Parâmetros do texto que será exibido no clique;
   var contentString = ‘&lt;h2&gt;Marco Zero&lt;/h2&gt;’ + ‘&lt;p&gt;Praça Rio Branco, Recife/PE.
   &lt;/p&gt;’ +
   ‘&lt;a href=”http://pt.wikipedia.org/wiki/Pra%C3%A7a_Rio_Branco_(Recife)
   ”target=”_blank”
   &gt;clique aqui para mais informações&lt;/a&gt;’;

   var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
   });

// Exibir texto ao clicar no pin;
google.maps.event.addListener(marcadorPersonalizado, ‘click’, function() {
   infowindow.open(map,marcadorPersonalizado);
});
</pre>

Mais um nível e esse foi tranquilo hein? Agora você já está mostrando o mapa, personalizando os controles e o pin, animando o pin e inseriu um balão de informações no clique do usuário. [Confere aqui como está ficando o código][codigo-ate-aqui-4] e vamos para o último passo!

###JS/MODIFICANDO A COR DO MAPA
Pra completar o design do seu site, você queria pintar o mapa do seu bairro com sua cor favorita que é azul, para isso você precisará criar seu estilo, vamos lá? Para inserir um estilo personalizado no seu mapa você precisa saber como é a matriz de estilos padrão para quando combinar os estilos obter o resultado que deseja.

- `featureType` especifica o tipo de mapa;
- `elementType` especifica o tipo de elemento que será exibido no mapa, os valores suportados são: **geometry**(todos os elementos geométricos), **geometry.fill**(seleciona apenas o preenchimento da geometria), **geometry.stroke**(seleciona apenas a textura da geometria), **labels**(seleciona apenas rótulos textuais), labels.icon(seleciona apenas o ícone do rótulo), **labels.text**(seleciona apenas o texto do rótulo), **labels.text.fill**(seleciona apenas o preenchimento do rótulo), **labels.text.stroke**(seleciona apenas a textura do texto);
- `stylers` É desta combinação de estilos que a cor irá se originar, os valores que você pode trabalhar são: **hue**(string hexadecimal RGB que indicará a cor basica), **lightness**(indica o brilho do elemento, valores negativos aumentam a escuridão, este valor varia de -100 e 100), **saturation**(intensidade da cor básica a ser aplicada, este valor varia de -100 e 100), **gamma**(modificam a luminosidade das matizes, utilizados para modificar o contraste dos elementos, este valor varia entre 0.01 e 10.0), **inverse_lightness**(se true, inverte a luminosidade existente), **visibility**(on, off ou simplified, indica como um elemento aparece no mapa);

<pre class="lang-javascript">
// Criando um array com os estilos
var styles = [
{
  stylers: [
   { hue: “#41a7d5” },
   { saturation: 60 },
   { lightness: -20 },
   { gamma: 1.51 }
  ]
},
 {
  featureType: “road”,
  elementType: “geometry”,
  stylers: [
   { lightness: 100 },
   { visibility: “simplified” }
  ]
 },
 {
  featureType: “road”,
  elementType: “labels”
 }
];
</pre>

Criei uma matriz de estilos (descrita acima), que nada mais é que um array com os estilos do mapa, onde neste array é passado as cores e os estilos para exibição;

Agora crio um novo objeto `google.maps.StyledMapType` passando a matriz que você criou e um nome para o novo tipo de mapa;

<pre class="lang-javascript">
var styledMap = new google.maps.StyledMapType(styles, {
  name: 'Mapa Style'
});
</pre>

Crie o objeto do mapa e nas opções do mapa `mapOptions` inclua um identificador para o novo tipo de mapa `map_style`. Isto irá possibilitar o usuário a visualizar o mapa tradicional do Google `google.maps.MapTypeId.ROADMAP` e o seu mapa `map_style`. Para visualizar isto, observe no canto superior direito do mapa, se você desejar só disponibilizar o seu tipo de mapa, é só em `mapTypeIds` deixar o identificador do seu mapa;

<pre class="lang-javascript">
mapTypeControlOptions: {
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
}
</pre>

Associe o estilo do mapa com o `MapTypeId`;

<pre class="lang-javascript">
   map.mapTypes.set('map_style', styledMap);
   map.setMapTypeId('map_style');
</pre>

E é isso, agora você já está apto para inserir um mapa, personalizar controles e pin, animar o pin e customizar as cores do seu mapa. Veja o [código completo aqui][codigo-final].

O post ficou enorme, mas espero que eu tenha sido bastante claro e tenha conseguido transmitir da melhor forma este conteúdo pois a API não é difícil, consegui fazer isso tudo em um único dia e vocês também podem. Qualquer dúvida ou se acha que fiz algo de errado, entre em contato comigo ou deixa nos comentários :

Links de referência:

- [https://developers.google.com/maps/documentation/javascript/tutorial?hl=pt-br](https://developers.google.com/maps/documentation/javascript/tutorial?hl=pt-br "Link de Referência / Google")


[api-link-google]: https://developers.google.com/maps/documentation/javascript/?hl=pt-BR
[link-final]: http://thulioph.github.io/mapa/
[codigo-ate-aqui-1]: https://gist.github.com/thulioph/8150735
[codigo-ate-aqui-2]: http://gist.github.com/thulioph/8151176
[codigo-ate-aqui-3]: https://gist.github.com/thulioph/8151788
[codigo-ate-aqui-4]: https://gist.github.com/thulioph/8152405
[codigo-final]: https://gist.github.com/thulioph/8153570