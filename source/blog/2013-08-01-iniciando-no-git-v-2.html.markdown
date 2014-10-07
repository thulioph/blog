---
title:  INICIANDO NO GIT v.2
date:   2013-08-01 09:00:00
---

Se você não viu e/ou não leu a [v.1](../iniciando-no-git-v-1) deste guia, pare tudo e vá conferir o que foi apresentado, depois você volta :) Nesse post vou falar de duas formas de se ter um repositório git:                                                                                                                                                                                                                   

###Caso 1
Você tem um diretório/projeto existente em sua máquina local e quer enviar para um servidor remoto (bitbucket por exemplo)

1. Acesse o site do seu **servidor remoto** e entre com seu login e senha;
2. Crie um repositório;


![create-repo-bitbucket](../images/iniciando-no-git-v2.png "Criando um repositório no Bitbucket")


Em seguida, vá para o diretório do seu **projeto local**:


<pre class="lang-shell">
	cd c:/users/web/repositorio-teste
</pre>


E inicie o Git, com o comando:


<pre class="lang-shell">
git init
</pre>


Este procedimento criará uma pasta oculta nomeada como **.git**  que contém todos os arquivos necessários para monitorar seu diretório. Mas calma! Os seus arquivos não estão sendo monitorados ainda..


![pasta-git-oculta](../images/pasta-git-oculta.png "Pasta git oculta")


Para dar início ao monitoramento você precisa adicionar os arquivos e fazer um commit inicial dentro do diretório do projeto


<pre class="lang-shell">
git add *
git commit -m 'Meu primeiro commit'
</pre>


### EXPLICANDO

Adiciona todos os arquivos do diretório.

<pre class="lang-shell">
git add *
git add —all
</pre>



Adiciona todos os arquivos com a extensão .php ou a extensão que você desejar.

<pre class="lang-shell">
git add *.php
</pre>



Adiciona o arquivo que você digitou o nome; _o nome deverá ser incluído com sua extensão_.

<pre class="lang-shell">
git add arquivo.html
</pre>



Caso você precise adicionar determinados arquivos de uma pasta ou subpasta do seu projeto.

<pre class="lang-shell">
git add assets/css/main.css
</pre>


Faz o commit do seu(s) arquivo(s) adicionado(s).

<pre class="lang-shell">
git commit -m 'Seu commit aqui'
</pre>


Até ai tudo bem, você iniciou um monitoramento em um diretório existente, adicionou uns arquivos e fez um `commit` inicial *parabéns, uhuul* mas e agora?

Vamos supor que você finalizou tudo, e quer enviar os arquivos para um servidor remoto, execute o comando:

<pre class="lang-shell">
git remote add origin https://thulioph@bitbucket.org/thulioph/repositorio-teste.git
git push -u origin master
</pre>


### EXPLICANDO

Aponta para qual servidor remoto será enviado seus arquivos. *Github*, *Bitbucket*, *Heroku* etc..

<pre class="lang-shell">
git remote add origin endereco_do_servidor_remoto
</pre>


O `push` é o comando responsável pelo envio dos seus arquivos para o servidor remoto, e *master* é a `branch` que você irá enviar o(s) arquivo(s).

<pre class="lang-shell">
git push -u origin master
</pre>


Será solicitado o usuário e senha que você utiliza no seu servidor remoto, para garantir o acesso. Basta colocar os dados correspondentes e *voilà*! Os arquivos serão enviados.


Abaixo todo o procedimento de uma única vez, adicionei os arquivos de forma separada, primeiro a **index.php** depois o **css/style.css** fiz um *commit* para cada um e executei *push*.

![procedimento-envio-arquivos-bitbucket](../images/procedimento-add-arquivos-bitbucket.png "Procedimento para adicionar arquivos para o Bitbucket")


###P.S

Você enviou seus arquivos e precisa atualiza-los, como faz?

O procedimento é parecido com o descrito acima, você já executou o `git init` para monitorar o repositório e já executou o `git remote add origin` informando para onde irão os arquivos;

Agora só será necessário adicionar os arquivos `git add —all` , `git commit -m 'Seu commit'` e `git push` , será solicitado sua senha e o repositório está atualizado.