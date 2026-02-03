var isOff = true;
const operadores = ["+", "-", "x", "÷"]
const display = document.getElementById('display');



function ligar(){

    if(isOff == true){
        
        display.value = "0";
        isOff = false;

    }
    
}

function desligar(){

    if(isOff == false){

        display.value = "";

        isOff = true;

    }
    
}

function limparTela(){

    if(isOff == false){
        
        display.value = "0";

    }

}

function adicionarNumero(valor){

    if(isOff == false){

        if(display.value === "0"){
            display.value = " " + valor;
        }else{
            display.value += valor;
        }
    }
}

function adicionarOperador(operador){

    if(isOff == false){

        var ultimo = display.value[display.value.length - 1];

        if(display.value === "0" || operadores.includes(ultimo)){

            return;
        }else{

            display.value += " " + operador + " ";
        }
    }
}




