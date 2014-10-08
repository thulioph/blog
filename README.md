## blog.thulioph.com
> [Meu blog pessoal](http://blog.thulioph.com "My personal blog :)")

Este blog foi construído para disseminar conteúdo relacionado a desenvolvimento, tecnologias e afins, sempre com o intúito de ajudar quem está começando e tirar algumas dúvidas. Ele foi desenvolvido utilizando o [Middleman](http://middlemanapp.com), para saber mais acesse o site do projeto.

## Como instalar

1. Clone este repositório.
2. Rode o comando: `bundle install`.
3. Após instalar todas as dependências, rode o comando: `middleman server`.
4. Seu servidor irá rodar na porta `http://0.0.0.0:4567`.

## Posts
Os parâmetros que podem ser utilizados para cada **post** são:

```
title: Título do Post
date: aaaa/dd/mm
local: Site onde foi publicado
category: categoria
link: http://link-do-post-externo.html
```

Para pegar as informações de cada post de forma dinâmica, utilize: 
`<%= article.data.prop %>` onde `prop` será um dos parâmetros descritos acima.

## Categorias
As únicas **categorias** existentes nos posts são: 

##### `javascript`
Posts relacionados à **Javascript**.

##### `css`
Posts relacionados à **CSS**.

##### `html`
Posts relacionados à **HTML**.

##### `outros`
Posts relacionados à outro tipo de conteúdo que **não seja diretamente desenvolvimento**.

##### `sublime`
Posts relacionados ao editor de texto **Sublime**.

##### `git`
Posts relacionados à **Git**.

#####`eventos`
Reviews e posts sobre **eventos** que participei.

##### `tips`
Dicas sobre **qualquer coisa de desenvolvimento**, normalmente os posts serão curtos.


## Licença
[MIT License](http://thulioph.mit-license.org "MIT License") © Thulio Philipe
