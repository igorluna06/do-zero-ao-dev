#include <stdio.h>

// Parametros por valor
void funcao(int a, float b){
    a = 10;
    b = 20.5;

    printf("Dentro da funcao: a = %d, b = %.2f\n", a, b);
}

// Paramentros por referencia (usando ponteiros)
void funcaoReferencia(int *a, float *b){
    *a = 10;
    *b = 20.5;

    printf("Dentro da funcao por referencia: a = %d, b = %.2f\n", *a, *b);
}

int main(void){

    int numero1 = 5;
    float numero2 = 10.5;
    printf("Antes da funcao: numero1 = %d, numero2 = %.2f\n", numero1, numero2);

    funcao(numero1, numero2);
    printf("Depois da funcao: numero1 = %d, numero2 = %.2f\n", numero1, numero2);

    int numero3 = 5;
    float numero4 = 10.5;
    printf("Antes da funcao por referencia: numero3 = %d, numero4 = %.2f\n", numero3, numero4);

    funcaoReferencia(&numero3, &numero4);
    printf("Depois da funcao por referencia: numero3 = %d, numero4 = %.2f\n", numero3, numero4);

    return 0;
}