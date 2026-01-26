#include <stdio.h>

int main(void){

    int valor;
    int n200 = 0, n100 = 0, n50 = 0, n20 = 0, n10 = 0, n5 = 0, n2= 0;

    printf("Digite um valor: ");
    scanf("%d", &valor);

    if(valor >= 200){

        n200 = valor/200;
        valor = valor % 200;

    }

    if(valor >= 100){
        n100 = valor/100;
        valor = valor % 100;
    }

    if(valor >= 50){
        n50 = valor/50;
        valor = valor % 50;
    }

    if(valor >= 20){
        n20 = valor/20;
        valor = valor % 20;
    }

    if(valor >= 10){
        n10 = valor/10;
        valor = valor % 10;
    }

    if(valor >= 5){
        n5 = valor/5;
        valor = valor % 5;
    }

    if(valor >= 2){
        n2 = valor/2;
        valor = valor % 2;
    }

    printf("Notas de 200 : %d \n", n200);
    printf("Notas de 100 : %d \n", n100);
    printf("Notas de 50 : %d \n", n50);
    printf("Notas de 20 : %d \n", n20);
    printf("Notas de 10 : %d \n", n10);
    printf("Notas de 5 : %d \n", n5);
    printf("Notas de 2 : %d \n", n2);
    
    return 0;
}