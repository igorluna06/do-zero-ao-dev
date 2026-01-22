#include <stdio.h>
#include <string.h>

int main(void){

    char nome[4];
    int totalCaracteres;

    scanf("%s", nome);

    totalCaracteres = strlen(nome); // Função que conta a quantidade de caracteres da string

    printf("Total de caracteres: %d\n", totalCaracteres);

    return 0;
}