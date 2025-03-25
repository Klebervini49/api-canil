# CanilAPI

## Instalação

Certifique-se de ter o Node.js instalado. Clone o repositório e execute o seguinte comando para instalar as dependências:

```shell
npm install
```

## Uso

Execute o seguinte comando para iniciar o servidor:

```shell
npm start
```

O servidor será iniciado e estará acessível em http://localhost:3000.

## Endpoints

A API possui os seguintes endpoints:

- `GET /api/tipo/`: Obtém todos os animais.
- `GET /api/tipo/{animal}`: Obtém todos os animais de um tipo específico.
- `GET /api/pesquisa/{pesquisa}`: Pesquisa os animais pelo nome.

Para acessar os endpoints protegidos, é necessário fornecer um token de autenticação Bearer no cabeçalho da solicitação HTTP. Certifique-se de incluir o cabeçalho "Authorization" com o valor "Bearer [token]".

Consulte a documentação da API para obter mais detalhes sobre os parâmetros e as respostas esperadas.

## Documentação da API

A documentação da API pode ser encontrada em `/api/docs`, onde você encontrará uma interface interativa para explorar os endpoints e suas descrições.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

