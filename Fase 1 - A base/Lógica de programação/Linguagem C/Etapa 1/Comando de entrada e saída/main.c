#include <stdio.h>

int main(void){

    int numero; // Declarando uma variavel, Tipo: int, nome: numero.

    numero = 10; // Atribuindo um valor a variavel ja declarada, valor: 10

    printf("O numero digitado foi %d \n", numero); /* Imprimindo um texto mostrando
    o valor que está dentro da variavel, declarando ela na função printf() e
    atriubuido dentro do texto o seu formato de leitura %d que representa uma variavel
    tipo int, e ao final pulando pra proxima linha com \n.
     */

    float numeroF = 10.00; // Atribuindo um valor na declaração de uma variavel

    printf("O numero digitado foi %.2f \n", numeroF); /* Imprimindo um texto mostrando
    o valor que está dentro da variavel, declarando ela na função printf() e
    atriubuido dentro do texto o seu formato de leitura %f que representa uma variavel
    tipo float,porem adicionando o 2f, pois ele formata com duas casas decimais
    e ao final pulando pra proxima linha com \n.
     */

    double numeroD = 10.00;

    printf("O numero digitado foi %.2lf \n", numeroD); /* Imprimindo um texto mostrando
    o valor que está dentro da variavel, declarando ela na função printf() e
    atriubuido dentro do texto o seu formato de leitura %lf que representa uma variavel
    tipo double,porem adicionando o 2lf, pois ele formata com duas casas decimais
    e ao final pulando pra proxima linha com \n.
     */

    char letra =  'A';

    printf("O texto digitado foi %c \n", letra); /* Imprimindo um texto mostrando
    o valor que está dentro da variavel, declarando ela na função printf() e
    atriubuido dentro do texto o seu formato de leitura %lc que representa uma variavel
    tipo char e ao final pulando pra proxima linha com \n.
    */

    int segundo_numero;

    scanf("%d", &segundo_numero); /* Atribuindo o tipo de dado e a localização(RAM) da variavel: &nome_variavel,
    que a função scanf() vai armazenar o valor de entrada do usuario.
    */

    printf("%d \n", segundo_numero);

    int numeroA, numeroB;

    scanf("%d %d", &numeroA, &numeroB);

    printf("NumeroA: %d \n", numeroA);
    printf("NumeroB: %d \n", numeroB);

    return 0;

}
