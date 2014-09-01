---
title:  Upgrade Sublime Text 2
date:   2013-09-04 09:00:00
---

Ultimamente tenho pesquisado muito sobre o sublime, pois passo a maior parte do meu tempo admirando-o e conversando com o mesmo, e toda minha concentração é nele, para digitar qualquer coisa, rascunho, briefing, post, comentário, testes, etc.. então nada mais justo com ele (e comigo também) do que melhora-lo um pouco mais facilitando meu uso e meu rendimento. Deixando de conversa, vou dar um upgrade no sublime através do **Preferences** -> **Settings-Users**.

<br>
###Estilo do Cursor

<br>
Particularmente não curto muito o estilo padrão do cursor piscando rápido, agora posso deixar ele alternando fade-in / fade-out, *é uma frescura* mas já me acostumei com ele alterado.

<br>
{% highlight json %}
	"caret_style": "phase"
{% endhighlight %}

<br>
As opções para o estilo são: “smooth”, “phase”, “blink”, “wide” e “solid”.


<br>
###Tamanho da Fonte

<br>
Cansei de ver pessoas utilizando o sublime com uma fonte enorme, não sou cego por isso não curto, então utilizo como padrão o tamanho:

<br>
{% highlight json %}
	"font_size": 8
{% endhighlight %}


<br>
###Highlight fudicore

<br>
Esta foi a melhor descoberta de todas.. Nos códigos enormes sempre é difícil encontrar o cursor, então insira a linha de código abaixo e serás mais feliz assim como eu. Esta opção faz com que a linha onde se encontra o cursor, ganhe um destaque.

<br>
{% highlight json %}
	"highlight_line": true
{% endhighlight %}

<br>
###Padding para melhorar a visibilidade

<br>
Só após utilizar é que vi a diferença que realmente faz, pra alguns pode ser sutil, para outros uma grande diferença..Adicione um padding no top e bottom facilmente para melhorar sua visibilidade no código;

<br>
{% highlight json %}
	"line_padding_bottom": 1,
	"line_padding_top": 1
{% endhighlight %}

<br>
###Show/Hide folding

<br>
Você pode recolher seu código para melhorar a visualização, caso esteja focado em determinada parte, mas nem sempre você sabe como fazer isso pelo teclado, adicione:

<br>
{% highlight json %}
	"fade_fold_buttons": false
{% endhighlight %}

<br>
Desta forma, o  *triângulo* com - ou + para expandir ou recolher seu código, estará sempre visível ao lado do número da linha.

<br>
###Pastas do projeto em "destaque"

<br>
O painel lateral do sublime, não destaca folders dos arquivos; Com esta opção, as pastas agora ficaram em bold, facilitando a visualização.

<br>
{% highlight json %}
	"bold_folder_labels": true
{% endhighlight %}

<br>
###Destaque na identação

<br>
Novamente.. Quando seu código está grande demais, você pode se perder na identação, se ajude inserindo uma cor na linha onde se encontra a identação;

<br>
{% highlight json %}
	indent_guide_options”:
[

	"draw_normal",
	"draw_active"

]
{% endhighlight %}

<br>
###Salve sem querer

<br>
Você pode salvar a modificação feita no arquivo, sem precisar do *ctrl + s* , insira esta linha e apenas alterne entre as abas do projeto e veja que a modificação foi salva au-to-ma-ti-ca-men-te.

<br>
{% highlight json %}
	"save_on_focus_lost": true
{% endhighlight %}

<br>
**Esta foi a outra descoberta modefucker**.

<br>
###Destaque na aba do projeto

<br>
Se você não utiliza nenhum tema no st, pode ser de grande ajuda. Eu nunca sabia quando tinha alterado um arquivo ou não, e por desencargo de consciência sempre salvava, com esta linha de código, o "x" tradicional que existia quando alterava, é alterado, melhorando a visualização.

<br>
{% highlight json %}
	"highlight_modified_tabs": true,
{% endhighlight %}

<br>
###Desabilita o drag and drop de seleção de textos

<br>
As vezes você sem querer consegue utilizar o drag-and-drop do sublime (poucos devem saber que existe rsrs), com esta configuração não vai te atrapalhar mais.

<br>
{% highlight json %}
	"drag_text": false
{% endhighlight %}

<br>
###Exibe caracteres em branco

<br>
Acho ele útil por questão de organização e alinhamento, habilitando esta opção você consegue visualizar os espaços em branco no seu código.

<br>
{% highlight json %}
	"draw_white_space": "all"
{% endhighlight %}

<br>
###Ignorar arquivos

<br>
Na pasta do seu projeto existem uns arquivos que você não quer visualiza-los no sublime, passe a extensão dos arquivos como um array e acabe com isso. Cola esse código lá e volte ao trabalho!

<br>
{% highlight json %}
	"file_exclude_patterns":
	["*.lib",".DS_Store","*~","*.db","*.eot","*.ttf","*.woff","*.tmp","Thumbs.db"]
{% endhighlight %}


<br>
###Ignorar Pastas

<br>
Não basta ignorar os arquivos, tem um pasta que você não quer visualiza-la no projeto?

<br>
{% highlight json %}
	"folder_exclude_patterns": ["arquivos","$RECYCLE.BIN"],
{% endhighlight %}

<br>
No final meu arquivo ficou com [essa cara][Arquivo final]. No gist está todo comentado para quem quiser utilizar. No arquivo existe uma linha onde tem o tema que utilizo, quem se interessar em saber mais segue o [link](https://github.com/EleazarCrusader/nexus-theme "Tema utilizando no Sublime Text - Nexus").

[Arquivo Final]: https://www.gist.github.com/thulioph/6665879

<br>
Essas foram as configurações que descobri, e você tem alguma que queira mostrar para todos? Se conhecer alguma legal posta nos comentários :D

<br>
Post original: [http://thulioph.tumblr.com/post/60265704655/](http://thulioph.tumblr.com/post/60265704655/ "Veja no Tumblr")