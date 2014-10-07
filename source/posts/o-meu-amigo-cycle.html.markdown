---
title:  O meu amigo Cycle
date:   2013-09-26 09:00:00
---

Hoje tirei o dia para falar do “meu amigo” [Cycle][link-cycle]. Ele é um plugin jQuery que quebra o galho quase que de vez em sempre, quando preciso fazer algumas coisas nos meus projetos, sem falar que você pode personalizar o quanto quiser, ele é super fácil de implementar e infelizmente muitas pessoas não o conhecem e é por isso que vim falar dele aqui hoje.
Vejo direto nos grupos do facebook um ou outro perguntando: *“alguém conhece um plugin de slide legal e fácil?"* , *"me ajudem preciso de um slide pro meu site urgente!!!!!!!”*

Então pessoal, este post vai para vocês :P

Alguns vão falar: *“pô, mas se você sempre utiliza ele, isso faz com que seus projetos sempre tenham a mesma cara."*
**Não**, ele disponibiliza vários efeitos diferentes. Veja como ele funciona:

No **HTML** é preciso definir o 'alvo' do plugin *div* e dentro colocar o que vai receber o cycle, podendo ser qualquer coisa: img, p, ul, etc..

<pre class="lang-html">
   <div>
      <ul>
         <li>Item 01</li>
         <li>Item 02</li>
         <li>Item 03</li>
      </ul>

      <ul>
         <li>Item 04</li>
         <li>Item 05</li>
         <li>Item 06</li>
      </ul>
   </div>
</pre>

No *CSS* você faz o estilo que preferir no alvo e no conteúdo, lembrando de inserir no alvo `overflow:hidden`.

<pre class="lang-css">
div{
   width: 150px;
   height: 150px;
   overflow: hidden;
}

div li{
   display: inline-block;
   list-style-type: none;
   background: #f00;
   border: 1px solid #000;
   margin: 2px 0px;
   width: 100px;
   height: 20px;
}
</pre>

No **JS** é correr pro abraço.

<pre class="lang-javascript">
$(“div”).cycle({
   // parâmetros
});
</pre>

[Veja o exemplo acima funcionando](http://codepen.io/thulioph/full/DulsA "Link do exemplo funcionando")

Fácil em? Com isso você pode fazer vários tipos de combinações e ter vários efeitos legais, sem perder muito tempo. Basta observar os parâmetros do plugin para ver qual a melhor forma de você utiliza-lo. [Na página do Cycle][link-cycle], tem muito exemplo que você pode se guiar, basta observar os [efeitos](http://jquery.malsup.com/cycle/browser.html "Efeitos Cycle"), a página de [demonstração](http://jquery.malsup.com/cycle/more.html?v2.23 "Página de demonstração") e a página de [opções](http://jquery.malsup.com/cycle/options.html "Página de opções") onde ensina o que cada parâmetro faz e como pode configura-lo.

Fiz alguns exemplos utilizando imagens e você pode conferir o código completo [aqui](https://gist.github.com/thulioph/6651019 "Exemplo feito para o cycle").

Cycle teve uma atualização e veio com umas melhorias e propõe uma maneira um pouco diferente da citada neste post, deixo o [link][link-cycle-2] caso se interesse.

Espero que este plugin seja útil para vocês assim como sempre foi para mim. Dúvidas? Sugestões? Correções? Deixa nos comentários :D

[link-cycle]: http://jquery.malsup.com/cycle/
[link-cycle-2]: http://jquery.malsup.com/cycle2/