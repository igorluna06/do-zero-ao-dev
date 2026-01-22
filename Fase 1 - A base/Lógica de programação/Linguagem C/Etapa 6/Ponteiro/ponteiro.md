### Ponteiro

- Um ponteiro é uma variável que armazena o endereço de memória de outra variável.
- Eles são usados para manipular diretamente a memória, permitindo operações como alocação dinâmica,
  passagem eficiente de grandes estruturas para funções e criação de estruturas de dados complexas como listas
  encadeadas.

#### Declaração de Ponteiros

Para declarar um ponteiro, usamos o operador `*` antes do nome da variável. O tipo do ponteiro deve corresponder
ao tipo da variável que ele aponta.

```c
int *p;        // Ponteiro para um inteiro
float *f;      // Ponteiro para um float
char *c;       // Ponteiro para um caractere
```

#### Atribuição de Endereços

Para atribuir o endereço de uma variável a um ponteiro, usamos o operador `&`, que retorna o endereço de
memória da variável.

```c
int x = 10;
int *p = &x;  // p agora aponta para o endereço de x
```

#### Acesso ao Valor Apontado

Para acessar ou modificar o valor armazenado na variável apontada por um ponteiro, usamos o operador `*`,
conhecido como operador de desreferenciação.

```c
int x = 10;
int *p = &x;
printf("%d\n", *p); // Imprime o valor de x (10)
*p = 20;            // Modifica o valor de x para 20    
printf("%d\n", x);  // Imprime o novo valor de x (20)
```
