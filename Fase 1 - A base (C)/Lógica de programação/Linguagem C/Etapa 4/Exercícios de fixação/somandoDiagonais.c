#include <stdio.h>

int main(void){

    int linhas = 4, colunas = 4;

    int somaDiagonalPrincipal = 0, somaDiagonalSecundaria = 0; // Diagonal secundária é a diagonal inversa

    int matriz[linhas][colunas];

    // Leitura da matriz
    for(int i = 0; i < linhas; i++){
        for(int j = 0; j < colunas; j++){
            printf("Digite o valor para a posiçao [%d][%d]: ", i, j);
            scanf("%d", &matriz[i][j]);
            
            // Lógica para somar a DIAGONAL PRINCIPAL
            if(i == j){
                somaDiagonalPrincipal += matriz[i][j];
            }

            // Lógica para somar a DIAGONAL SECUNDÁRIA
            if(i + j == colunas - 1){
                somaDiagonalSecundaria += matriz[i][j];
            }
        }
    }
    printf("Soma da diagonal principal: %d\n", somaDiagonalPrincipal);
    printf("Soma da diagonal secundária: %d\n", somaDiagonalSecundaria);
    return 0;
}