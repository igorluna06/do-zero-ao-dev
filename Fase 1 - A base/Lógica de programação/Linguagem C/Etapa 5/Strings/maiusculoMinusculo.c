#include <stdio.h>
#include <string.h>

int main(void){

    char letra = 'a';
    char maiuscula;

    maiuscula = toupper(letra);

    printf("Letra minúscula: %c\n", letra);
    printf("Letra maiúscula: %c\n", maiuscula);

    char letra2 = 'Z';
    char minuscula;

    minuscula = tolower(letra2);

    printf("Letra maiúscula: %c\n", letra2);
    printf("Letra minúscula: %c\n", minuscula);

    return 0;
}