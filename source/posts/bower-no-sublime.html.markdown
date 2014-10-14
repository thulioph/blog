---
title:  Bower no Sublime
date:   2013-11-07 09:00:00
category: sublime
---

<h3 id="internal-title-post" class="internal-title-post"></h3>

Esses dias andei testando o bower, pra quem não conhece ele é um [gerenciador de pacotes](http://bower.io/ "Site do Bower") que vai te ajudar bastante e irá melhorar o seu workflow em alguns %. Em todo início de projeto, existem algumas bibliotecas que você sempre inclui:  [jQuery](http://jquery.com/ "jQuery"), [modernizr](http://modernizr.com/ "Modernizr"), etc.. Todas as vezes você vai no repositório, clona ou faz o download através do site da biblioteca e isso tudo gera tempo, imagine se você trabalha com 12 bibliotecas, e ter que ir fazer o download atualizado de cada uma? Já se vai uns 20 minutos por baixo só de “tempo perdido”.

Pensando nisso, o bower nasceu e para melhorar tudo ele foi integrado ao sublime. Antes você fazia o download, editava as configurações, tudo via terminal mas agora pode fazer tudo isso pelo editor.

Comece instalando o bower, via [package control](https://sublime.wbond.net/ "Package Control"): `cmd + shift + p` - digite `install package` - procure por `bower`.

Após a instalação você já está pronto para inserir seus pacotes, configurar o caminho deles nos seus projetos, etc..

Você não vai ter 100% dos “benefícios” do bower no sublime, algumas coisas como:

- Criar o arquivo `bower.json` dinâmicamente
- Incluir dinâmicamente os novos pacotes instalados no `bower.json`
- Remover os pacotes:  `bower uninstall`
- Verificar versões de um pacote: `bower info`
- Mapeamento dos pacotes: `bower list —paths`
- Atualizar pacotes: `bower update`

ainda não consegui descobrir como fazer pelo sublime, mas não vejo problema em não utiliza-lo pelo editor.

O bower é super simples de usar, confira o vídeo que separei do plugin e alguns links que podem te ajudar com alguma dúvida caso fique.

[Link do plugin bower para o sublime](https://github.com/benschwarz/sublime-bower "Plugin bower para Sublime Text")

[Conheça mais sobre o Bower neste post do Vitor Britto](http://www.vitorbritto.com.br/blog/gerenciando-dependencias-front-end-no-seu-projeto/ "Blog do Vitor Britto")

Abaixo segue o vídeo que vi e descobri o bower no sublime.

<iframe width="800" height="480" src="//www.youtube.com/embed/BxexnKtfg1A" frameborder="0" allowfullscreen></iframe>

Se você tem alguma dúvida, sugestão, ou não concorda com alguma coisa que falei aqui, deixa nos comentários que a gente se comunica :D
