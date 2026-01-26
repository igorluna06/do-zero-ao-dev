#include <stdio.h>

int main(void){

    int op;
    
    printf("1 - Deposito \n");
    printf("2 - Saque \n");
    printf("3 - Extrato \n");
    printf("4 - Transferencia \n");
    printf("0 - Sair \n");

    printf("\n Digite a opção desejada: ");
    scanf("%d", &op);

    printf("\n");

    switch(op)
    {
        case 0:
            printf("Saindo \n");
            break;
        
        case 1:
            printf("Vamos depositar! \n");
            break;
        
        case 2:
            printf("Vamos Sacar! \n");
            break;
        
        case 3:
            printf("Vamos Extratar! \n");
            break;

        case 4:
            printf("Vamos Transferir! \n");
            break;

        default:
            printf("Opção invalida! \n");
            break;
    }


    return 0;
}