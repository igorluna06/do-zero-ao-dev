#include <stdio.h>

// Atribuição de valores a uma string 

int main(void){

    char minhaString[4] = {'I', 'g', 'o', 'r'};

    char nome[4];

    scanf("%s", &nome); // %s -> string

    printf("Minha string: %s\n", minhaString);
    printf("Nome: %s\n", nome);

    return 0;
}