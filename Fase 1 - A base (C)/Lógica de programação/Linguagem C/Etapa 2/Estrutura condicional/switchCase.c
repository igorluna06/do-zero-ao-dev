#include <stdio.h>

int main(void){

    int numero;

    printf("Digite um numero de 1 a 4: ");
    scanf("%d", &numero);

    printf("\n");

    switch(numero){

        case 1:
            printf("Você escolheu 1");
            break;

        case 2:
            printf("Você escolheu 2");
            break;

        case 3:
            printf("Você escolheu 3");
            break;

        case 4:
            printf("Você escolheu 4");
            break;

        default:
            printf("Você escolheu ou digitou algo que não seja de 1 a 4");
            break;
    }

    return 0;
}
