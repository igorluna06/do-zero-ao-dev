#include <stdio.h>

int main(void){

    int senha = 1234;
    int senha_cadastrada = 12345;
    int senha_digitadas = 1111;
    int senha_recuperacao = 111;

    if(senha_cadastrada == senha){
        printf("Logado");
    }else{
        if(senha_digitadas == senha_recuperacao){
            printf("Alterar senha");
        }else{
            printf("Senha invalida");
        }
        
    }

    return 0;
}