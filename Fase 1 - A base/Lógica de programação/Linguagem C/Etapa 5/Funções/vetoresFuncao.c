#include <stdio.h>

void mudarValores(int vetor[]){
    for(int i = 0; i < 5; i++){
        vetor[i] = vetor[i] + 1;
    }
}

/* Quando trabalhamos com vetores a função ja entende que estamos passando a referência do vetor e não é necessário usar o operador & e o ponteiro */

int main(void){
    
    int vetor[5] = {1, 2, 3, 4, 5};

    mudarValores(vetor);

    for(int i = 0; i < 5; i++){
        printf("%d ", vetor[i]);
    }

    return 0;
}