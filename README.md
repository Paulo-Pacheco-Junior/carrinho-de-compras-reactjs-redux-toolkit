### React | Redux | Carrinho de Compras | JSON Server | Redux Toolkit 

Versão bastante resumida do projeto https://github.com/Paulo-Pacheco-Junior/delivery-react feito há uns 2 anos.
Deixei só o suficiente para demonstrar o meu conhecimento atual de Redux.
Refatorei o conteúdo do projeto anterior e ficou bem limpo e fácil de entender.

Devido a problemas na API, que não está funcionando hoje. 
Decidi usar o JSON Server para simular uma API rodando na minha máquina.
Então quando faço um fetch('http://localhost:3001/products') a requisição vem do JSON que criei no arquivo server.json.
E para não precisarem abrir 2 terminais ao mesmo tempo, já que tem que ter um pro Json Server também.
Para ir logo ao que interessa eu usei o concurrently no package.json para o comando 'npm run dev' rodar o 'npm run server' automaticamente através da linha "dev": "concurrently \"npm run server\" \"npm start\"". 

Obs: O concurrently, por outro lado, não possibilita acessar o 'http://localhost:3001/products' no seu navegador pois causa erro.

Obs: Algumas funcionalidades básicas como por exemplo o número de produtos, ao comprar, voltar para 1, ao sair e entrar de novo, estão deixando a desejar. Mas eu consigo fazer isso.

## :arrow_forward: Como executar

- No seu terminal digite: `git clone https://github.com/Paulo-Pacheco-Junior/carrinho-de-compras-reactjs-redux-toolkit.git`
- Entre no diretório: `cd carrinho-de-compras-reactjs-redux-toolkit`
- Rode `npm install` para baixar as dependências
- Rode o `npm run dev` para iniciar a aplicação

Por fim, a aplicação estará disponível em `http://localhost:3000`.