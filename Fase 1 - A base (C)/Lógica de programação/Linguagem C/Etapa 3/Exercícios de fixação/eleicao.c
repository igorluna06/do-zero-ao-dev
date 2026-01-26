#include <stdio.h>

int main(void){

    int cand1 = 0, cand2 = 0, cand3 = 0, eleitores, contador = 0, voto;

    printf("Quantidade de eleitores: ");
    scanf("%d", &eleitores);

    while(contador < eleitores){

        printf("==== Faça seu voto ====\n");
        printf("canditado 1 - Vote 1\n");
        printf("canditado 2 - Vote 2\n");
        printf("canditado 3 - Vote 3\n");

        printf("Voto: ");
        scanf("%d", &voto);

        switch(voto){

            case 1:
                cand1 ++;
                break;
            case 2:
                cand2 ++;
                break;
            case 3:
                cand3 ++;
                break;
            default:
                printf("\nVoto invalido!\n");
                break;
        }

        contador ++;
    }

    if(cand1 > cand2 && cand1 > cand3){
        printf("Candidato 1 foi o ganhador\n");
    }
    else if(cand2 > cand1 && cand2 > cand3){
        printf("Candidato 2 foi o ganhador\n");
    }
    else if(cand3 > cand1 && cand3 > cand2){
        printf("Candidato 3 foi o ganhador\n");
    }
    else if(cand1 == cand2 && cand1 == cand3){
        printf("Empate entre todos os candidatos\n");
    }
    else if(cand1 == cand2){
        printf("Empate entre condidato 1 e candidato 2\n");
    }
    else if(cand1 == cand3){
        printf("Empate entre candidato 1 e candidato 3");
    }
    else{
        printf("Empate entre candidato 2 e candidato 3\n");
    }
    

    return 0;
}