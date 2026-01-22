#include <stdio.h>

int main(void){

    int numero;

    scanf("%d", &numero);

    if((numero % 2) == 0){
        printf("O numero %d é par \n", numero);
    }else{
        printf("O numero %d é impar \n", numero);
    }

    return 0;
}