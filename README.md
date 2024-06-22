# Visão Geral
O projeto é uma aplicação web desenvolvida em Angular, que permite aos usuários realizar operações de login, visualizar uma lista de personagens e detalhes de cada personagem utilizando dados da API pública do Rick and Morty.

# Funcionalidades Principais

## Login de Usuário:
- Utiliza um serviço de login (LoginService) para autenticar usuários através de um MockService.
- Exibe mensagens de sucesso ou erro utilizando SweetAlert2 após o login.

## Lista de Personagens:
- Utiliza um serviço de personagens (CharacterService) para buscar e exibir uma lista de personagens da API do Rick and Morty.
- Implementa paginação na lista de personagens.

## Detalhes de Personagem:
- Permite aos usuários visualizar detalhes específicos de cada personagem clicando em seus respectivos itens na lista.

# Componentes:

- **LoginComponent:** Responsável pela interface de login do usuário.
- **CharacterListComponent:** Exibe a lista de personagens e implementa a funcionalidade de pesquisa.
- **CharacterDetailComponent:** Mostra os detalhes de um personagem específico selecionado pelo usuário.

## Serviços:

- **LoginService:** Gerencia a lógica de autenticação de usuários.
- **CharacterService:** Gerencia a lógica para buscar e fornecer dados dos personagens da API.

## Modelos:

- **User:** Define a estrutura dos dados do usuário.
- **Character:** Define a estrutura dos dados de um personagem.

 Clone o Repositório do Projeto:

```sh
git clone https://github.com/seu-usuario/seu-projeto.git

# Instale as dependências do projeto utilizando npm ou yarn:

```sh
npm install
yarn install

# Inicie o Servidor de Desenvolvimento:

```sh
ng serve
