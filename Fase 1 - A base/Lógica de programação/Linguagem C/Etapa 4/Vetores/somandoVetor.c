#include <stdio.h>

int main(void){

    int numeros[5], soma = 0, media;

    for(int i = 0; i < 5; i++){
        numeros[i] = i + 1; // Atribuindo valores de 1 a 5
        soma += numeros[i]; // Somando os valores do vetor
    }

    media = soma / 5;

    printf("A soma dos elementos do vetor e: %d\n", soma);

    printf("A media dos elementos do vetor e: %d\n", media);

    return 0;
}