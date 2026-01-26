#include <stdio.h>

int main(void){

    int linhas = 4, colunas = 5;

    int matriz[linhas][colunas];

    // Leitura da matriz
    for(int i = 0; i < linhas; i++){

        matriz[i][colunas - 1] = 0; // Inicializa a última coluna com zero
        for(int j = 0; j < colunas - 1; j++){ // Última coluna reservada para a soma

            printf("Digite o valor para a posiçao [%d][%d]: ", i, j);
            scanf("%d", &matriz[i][j]);

            matriz[i][colunas - 1] += matriz[i][j]; // Soma os valores na última coluna
        }
    }

    // Exibição da matriz com a soma na última coluna

    printf("Matriz com a soma das colunas na última coluna:\n");
    for(int i = 0; i < linhas; i++){
        for(int j = 0; j < colunas; j++){
            printf("%d\t", matriz[i][j]);
        }
        printf("\n");
    }

    return 0;
}