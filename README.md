<h1 align="center">
    <img alt="Ignite" src=".github/ignite.jpeg" width="200px" />
</h1>

<h3 align="center">
  Desafio 6 - Interface com Chakra UI
</h3>

<p align="center">“Estudar é um privilégio e só o seu esforço pessoal te levará a conhecer pessoas e mundos que os acomodados jamais conhecerão!”</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lucas-eduardo/ignite-react-challenge06?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

## :rocket: Sobre o desafio

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS

Essa será uma aplicação onde você tem dois objetivos principais. O primeiro é desenvolver toda a interface usando como base o Chakra UI. O outro é que você deve trabalhar o responsivo da aplicação (e é aqui que sua criatividade pode brilhar ainda mais).

Você vai iniciar uma aplicação Next.js do zero na sua própria máquina e implementar a interface conforme o layout do Figma.

A seguir veremos com mais detalhes o que e como precisa ser feito 🚀

## Rodar o Projeto

`yarn install`

`yarn dev`

## Se preparando para o desafio

Para esse desafio, iremos reforçar alguns pontos e apresentar algumas libs para te ajudar no desevolvimento. 

Dessa forma, antes de ir diretamente para o código do desafio, explicaremos um pouquinho de:

- Figma;
- Chakra UI;
- Swiper.

Vamos nessa?

## Figma

Um ponto muito importante desse desafio que queremos que vocês exercitem é a implementação de uma interface a partir de um layout do Figma, como se você tivesse recebido isso das mãos de um designer.

Nesse desafio, você deve implementar o layout da página `Obrigatório`.

## Acessando o layout do app
Agora para duplicar os layouts, basta você clicar no link abaixo. Ele adicionará o Layout à sua dashboard do Figma automaticamente, como uma cópia.

