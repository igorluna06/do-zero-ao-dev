#include <stdio.h>

int main(void){

    int numeros[5];

    /* O vetor é uma estrutura de dados que armazena elementos do mesmo tipo em posições contíguas na memória 
    
    Os indices dos vetores em C começam em 0, ou seja, o primeiro elemento do vetor está na posição 0, o segundo na posição 1, e assim por diante.
    ele é implícito que o tamanho do vetor deve ser definido no momento da sua declaração.

    Exemplo de declaração de um vetor de inteiros com 5 elementos:
    int numeros[5];

    */

    // Atribuindo valores aos elementos do vetor de diferentes formas

    numeros[0] = 10;
    numeros[1] = 20;
    numeros[2] = 30;
    numeros[3] = 40;
    numeros[4] = 50;

    int numeros_iniciais[5] = {1, 2, 3, 4, 5}; // Inicialização direta na declaração

    int numeros_iterandovo[5];
    for(int i = 0; i < 5; i++){
        numeros_iterandovo[i] = (i + 1) * 100; // Atribuição usando loop
    }


    
    // Acessando e imprimindo os valores dos elementos do vetor
    for(int i = 0; i < 5; i++){
        printf("Elemento na posicao %d: %d\n", i, numeros[i]);
    }

    

    return 0;
}