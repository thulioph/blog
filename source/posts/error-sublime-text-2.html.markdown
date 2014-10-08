---
title:  Error no Sublime Text 2
date:   2013-08-15 09:00:00
category: sublime
---

Ontem (14/08/2013) quando chego no trabalho, executo o sublime e ele me aparece com um erro. Aconteceu que o sublime amanheceu de saco virado e decidiu ignorar todos os meus plugins *rsrs brincadeira, na verdade ainda não sei o porque disso* mas o *'bom'* é que só não foi comigo, mas com muita gente que trabalha com ele.

![erro-sublime-text-2](../images/erro-sublime-text-2.jpg "Erro no Sublime Text 2")

Descobri o problema, quando fui no [grupo do facebook](https://www.facebook.com/groups/sublimedevs/ "Grupo no Facebook") sobre o sublime e tinha muita gente com problemas iguais, até que um cara postou a resposta para nossos problemas:

**Seus plugins foram parar no Ignored Packages. Abre o Settings - User e tira de lá.**

Realmente, todos os plugins que utilizo, estavam lá no ignored packages do sublime, como resolver?

Vá em *PREFERENCES* > *SETTINGS-USER* e deixe o arquivo desta forma:

<pre class="lang-json">
{

  “ignored_packages”:

  [ ]

}
</pre>

Após isso reinicie o sublime e tudo estará ok.

Existem outras formas que foram expostas no grupo, que também deram certo, não testei nenhuma outra além dessa que postei, então caso tenha interesse, abaixo seguem links que podem te ajudar, ou até mesmo no próprio grupo você acompanhando os posts :)

- [http://www.sublimetext.com/docs/2/vintage.html](http://www.sublimetext.com/docs/2/vintage.html "Leia mais sobre Vintage Mode")
