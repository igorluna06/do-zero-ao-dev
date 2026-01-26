#include <stdio.h>

int main(void){

    int numero = 10;

    printf("%s \n", numero %2 == 0 ? "Par" : "Impar");

    return 0;
}