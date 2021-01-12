# Bike Shop

Bike shop made with node, react and graphql.

## Instalação 

Para rodar o backend, sera necesario ter o yarn instalado. Assim que levantar o servidor, os produtos serão criados estarão criados.

Principais rotas\
http://localhost:4000/products


http://localhost:4000/carts

```bash
cd server
yarn
yarn server
```

Para o frontend os passos são parecidos

```bash
cd ui
yarn
yarn start
```

Para os testes
```bash
cd ui
yarn e2e
```

## Considerações 
Para fazer a compra do produto, utilizar o numero do cartao 12345, a compra será aprovada, os demais números irão reprovar.

Existe um problema de cache no consumo do graphql, tentei ajeitar mas ainda nao consegui resolver o problema, nós realizamos uma compra, o carrinho é salvo no banco, a quantidade de produtos diminui no banco, e é possivel verificar essas alterações atraves das rotas, porém no consumo do graphql se atualizarmos a pagina ele volta com a quantidade original dos produtos, creio que existe alguma configuração para desabilitar o cache, mas como nunca havia trabalhado com essa tecnologia antes ainda não descobri o problema.

Geralmente nos meus projetos eu utilizo typescript, no frontend acabei por nao usar, pois como iria utilizar graphql tive medo de der problemas no desenvolvimento, pois nunca havia feito nada com tal antes. Mas no backend utilizei normalmente.

Para a regra de negócios/compartilhamento de estados no frontend utilizei o mobx, comecei a usar o Context API porém o projeto foi crescendo e estava ficando com as regras de negócio espalhadas. A decisão pelo mobx é apenas questão de gosto, gosto da sintaxe e é simples de utilizar.

Para os testes e2e utilizei o cypress, é simples e tem uma sintaxe fácil.