#include <stdio.h>
#include <math.h>

int main(void){

    float nota1 = 7.8;

    float numeroArredondado = floor(nota1); // Arredonda para baixo

    printf("Nota arredondada: %.2f\n", numeroArredondado);

    float nota2 = 7.2;

    numeroArredondado = ceil(nota2); // Arredonda para cima

    printf("Nota arredondada: %.2f\n", numeroArredondado);



    return 0;
}