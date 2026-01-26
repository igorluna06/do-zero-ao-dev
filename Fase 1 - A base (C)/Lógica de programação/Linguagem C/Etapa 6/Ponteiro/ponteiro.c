#include <stdio.h>

int main(void){

    int numero = 100; // Declaração de uma variável inteira
    int *ponteiro; // Declaração de um ponteiro para inteiro

    ponteiro = &numero; // Atribuição do endereço de 'numero' ao ponteiro

    // Exibindo o valor da variável usando o ponteiro
    printf("Valor de numero usando ponteiro: %d\n", *ponteiro);

    *ponteiro = 200; // Modificando o valor de 'numero' através do ponteiro

    // Exibindo o novo valor da variável
    printf("Novo valor de numero: %d\n", numero);
    

    return 0;

}