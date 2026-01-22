#include <stdio.h>
#include <math.h>

int main(void){

    int numeroNegativo = -5;

    int positivo = abs(numeroNegativo); // Retorna o valor absoluto (positivo)

    printf("Número original: %d\n", numeroNegativo);
    printf("Número positivo: %d\n", positivo);

    int numeroPositivo = 10;

    int negativo = -abs(numeroPositivo); // Retorna o valor negativo

    printf("Número original: %d\n", numeroPositivo);
    printf("Número negativo: %d\n", negativo);

    

    return 0;
}