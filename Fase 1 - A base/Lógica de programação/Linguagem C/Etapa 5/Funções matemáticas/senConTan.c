#include <stdio.h>
#include <math.h>
#define M_PI 3.14159265358979323846 // Definição de PI caso não esteja definido

int main(void){

    int numero = 30;
    double radianos = numero * (M_PI / 180.0); // Converte graus para radianos
    double seno, cosseno, tangente;

    seno = sin(radianos);
    cosseno = cos(radianos);
    tangente = tan(radianos);

    printf("Seno: %.2f\n", seno);
    printf("Cosseno: %.2f\n", cosseno);
    printf("Tangente: %.2f\n", tangente);



    return 0;
}
