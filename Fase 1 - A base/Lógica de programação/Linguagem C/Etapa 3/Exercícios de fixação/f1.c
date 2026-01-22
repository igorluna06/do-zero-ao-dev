#include <stdio.h>

int main(void){

    int qtdVoltas = 10;
    int contador = 1;

    do{
        printf("Volta %d\n", contador);
        contador++;
    } while(contador <= qtdVoltas);

    return 0;
}