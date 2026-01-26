#include <stdio.h>

// Qunado tem tipagem na funçao quer dizer que ela vai retornar um valor de um tipo específico.
int somar(int num1, int num2){ // Quando a tipagem na função é definida, os valores passados como parâmetro devem ser do mesmo tipo.
    return num1 + num2;

}

int main(void){

    int numero1, numero2, resultado;

    printf("Digite dois números inteiros: ");
    scanf("%d %d", &numero1, &numero2);

    resultado = somar(numero1, numero2); // Aqui os valores passados como parâmetro são do tipo inteiro, conforme definido na função somar.

    printf("A soma de %d e %d é: %d\n", numero1, numero2, resultado);

    return 0;
}