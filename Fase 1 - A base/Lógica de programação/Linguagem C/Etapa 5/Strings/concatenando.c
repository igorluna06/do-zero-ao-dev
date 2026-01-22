#include <stdio.h>
#include <string.h>

int main(void){

    char str1[20] = "Curso";
    char str2[10] = "de C";
    
    // Concatenando str2 ao final de str1
    strcat(str1, str2);
    
    // Exibindo a string concatenada
    printf("String concatenada: %s\n", str1);
    
    return 0;
}