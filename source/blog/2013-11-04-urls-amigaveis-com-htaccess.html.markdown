---
title:  URL'S Amigáveis com .HTACCESS
date:   2013-11-04 09:00:00
---

A bastante tempo eu estava procurando sobre como obter urls amigáveis nos meus projetos e levava o maior pau pois nunca dava certo, todo mundo falava que era super simples e que não tinha mistério e blá blá blá, mas ninguém nunca me ensinou de verdade *#chateado rsrs*. Esses dias atualizei [meu site](http://thulioph.com/ "Meu site :)") e então resolvi que ele teria urls amigáveis e novamente cai nas pesquisas. Existem várias maneiras de se conseguir, porém vou mostrar através do [.htaccess](http://en.wikipedia.org/wiki/Htaccess "O que é isso?").

<br>
urls amigáveis nada mais é do que uma url amigável. mas como assim?

<br>
Utilizando como exemplo sites de compras, quando você está em determinado produto a url está algo parecido com isso:

<br>
{% highlight html %}
http://www.sitedecompras.com.br/produtos.php?categoria=8?id=13
{% endhighlight %}

<br>
E o produto na verdade é uma caixinha de som.

<br>
Porque não fica algo parecido com isso:

<br>
{% highlight html %}
http://www.sitedecompras.com.br/produtos/eletronicos/caixa-de-som
{% endhighlight %}

<br>
Aí é onde entram as urls amigáveis ou friendly URLs. Você vai informar ao servidor através do htaccess que as urls poderão ser “acessadas” também por outro caminho. Mãos a massa:

<br>
O bloco de código que representa a reescrita de urls é este:

<br>
{% highlight html %}
<IfModule mod_rewrite.c>
  RewriteEngine On

  RewriteRule ^index/?$ /index.php [NC,L]
  RewriteRule ^empresa/?$ /empresa.php [NC,L]
  RewriteRule ^clientes/?$ /clientes.php [NC,L]
  RewriteRule ^galeria/?$ /galeria.php [NC,L]
  RewriteRule ^contato/?$ /contato.php [NC,L]
</IfModule>
{% endhighlight %}

<br>
##Explicando cada pedaço de código:

<br>
###IfModule
Verifica se determinado módulo existe e se está habilitado, no exemplo ele verifica se o `mod_rewrite.c` está presente, caso esteja, tudo dentro do bloco de condição será lido, caso contrário nada funciona.

<br>
###RewriteEngine On
Habilita a reescrita de url.

<br>
###RewriteRule
Regra de reescrita, informa ao servidor que nesta linha existe uma regra que ele deverá interpretar.

<br>
###^index/?$
[Expressão regular](http://pt.wikipedia.org/wiki/Express%C3%A3o_regular "O que é isso?") que valida a url. Dentro da expressão você indica como quer que fique a url.

<br>
*OBS*:
o circunflexo **^** significa 'início' , o cifrão **$** significa fim e a **/?** significa barra opcional, faz com que caso tenha uma barra no final da última palavra a reescrita funcione;

<br>
###/index.php
Informa ao servidor qual arquivo irá receber aquela reescrita. Aqui você informa ao servidor a url antiga.

<br>
###NC,L
Estes são flags. **NC** *no case, ignora a diferença entre maiúsculas e minúsculas*, **L** *last, impede que outra regra subscreva esta*.

<br>
Para facilitar eu resolvi sempre lembrar destes 'passos':

<br>
- 1. Primeiro vem o endereço novo e depois vem o endereço atual.
- 2. Cada linha de **RewriteRule** representa uma url do seu projeto.
- 3. Quando for linkar as páginas no html não precisa incluir a extensão do arquivo. Seguindo o exemplo, só é necessário `<a href='/contato'>`


<br>
Espero que tenha sido claro no post e que ajude a tirar as dúvidas de muitas pessoas. Qualquer dúvida, correção ou sugestão, deixe nos comentários que mantemos contato :D