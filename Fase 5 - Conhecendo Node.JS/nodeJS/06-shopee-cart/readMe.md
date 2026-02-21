## Objetivo

Criar um carrinho de compras baseado no carrinho de compras da shopee, aonde o carrinho armazene itens e faça o cálculo de sub-itens automaticamente.

//Dominio da aplicação: carrinho de compras

// As entidades do domínio são:
// Carrinho
// itens

### Estrutura do projeto

O projeto é estruturado da seguinte forma:

```
src/
├── services/
│   └── cart.js
    └── item.js
├── index.js
```

Explicação dos arquivos:

- `cart.js`: Contém a lógica para o carrinho de compras, incluindo a adição de itens, remoção de itens, calculo total, etc...
- `item.js`: Define a estrutura do item, incluindo propriedades como nome, preço, quantidade, etc.
- `index.js`: Ponto de entrada da aplicação, onde o carrinho é criado e os itens são adicionados para demonstrar o funcionamento do carrinho.

