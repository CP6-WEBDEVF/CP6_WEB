# VELTOR — Aluguel de Veículos de Luxo

<p align="center">
  <strong>Experiência, sofisticação e desempenho em cada quilômetro.</strong>
</p>

<p align="center">
  Uma aplicação web desenvolvida em React para apresentar uma frota de veículos premium e esportivos, proporcionando uma experiência de navegação moderna, elegante e intuitiva.
</p>

---

## Sobre o projeto

O **VELTOR** é um projeto acadêmico de desenvolvimento front-end que simula uma plataforma de aluguel de veículos de luxo. A aplicação foi desenvolvida com foco em organização de componentes, navegação entre páginas, apresentação de informações e criação de uma interface visual responsiva.

O projeto utiliza uma identidade visual sofisticada, com tons escuros e detalhes dourados, valorizando os veículos e transmitindo uma experiência alinhada ao segmento premium.

## Funcionalidades

- **Página inicial:** apresentação da marca, destaque para veículos selecionados e chamadas para explorar a frota.
- **Catálogo de veículos:** listagem de carros com imagens e informações relevantes.
- **Cards reutilizáveis:** exibição padronizada dos veículos, incluindo nome, ano, categoria, transmissão e preço diário.
- **Filtros por categoria:** possibilidade de visualizar veículos conforme suas categorias disponíveis.
- **Navegação entre páginas:** utilização de rotas para acessar as diferentes áreas da aplicação.
- **Layout responsivo:** interface adaptável a diferentes tamanhos de tela.
- **Identidade visual premium:** interface com fundo escuro, detalhes dourados e elementos visuais consistentes.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React | Construção da interface por meio de componentes reutilizáveis |
| JavaScript | Implementação da lógica e das interações |
| Tailwind CSS | Estilização e criação de layouts responsivos |
| React Router DOM | Navegação entre páginas |
| Vite | Inicialização do ambiente de desenvolvimento e build |
| Git e GitHub | Controle de versão e gerenciamento do código-fonte |

## Veículos apresentados

O catálogo foi planejado para apresentar diferentes categorias de automóveis, incluindo modelos esportivos, SUVs de luxo e veículos premium.

Entre os modelos utilizados estão:

- Porsche 911 Carrera
- Mercedes-Benz Classe G
- BMW Série 4
- Audi R8
- Range Rover Sport

Os veículos são apresentados com imagens e informações organizadas em cards, facilitando a comparação visual e a navegação pelo catálogo.

## Identidade visual

A interface utiliza uma proposta visual inspirada no mercado automotivo de luxo, priorizando:

- **Preto e tons escuros:** base visual elegante e discreta.
- **Dourado:** destaque para elementos importantes e identidade da marca.
- **Imagens dos veículos:** valorização do design e da apresentação da frota.
- **Componentes padronizados:** consistência entre as páginas e os elementos da interface.

## Estrutura do projeto

```text
CP6_WEB/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Carros.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── integrante.txt
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

**Organização dos diretórios:**

- `components/`: componentes reutilizáveis da aplicação.
- `pages/`: páginas principais do site.
- `public/images/`: arquivos de imagem disponibilizados publicamente.
- `App.jsx`: configuração das rotas da aplicação.
- `index.css`: estilos globais e configuração do Tailwind CSS.
- `main.jsx`: ponto de entrada da aplicação.
- `integrante.txt`: identificação do integrante e endereço do repositório, conforme a entrega acadêmica.

*Estrutura de referência: os arquivos e diretórios podem variar conforme a versão final do projeto.*

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado, caso deseje clonar o repositório.

### 1. Clonar o repositório

```bash
git clone https://github.com/CP6-WEBDEVF/CP6_WEB.git
```

### 2. Entrar na pasta do projeto

```bash
cd CP6_WEB
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Após iniciar o servidor, acesse o endereço local apresentado no terminal, normalmente:

```text
http://localhost:5173
```

### 5. Gerar a versão de produção

Para verificar se a aplicação pode ser compilada para produção, execute:

```bash
npm run build
```

## Controle de versão

O Git foi utilizado para acompanhar a evolução do projeto, organizar as alterações e manter o histórico de desenvolvimento.

A organização do trabalho considera:

- `main`: versão principal do projeto.
- `dev`: integração das funcionalidades desenvolvidas.
- Branches de funcionalidade: desenvolvimento separado de componentes e páginas.

Os commits devem utilizar mensagens descritivas, facilitando a identificação das alterações realizadas. Quando aplicável, as funcionalidades são integradas por meio de Pull Requests.

## Objetivos de aprendizagem

O desenvolvimento do VELTOR permite aplicar conceitos importantes de desenvolvimento front-end, como:

- Criação e composição de componentes React.
- Passagem de propriedades (*props*) entre componentes.
- Renderização de listas de dados.
- Implementação de filtros com JavaScript e estado do React.
- Navegação com React Router DOM.
- Estilização com Tailwind CSS.
- Organização de arquivos e responsabilidades.
- Versionamento de código com Git e GitHub.

## Integrante

- **Nome:** Eduardo Guzeli Nogueira
- **RM:** 571143
- **Repositório:** [CP6_WEB](https://github.com/CP6-WEBDEVF/CP6_WEB)

## Considerações finais

O VELTOR reúne conceitos de desenvolvimento web em uma aplicação voltada ao segmento de veículos de luxo. O projeto busca demonstrar a aplicação prática de React, JavaScript, Tailwind CSS e ferramentas de versionamento, com atenção à reutilização de componentes, à organização do código e à experiência de navegação.

---

## Repositório

**GitHub:** https://github.com/CP6-WEBDEVF/CP6_WEB

**Projeto:** VELTOR — Aluguel de Veículos de Luxo

**Disciplina:** Web Development — CP6
