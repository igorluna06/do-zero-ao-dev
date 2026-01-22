#include <stdio.h>

int main(void){

    int tabuada;

    printf("Digite a tabuada de que numero você deseja: ");
    scanf("%d", &tabuada);

    printf("\n");

    printf("=== Tabuada do %d === \n", tabuada);

    for(int i = 0; i < 10; i++){

        printf("%d x %d = %d \n", tabuada, (i+1), (tabuada * (i + 1)));

    }

    return 0;
}