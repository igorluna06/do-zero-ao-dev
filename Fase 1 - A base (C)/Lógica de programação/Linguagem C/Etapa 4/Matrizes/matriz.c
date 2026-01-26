#include <stdio.h>

int main(void){

    int M[3][3]; // Declaração de uma matriz 3x3

    // Atribuindo valores aos elementos da matriz

    M[0][0] = 1;
    M[0][1] = 2;
    M[0][2] = 3;
    M[1][0] = 4;
    M[1][1] = 5;
    M[1][2] = 6;
    M[2][0] = 7;
    M[2][1] = 8;
    M[2][2] = 9;

    int M_inicializada[3][3] = {  // Inicialização direta na declaração
        {10, 20, 30},
        {40, 50, 60},
        {70, 80, 90}
    };

    int M_iterada[3][3];
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            M_iterada[i][j] = (i + 1) * (j + 1) * 10; // Atribuição usando loops
        }
    }
    

    // Acessando e imprimindo os valores dos elementos da matriz

    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            printf("Elemento na posicao [%d][%d]: %d\n", i, j, M[i][j]);
        }
    }

    return 0;
}