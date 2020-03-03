# JavaScript 30

O objetivo desse projeto é estudar JavaScript por 30 dias ininterruptos aplicando conceitos a projetos simples. Um projeto por dia.

## Dia 01 - JavaScript Drum Kit

> Ao clicar em um tecla predefinida um som será executado. Ao pressionar a tecla terá uma pequena animação com uma pequena borda amarela.

- DOM e interface
- Friends with CSS
- Audio + video

### Novos aprendizados com esse projeto

- tag `<kbd>` é usada para para inputs de teclados (keyboard input)
- Atributos de `data` armazenam dados personalizados particulares na página. Os atributos data- destinam-se a adicionar dados arbitrários a um elemento para uso exclusivo do código (geralmente JavaScript do lado do cliente) em execução no site que hospeda o HTML. **Qualquer atributo que comece com `data` será tratado como uma área de armazenamento de dados particulares (privada no sentido em que o usuário final não pode vê-lo - isso não afeta o layout ou apresentação).**
- atributo `data-key`

_Preview sem a animação do clique_
![Preview sem clique](01_JS_Drum_Kit/img/preview.png)

_Preview com a animação do clique_
![Preview com clique](01_JS_Drum_Kit/img/preview-clique.png)

## Dia 02 - JS + CSS Clock

> Relógio analógico que indica a hora atual e atualiza seus ponteiros normalmente.

- Friends with CSS
- Fundamentals concepts

### Novos aprendizados com esse projeto

- `setInterval` é uma função temporizadora embutida que pode ser usada para chamar funções de retorno (callback functions) após um determinado tempo.

  - `setInterval` vai chamar a função passada indefinidamente sempre no intervalo de tempo passado.

- `new Date()` Cria uma instância JavaScript de Date que representa um único momento no tempo.
  - Note que objetos Date só podem ser instanciados chamando como um construtor (usando `new`): chamá-lo como uma função regular (ou seja, sem o operador new) irá retornar uma string ao invés de um objeto Date;
  - Existem metodos par manipular o objeto do tipo date;

_Preview relógio_
![Preview relógio](02_JS_and_CSS_Clock/img/clock.png)

## Dia 03 - Update CSS variables with JS

> Atualizar dinâmicamento o CSS ao mexer com elementos da tela.

- Friends with CSS
- Fun + experimentals

### Novos aprendizados com esse projeto

- input `type="color"` esse tipo de input abre um color pick
- Modificando uma variável no css

  ```javascript
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  ```

_Preview antes de modificar os inputs_
![Preview normal](03_JS_and_Variable_CSS/img/preview-antes.png)

_Preview quando os inputs foram modificados_
![Preview normal](03_JS_and_Variable_CSS/img/preview-modificado.png)

## Dia 04 - Array Cardio Day 01

> entendendo arrays em javascript e seus métodos

- Fundamentals concepts

### Novos aprendizados com esse projeto

- `console.table` visualização dos dados em formato de tabela no console
- métodos
  - `filter()` - cria um novo Array contendo todos os elementos para os quais a função fornecida retorna verdadeiro 
  - `map()` - cria um novo Array contendo os resultados da aplicação da função a todos elementos do Array 
  - `sort()` - classifica o Array sem copiá-lo, opcionalmente usando um argumento comparador 
  - `reduce()` - aplica uma função simultaneamente para dois valores do Array (da
esquerda para a direita) de forma a reduzi-los a um valor único 

## Dia 05 - Flex Panel Galery With JS

> Painel usando display flex com animações ao clicar em cada painel

- DOM & Interface
- Friends with CSS

### Novos aprendizados com esse projeto

- `flex: 1;` ao fazer o espaço sobrando no container é redistruibuido igualmente entre os filhos.
- Um elemento filho pode ser também um container flex;

_Preview antes de clicar em um painel_
![Preview normal](05_Flex_Panel_Galery/img/preview-noActive.jpg)

_Preview depois de clicar em um painel_
![Preview normal](05_Flex_Panel_Galery/img/preview-active.jpg)


## Dia 06 - Ajax Type Ahead

> Busca assincrona num array que contém as cidades ou estados, você buscando por cidades ou estados qualquer letra ele já retorna algo.

- DOM & Interface


### Novos aprendizados com esse projeto

- *Ajax, o que é?*
  - AJAX significa Asynchronous JavaScript and XML, ou JavaScript e XML Assíncronos. **Ele é um conjunto de técnicas de desenvolvimento voltado para a web que permite que aplicações trabalhem de modo assíncrono, processando qualquer requisição ao servidor em segundo plano**.
  - Enquanto o HTML é utilizado para exibir dados, o XML os armazena e transmite.

