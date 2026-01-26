### String

- String é um array de caracteres(char), terminado com o caractere nulo '\0'.
- Em C, não existe um tipo de dado específico para string, por isso utilizamos arrays de caracteres.
- Podemos declarar uma string da seguinte forma:
```c
char minhaString[20]; // Declara uma string com capacidade para 19 caracteres + '\
0'
```
- Podemos inicializar uma string assim:
```c
char minhaString[] = "Olá, Mundo!"; // O compilador adiciona o '\
0' automaticamente
```
- Acessar caracteres individuais em uma string:
```c
char primeiraLetra = minhaString[0]; // 'O'
```

- Podemos usar ponteiros para manipular strings:
```c
char *ponteiroString = minhaString;
printf("%c\n", *(ponteiroString + 1)); // 'l'
```
- Funções comuns para manipulação de strings (necessário incluir a biblioteca <string.h>):
  - `strlen()`: Retorna o comprimento da string (número de caracteres antes do '\0').
  - `strcpy()`: Copia uma string para outra.
  - `strcat()`: Concatena (adiciona) uma string ao final de outra.
  - `strcmp()`: Compara duas strings.

  