[Desafio 1 Módulo 4 ReactJS](https://www.figma.com/file/8QAkMs3BddatXn2fFseyu4/Desafio-1-M%C3%B3dulo-4-ReactJS/duplicate)

## Unsplash

Como você pode já ter percebido, o layout que disponibilizamos oferece as imagens apenas para o caso da Europa. Para o restante dos continentes, você vai precisar buscar as imagens desejadas.

E é aí que entra o Unsplash. Sugerimos que você utilize essa plataforma incrível para você conseguir imagens de alta resolução de forma gratuita.

Inclusive, todas as imagens disponibilizadas no nosso layout são do Unsplash, por exemplo o banner da página Home.

[Photo by Warren Wong on Unsplash](https://unsplash.com/photos/fNUNt9w3m-Q)

## Chakra UI

Como já visto nas aulas do módulo 4, o Chakra UI é um design system poderoso e que pode aumentar consideravelmente a sua produtividade ao desenvolver interfaces.

Como a lib é muito grande e é inviável que o Diego mostre todas as opções e possibilidades durante a aula, recomendamos fortemente que vocês utilizem a documentação oficial ao seu favor para escolher os melhores componentes para sua aplicação

[Chakra UI - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.](https://chakra-ui.com/)

## Swiper

Por fim, como o Chakra UI não possui [ainda](https://github.com/chakra-ui/chakra-ui/issues/200) um componente de `slides/carousel`, deixamos como sugestão a lib **Swiper** para implementar essa funcionalidade apresentada na página **Home**.

<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d017f6f-b4de-4fab-8c9a-f453ac248d1a%2FUntitled.png?table=block&id=f23503f7-8bc2-49ce-9862-45d9aa01c041&width=2560&userId=58dbfc31-267f-4a4d-8cf6-c5903c747b1e&cache=v2" />

**React Guide**

[Swiper React Components](https://swiperjs.com/react)

**Exemplos**

[Swiper Demos](https://swiperjs.com/demos)

# Desenvolvendo o projeto

Agora que já falamos um pouquinho dessas coisas que podem te ajudar, vamos dar uma olhada na interface do Figma.

## Web, mobile e responsividade

A primeira coisa que vocês podem perceber na seção superior esquerda é que temos duas versões do projeto: **Web** e **Mobile**

Criamos essas duas versões para vocês treinarem a responsividade. Porém, percebam que criamos apenas uma versão para cada caso (1440px Web e 375px Mobile) enquanto na verdade existem uma grande variedade de padrões de telas. Portanto, caso queira, sinta-se à vontade para criar (no figma e na aplicação) mais versões desse projeto para resoluções diferentes (1920px e 768px são exemplos de padrões interessantes).

## Páginas da aplicação

Temos duas páginas para cada versão da aplicação: **Home** e **Continent**.

### Home

Nessa página você tem um Header, um Banner, uma seção mostrando os tipos de viagem e por fim um CTA (call to action) pedindo para você selecionar um dos continentes.

Como há diferentes formas de classificar e dividir o mundo em continentes, sugerimos utilizar:

- América do Norte;
- América do Sul;
- Ásia;
- África;
- Europa;
- Oceania.

### Continente

Nessa página você tem um Header, um Banner, uma seção mostrando informações do continente e por fim uma seção mostrando as cidades +100.

As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo. Você pode popular esse campo com dados fictícios, mas caso queira ser o mais realista possível sugerimos se basear nesses dois sites.

[Infographic: The 100 Most Popular City Destinations](https://www.visualcapitalist.com/the-100-most-popular-city-destinations/)

[The 50 Most Visited Cities in the World in 2019 - Big 7 Travel](https://bigseventravel.com/the-most-visited-cities-world-2019/)

## Dados da aplicação

Por fim, os dados da aplicação (continentes e países) serão criados por você durante o desenvolvimento da aplicação. Fique a vontade para montar da forma que preferir pois o foco do desafio é a interface, mas seria uma oportunidade muito legal de você reforçar seus conhecimentos de Fake API e criar do zero uma API com as informações que precisar para a sua aplicação.

## 📅 Entrega

# Desenvolvendo o projeto

Agora que já falamos um pouquinho dessas coisas que podem te ajudar, vamos dar uma olhada na interface do Figma.

## Web, mobile e responsividade

A primeira coisa que vocês podem perceber na seção superior esquerda é que temos duas versões do projeto: **Web** e **Mobile**

Criamos essas duas versões para vocês treinarem a responsividade. Porém, percebam que criamos apenas uma versão para cada caso (1440px Web e 375px Mobile) enquanto na verdade existem uma grande variedade de padrões de telas. Portanto, caso queira, sinta-se à vontade para criar (no figma e na aplicação) mais versões desse projeto para resoluções diferentes (1920px e 768px são exemplos de padrões interessantes).

## Páginas da aplicação

Temos duas páginas para cada versão da aplicação: **Home** e **Continent**.

### Home

Nessa página você tem um Header, um Banner, uma seção mostrando os tipos de viagem e por fim um CTA (call to action) pedindo para você selecionar um dos continentes.

Como há diferentes formas de classificar e dividir o mundo em continentes, sugerimos utilizar:

- América do Norte;
- América do Sul;
- Ásia;
- África;
- Europa;
- Oceania.

### Continente

Nessa página você tem um Header, um Banner, uma seção mostrando informações do continente e por fim uma seção mostrando as cidades +100.

As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo. Você pode popular esse campo com dados fictícios, mas caso queira ser o mais realista possível sugerimos se basear nesses dois sites.

[Infographic: The 100 Most Popular City Destinations](https://www.visualcapitalist.com/the-100-most-popular-city-destinations/)

[The 50 Most Visited Cities in the World in 2019 - Big 7 Travel](https://bigseventravel.com/the-most-visited-cities-world-2019/)

## Dados da aplicação

Por fim, os dados da aplicação (continentes e países) serão criados por você durante o desenvolvimento da aplicação. Fique a vontade para montar da forma que preferir pois o foco do desafio é a interface, mas seria uma oportunidade muito legal de você reforçar seus conhecimentos de Fake API e criar do zero uma API com as informações que precisar para a sua aplicação.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.