- *Como o Ajax funciona?*
  - **HTML/XHTML** para linguagem principal e **CSS** para a apresentação.
  - **O Document Object Model (DOM)** para exibição dinâmica dos dados e interação.
  - **XML** para a troca de dados e XSLT para a manipulação. Muitos desenvolvedores começaram a substituir pelo JSON por ser mais semelhante ao JavaScript.
  - O objeto **XMLHttpRequest** para a comunicação assíncrona.
  - Finalmente, a linguagem de programação **JavaScript** para juntar todas essas tecnologias.

- *Modelo Ajax*
  1. O navegador gera uma chamada do JavaScript que então ativa o XMLHttpRequest.
  2. Em segundo plano o navegador cria uma requisição HTTP para o servidor.
  3. O servidor recebe a requisição, busca os dados e envia para o navegador.
  4. O navegador recebe os dados requisitados que irão aparecer imediatamente na página. Não é necessário recarregar.


_Preview antes do inicio da busca_
![Preview normal](06_Ajax_Type_Ahead/img/preview.png)


_Preview depois de colocar alguma letra_
![Preview normal](06_Ajax_Type_Ahead/img/preview-search.png)


## Dia 07 - Array Cardio Day 02

> Não tem interface gráfica, apenas aplicando alguns métodos do array.prototype

- Fundamentals


### Novos aprendizados com esse projeto

- `Array.prototype`: As instâncias de Array herdam de Array.prototype. Como em todos os construtores, você pode mudar o  protótipo desse construtor para modificar todas as instâncias de Array.

Contudo, a adição de métodos não-padronizados ao objeto array pode causar problemas futuros, seja com seu próprio código, ou na adição de novas funcionalidades ao JavaScript.

O próprio Array.prototype é um Array;

**Métodos de interação:**

Vários métodos tomam como funções de argumento para serem chamados de volta ao processar o array. Quando esses métodos são chamados, o `length` do array é amostrado e qualquer elemento adicionado além deste comprimento (length)  de dentro da função (callback) não é visitado. Outras alterações para o array (Definindo o valor de ou apagando um elemento) pode afetar os resultados da operação se o método visita o elemento alterado posteriormente. Enquanto o comportamento específico destes métodos nestes casos é bem definido, não se deve confiar nisso para não confundir os outros que possoam ler seu código. Em vez disso, deve-se copiar para um novo array para modificá-lo.

  - `.some()`: Retorna true se pelo menos um elemento no array satisfizer a função de teste fornecida.
  - `.every()`: Retorna true se todos elementos no array satisfizer a função de teste fornecida.
  - `.find()`: Retorna o valor encontrado no array, se um elemento no array satisfizer a funçào de teste fornecida ou  `undefined` se não for encontrado.
  - `.findIndex()`: Retorna o índice no array, se um elemento no array satisfizer a função de teste fornecida ou -1 se não for encontrado.


## Dia 08 - Fun With HTML5 Canvas

> Construção de um canvas com o HTML5, interagindo com mouse ou dedos para desenhar

- Fun + experimentals


### Novos aprendizados com esse projeto

- tag `<canvas>` A canvas nada mais é do que um espaço onde podemos desenhar elementos específicos, formas geométricas e imagens, por exemplo, através de script (javascript geralmente).
- Por Javascript podemos acessar métodos da canvas que desenham formas, linhas, caracteres e adicionar imagens.
- Primeiro de tudo vamos precisar para colocar a tag canvas em algum lugar dentro do nosso HTML, criar uma função JavaScript que acessa a tag canvas, uma vez que a página carrega e depois utilizar o HTML5 Canvas API para desenhar suas visualizações.
- `.getContext() `retorna um contexto de desenho no canvas, ou null se o contexto identificado não é suportado.
  - "2d", levando a criação de um objeto CanvasRenderingContext2D representando uma  renderização bidimensional.

