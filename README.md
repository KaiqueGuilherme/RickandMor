# Visão Geral
O projeto é uma aplicação web desenvolvida em Angular, que permite aos usuários realizar operações de login, visualizar uma lista de personagens e detalhes de cada personagem utilizando dados da API pública do Rick and Morty.

# Funcionalidades Principais

## Login de Usuário:

Utiliza um serviço de login (LoginService) para autenticar usuários através de uma API.
Exibe mensagens de sucesso ou erro utilizando SweetAlert2 após o login.
Lista de Personagens:

Utiliza um serviço de personagens (CharacterService) para buscar e exibir uma lista de personagens da API do Rick and Morty.
Implementa paginação na lista de personagens.
Detalhes de Personagem:

Permite aos usuários visualizar detalhes específicos de cada personagem clicando em seus respectivos itens na lista.

### Fluxo de Dados

# Componentes:

LoginComponent: Responsável pela interface de login do usuário.

CharacterListComponent: Exibe a lista de personagens e implementa a funcionalidade de pesquisa.

CharacterDetailComponent: Mostra os detalhes de um personagem específico selecionado pelo usuário.

## Serviços:

LoginService: Gerencia a lógica de autenticação de usuários.
CharacterService: Gerencia a lógica para buscar e fornecer dados dos personagens da API.

### Modelos:

### User: Define a estrutura dos dados do usuário.
### Character: Define a estrutura dos dados de um personagem.



# Clone o repositório do projeto:

git clone https://github.com/seu-usuario/seu-projeto.git
Instale as dependências do projeto utilizando npm ou yarn:


# Inicie o servidor de desenvolvimento:

ng serve
Abra o navegador e navegue para http://localhost:4200 para visualizar a aplicação em execução.

# Contribuição
Para contribuir com o projeto, siga estas diretrizes:

Crie uma nova branch a partir do branch develop.
Implemente suas alterações ou correções.
Abra um pull request descrevendo suas alterações detalhadamente.
# Contato
Para dúvidas ou mais informações, entre em contato com kaiqueguilhermepereiramiranda@gmail.com.