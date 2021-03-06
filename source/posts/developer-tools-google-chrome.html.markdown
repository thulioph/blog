---
title:  Developer Tools Google Chrome
date:   2013-08-30 09:00:00
category: tips
---

<h3 id="internal-title-post" class="internal-title-post"></h3>

Todo desenvolvedor que se preze, utiliza o inspect do seu navegador preferido, seja ele Chrome, Firefox, IE *tem certeza?* Assim como eu, você deve achar super sem graça o esquema de cores que eles disponibilizam como padrão (custom.css), depois de tanto procurar, posto aqui uma forma de personalizar o inspect, porém só no Google Chrome.

###1ª Escolha um tema da lista abaixo e copie o arquivo custom.css

- [Monokai Dark](https://github.com/s10wen/SO-Dark-Monokai-v3 "Monokai Dark")
- [MNML Theme](https://github.com/frontdevDE/mnml-devtools-theme "MNML Theme")
- [Tomorrow Theme](https://gist.github.com/1163300 "Tomorrow Theme")
- [IR_Black Theme](https://gist.github.com/1150520 "IR_Black Theme")
- [Inversion](https://github.com/mohsen1/Chrome-Dev-tools-dark-theme "Inversion")
- [Dark Theme](https://github.com/xajler/chrome-devtools-dark-theme "Dark Theme")
- [Dark Dev](https://github.com/simonsmith/DarkDev "Dark Dev")
- [WebLight Theme](https://gist.github.com/martndemus/1325072 "WebLight Theme")

*obs: você pode modificar o tema existente ou criar um a partir de outro.*

###2ª Vá até o diretório css do inspect do chrome e modifique para o do tema escolhido.

*obs: abaixo segue o local do diretório para cada plataforma*

**Windows:**

<pre class="lang-shell">
C:\Users\**SeuUsuario**\AppData\Local\Google\Chrome\User Data\Default\User StyleSheets\
</pre>

**Mac:**

<pre class="lang-shell">
~/Library/Application Support/Google/Chrome/Default/User StyleSheets/
</pre>

**Linux:**

<pre class="lang-shell">
~/.config/chrome/Default/User StyleSheets/
</pre>

Após substituir o arquivo, volte para o navegador, F12 e a mágica está feita!
