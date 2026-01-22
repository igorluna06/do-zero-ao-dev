#include <stdio.h>
#include <string.h>

int main(void){

    char letra1[5] = "ABCD";
    char letra2[5] = "ABCD";

    int validacao = strcmp(letra1, letra2); // Compara as duas strings

    printf("Valor retornado pela funcao strcmp: %d\n", validacao);

    if (strcmp(letra1, letra2) == 0){
        printf("As strings sao iguais.\n");
    } else {
        printf("As strings sao diferentes.\n");
    }

    return 0;
}