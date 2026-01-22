#include <stdio.h>
#include <string.h>

int main(void){

    char letra1[6] = "abcde";
    char letra2[6];

    strcpy(letra2, letra1); // Copia o conteúdo de letra1 para letra2

    return 0;
}