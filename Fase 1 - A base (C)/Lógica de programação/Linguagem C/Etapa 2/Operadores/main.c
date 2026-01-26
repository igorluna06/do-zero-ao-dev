#include <stdio.h>

int main(void){

    int numero;
    numero = 10; // Operador: = 

    printf("numero: %d \n", numero);

    int numeroA = 0; // Atribuindo valor para utilizar +=, pois não tem como adicionar algo para uma variavel sem valor

    numeroA += 2; // Operador: += 

    printf("numero: %d \n", numeroA);

    /*Para operadores de atribuição tem essa lógica, caso seja +=, -=, *=, /=
    a variavel precisa ter um valor ja, para ele poder manipular aquele valor
    */

    int soma = numero + numeroA; // Atribuindo o valor de soma que vai ser o resultado da operação de Adição +

    printf("%d \n", soma);

    /*A lógica dos operadores aritméticos é realizar uma operação matematica e devolver um valor,
    e os operadores de decremento e incremento subtrai e soma uma unidade respectivamente a um valor.
    */

    int resto = 3 < 4; // A operação devolve um valor de 0(falso) ou 1(verdadeiro).


    printf("resto: %d \n", resto);
    
    /*Operadores relacionais são utilizados em operações de comparação devolvendo valores verdadeiros ou falsos*/

    int restoA = (9 != 9) && (8 == 8); // Extende uma operação/comparação, utilizamos quando quero manipular mais de uma condição

    printf("resto: %d \n", restoA);

    return 0;
}