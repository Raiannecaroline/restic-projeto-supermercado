
# Restic - Projeto Supermercado 🛒

Bem-vindo ao **Restic - Projeto Supermercado**, uma aplicação web para gerenciar listas de compras de supermercado. O projeto é construído com **Angular 16** e utiliza **Bootstrap** para estilização. Seu principal objetivo é simular uma lista de compras, reforçando conceitos como gerenciamento de estado, interação com o DOM e componentes reutilizáveis. Além disso, o projeto inclui funcionalidades para armazenar dados localmente no navegador.

## Funcionalidades ✨

- **Gerenciamento de itens na lista de compras**: Adicione, edite e remova itens.
- **Listagem separada de itens comprados**: Os itens já comprados são listados separadamente em uma seção específica.
- **Armazenamento local (LocalStorage)**: Os dados da lista de compras são armazenados no navegador para que não se percam ao atualizar a página.
- **Interface responsiva**: Utiliza **Bootstrap** para garantir uma experiência fluida em diferentes tamanhos de tela.
- **Componentes modulares**: A aplicação é dividida em múltiplos componentes, como:
  - Componente para adicionar os itens na lista.
  - Componente para listar todos os itens.
  - Componente para listar apenas os itens já comprados.
  - Componente principal que centraliza as funcionalidades.

## Estrutura do Projeto 🗂️

A aplicação segue uma arquitetura modular, dividida em:

- **Modelos (Models)**: Definição das estruturas de dados utilizadas.
- **Serviços (Services)**: Regras de negócio e manipulação de dados, incluindo integração com o armazenamento local.
- **Componentes**:
  - **HomeComponent**: Componente principal que agrupa as funcionalidades.
  - **AddListaItensComponent**: Adiciona os itens na lista de compras.
  - **ListaComprasComponent**: Exibe a lista completa de itens.
  - **ItensCompradosComponent**: Exibe somente os itens comprados.
  - **AlertaComponent**: Exibe mensagens de sucesso ou erro usando Bootstrap alerts. (não é bem um componente)

## Tecnologias Utilizadas 🛠️

- **Angular 16**: Framework principal para desenvolvimento front-end.
- **Bootstrap**: Framework de CSS para estilização e responsividade.
- **LocalStorage**: Utilizado para armazenamento local dos dados.
  
## Como Executar o Projeto 🚀

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Raiannecaroline/restic-projeto-supermercado.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse o projeto no navegador:
   ```
   http://localhost:4200
   ```

## Contribuição 🤝

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões para melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Desenvolvido 📜

Este projeto foi desenvolvido por [Raiannecaroline](https://github.com/Raiannecaroline).
