#include <stdio.h>

int somar(int num1, int num2){

    return num1 + num2;
}

int subtrair(int num1, int num2){

    return num1 - num2;
}

int multiplicar(int num1, int num2){

    return num1 * num2;
}

float dividir(float num1, float num2){

    return num1 / num2;
}

int main(void){

    int num1, num2;

    printf("Digite dois números para fazer as operações: ");
    scanf("%d %d", &num1, &num2);

    printf("\n");

    printf("A soma entre %d e %d é igual: %d \n", num1, num2, somar(num1, num2));
    printf("A subtração entre %d e %d é igual: %d\n", num1, num2, subtrair(num1, num2));
    printf("A multiplicação entre %d e %d é igual: %d\n", num1, num2, multiplicar(num1, num2));
    printf("A divisão entre %d e %d é igual: %.2f\n", num1, num2, dividir(num1, num2));

    return 0;
}