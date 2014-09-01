---
title:  INICIANDO NO GIT v.1
date:   2013-07-31 09:00:00
category: git
---

Não vou estender muito sobre sua história, como surgiu, o que ele é, ou do que ele é capaz, caso você tenha interesse, dar uma rápida pesquisada na web. Nesta parte, vou falar de configurações básicas e de como ar o “pontapé inicial”. Então, vamos lá! :) Para o post não ficar cansativo, vou dividi-lo em algumas partes, e farei um índice no início de todas as partes.                                                                                                                                             

#INSTALANDO

<br>

Mostrarei como instalar o Git nas plataformas Windows e Mac.

<br>

####Mac:

A forma mais fácil de se instalar o git em um Mac é através do instalador gráfico que você pode baixa-lo através do Google Code.

<br>

![install-git](../images/install-git.png "Install Git")

<br>

####Windows:

Faça o download do instalador do msysgit e execute-o, o resto ele faz automaticamente.

<br>

#CONFIGURANDO

<br>

Após instalar o git você deve definir nome de usuário e endereço de e-mail, pois todos os seus commits terão essas informações, para isso execute os comandos:

<br>

```powershell
$ git config --global user.name 'Seu Nome'
$ git config --global user.email seuemail@dominio.com
```

<br>

![install-git-2](../images/install-git-2.png "Install Git 2")

<br>

Só é necessário fazer esse procedimento uma única vez, pois foi passada a opção `--global` , com isso o git sempre vai usar essas informações para qualquer coisa feita no sistema. Caso queira usar um usuário e e-mail diferentes para cada projeto, ou em um projeto específico, é só executar o comando sem o `--global`.

<br>

#SUPORTE

<br>

Para listar e verificar todas as configurações do seu git execute o comando:

<br>

{% highlight powershell %}
$ git config --list
{% endhighlight %}

<br>

Irá listar todas as configurações feitas no git.

<br>

![install-git-3](../images/install-git-3.png "Install Git 3")

<br>

Você se atrapalhou e precisa de ajuda ou tem alguma dúvida, execute o comando:

<br>

{% highlight powershell %}
$ git help
{% endhighlight %}

<br>

![install-git-4](../images/install-git-4.png "Install Git 4")

<br>

Se você tem dúvida em um comando específico (neste caso o config) e precisa de um help nele, execute o comando:

<br>

{% highlight powershell %}
$ git config
{% endhighlight %}

<br>

![install-git-5](../images/install-git-5.png "Install Git 5")

<br>

irá abrir no seu navegador, um arquivo de ajuda com mais informações.