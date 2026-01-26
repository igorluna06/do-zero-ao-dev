#include <stdio.h>

int main(void){

    int qtdPessoas, contador = 0, idade, qtdIdade = 0, media;

    printf("Quantidade de pessoas da pesquisa: ");
    scanf("%d", &qtdPessoas);

    printf("\n");

    printf("=== Idades ===\n");

    while(contador < qtdPessoas){


        printf("%d° pessoa: ", (contador + 1));

        scanf("%d", &idade);

        qtdIdade += idade;

        contador++;


    }

    printf("\n");

    media = qtdIdade/qtdPessoas;

    if(media > 0 && media < 26){
        printf("A média esta entre 0 e 25\n");
    }else if(media < 61){
        printf("A média esta entre 26 e 60\n");
    }else{
        printf("A média esta 60+\n");
    }

    return 0;
}
