#include <stdio.h>

int main(void){

    int perfil;

    printf("Digite o numero do seu perfil \n");
    scanf("%d", &perfil);

    if(perfil > 0 && perfil < 11){
        printf("Super User");

    }else if(perfil > 10 && perfil < 21){
        printf("Crud User");
    }else if(perfil > 15 && perfil < 31){
        printf("User");
    }else{
        printf("Perfil invalido");
    }

    return 0;
}
