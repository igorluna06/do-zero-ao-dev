#include <stdio.h>
#include <math.h>

int main(void){

    int numero = 10;
    int potenciacao;

    potenciacao = pow(numero, 3);

    printf("O número %d elevado à potência 3 é %d\n", numero, potenciacao);

    return 0;
}