- `.innerHeight` Altura (em pixels) da janela de visualização do navegador, incluindo, se renderizado, a barra de rolagem horizontal.
- `.innerWidth` retorna a largura interna da janela em pixels. Isso inclui a largura da barra de rolagem vertical, se houver uma. SOMENTE LEITURA
- `.strokeStyle` Define o estilo para os contornos (strokes) das formas.
- `.lineJoint`  determina a forma usada para unir dois segmentos de linha onde eles se encontram.
- `.lineCap` determina a forma usada para desenhar os pontos finais das linhas.
- `.beginPath()` inicia um novo caminho esvaziando a lista de subcaminhos. Chame esse método quando desejar criar um novo caminho.
- `.moveTo()` inicia um novo subcaminho no ponto especificado pelas coordenadas (x, y) fornecidas.
- `.lineTo()` adiciona uma linha reta ao subcaminho atual conectando o último ponto do subcaminho às coordenadas especificadas (x, y). Para desenhar o caminho em uma tela, você pode usar os métodos fill () ou stroke ().
- `.stronks()`  (contornos) do caminho atual ou fornecido com o estilo de traçado atual. Os traços são alinhados ao centro de um caminho; em outras palavras, metade do traçado é desenhado no lado interno e metade no lado externo.

_Preview dos desenhos no canvas_
![Preview normal](08_Fun_With_HTML5_Canvas/img/preview.png)

## Dia 09 - Dev Tools Domination

> 14 truques que os desenvolvedores precisam saber sobre o dev tools

- Fundamentals


### Novos aprendizados com esse projeto
- regular 1
  ```javascript 
      console.log("hello");
  ```

- interpolated 2
  ```javascript 
      console.log("hello i am a %s string!", "👾");
  ```

- styled 3
```javascript 
      console.log("%c i am some great text",
      "font-size: 30px; 
      background: red; 
      text-shadow: 10px 10px 0  blue;");
  ```

- warning 4
  ```javascript 
      console.warn("OH NOO");
  ```

- error 5
  ```javascript 
      console.error("shit!");
  ```

- info 6
  ```javascript 
      console.info("crocodiles eat 3-4 people per year");
  ```

- testing 7
  ```javascript 
      const p = document.querySelector("p");
      console.assert(p.classList.contains("ouch"), "thats wrong!");
  ```

- clearing 8 - apaga tudo o que estiver no console
  ```javascript 
      console.clear();
  ```

- viewing DOM elements 9
  ```javascript 
      console.dir(p);
  ```

- grouping together 10 
  ```javascript      
      dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);

        console.groupEnd(`${dog.name}`);
      });
  ```

- counting 11
  ```javascript      
      console.count("wes");
      console.count("wes");
      console.count("Steve");
      console.count("wes");
      console.count("Jessie");
      console.count("Steve");
  ```


- timing 12
  ```javascript      
      console.time("fetching data");
      fetch("https://api.github.com/users/StefanyVasc")
      .then(data => data.json())
      .then(data => {
      console.timeEnd("fetching data");
      console.log(data);
      });
  ```


- table 13
```javascript      
      console.table(dogs);
  ```

_Preview dos comandos no console_
![Preview normal](09_Dev_Tools_Domination/img/preview.png) 



# Dia 10 - Hold Shift And Check Checkboxes

> Lista contendo checkboxes, onde ao clicar shift todos os checkboxes abaixos são selecionados e ativados

- DOM & Interface

*Preview normal* 

![Preview normal](10_Hold_Shif_And_Check_Checkboxes/img/preview.png) 

*Preview ao clicar no checkbox segurando a tecla shift*
![Preview ao clicar no checkbox segurando a tecla shift](10_Hold_Shif_And_Check_Checkboxes/img/preview_checked.png) 


## Dia 11 Custom HTML5 Video Player

> Player de video com funcionaidades como play, pause, ajuste de volume, adiantar e retroceder. Muitos desses controles 
> são sliders controls

- Audio + Video


### Novos aprendizados com esse projeto

- tag `<video>`
  - atributo `controls`


_Preview sem mexer nos controles_
![Preview normal](11_Custom_HTML5_Video_Player/img/preview.png) 

_Preview mexendo nos controles_

![Preview normal](11_Custom_HTML5_Video_Player/img/preview-controls.png) 


## Dia 12 Key Sequence Detection


> Detecção de teclas  a partir do pressionamento.Salvando as teclas pressionadas num array. Após checar se as teclas WESBOS foram apertas nessa sequência aparece `ding ding` no console e cornified é acionado

- Fundamentals


### Novos aprendizados com esse projeto

- Métodos do array
  - `push()`
  - `splice()`
  - `join()`
  - `includes()`

_Preview ao digitar WESBOS_
![Preview normal](12_Key_Sequence_Detection/img/preview.png) 


## Dia 13 Slide images in on Scroll page


> Ao usar o scroll da página acontece o scroll de algumas imagens na página. As imagens estão hospedadas no Unsplash e são escolhidas aleatoriamente.

- Dom & Interface


### Novos aprendizados com esse projeto