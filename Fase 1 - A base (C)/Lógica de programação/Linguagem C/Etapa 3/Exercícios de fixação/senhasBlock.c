#include <stdio.h>

int main(void){

    int qtdTentativas = 3, tentativas = 0;
    int senha, senhaCorreta = 1234, analiseSenha;


    do{

        printf("Digite sua senha: ");
        scanf("%d", &senha);


        printf("\n");

        if(senha != senhaCorreta){
            tentativas ++;
            printf("Senha incorreta \n");
        }else{
            analiseSenha = 1;
            printf("Senha correta \n");
            break;
        }

    }while(qtdTentativas > tentativas);

    printf("\n");

    if(analiseSenha != 1){
        printf("Cartão bloqueado! \n");
    }
    


    return 0;
}