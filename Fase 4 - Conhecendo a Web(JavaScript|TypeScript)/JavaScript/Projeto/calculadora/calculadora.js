var isOff = true;
const operadores = ["+", "-", "x", "÷"]
const display = document.getElementById('display');
const statusCalculadora = document.getElementById('status');



function ligar(){

    if(isOff == true){
        
        statusCalculadora.style.backgroundColor = "green";
        display.value = "";
        isOff = false;

    }
    
}

function desligar(){

    if(isOff == false){

        statusCalculadora.style.backgroundColor = "white";
        display.value = "";

        isOff = true;

    }
    
}

function limparTela(){

    if(isOff == false){
        
        display.value = "";

    }

}

function apagarUltimo(){

    if(isOff == false){

        if(display.value.length == 2){

            display.value = "";

        }else if(display.value[display.value.length - 1] === " "){
            display.value = display.value.slice(0,-3)
        }else{
            display.value = display.value.slice(0,-1);
        }
    }
    
}

function adicionarNumero(valor){

    if(isOff == false){

        if(display.value === ""){
            display.value = " " + valor;
        }else{
            display.value += valor;
        }
    }
}

function adicionarOperador(operador){

    if(isOff == false){

        var ultimo = display.value[display.value.length - 1];

        if(display.value === "" || operadores.includes(ultimo)){

            return;
        }else{

            display.value += " " + operador + " ";
        }
    }
}




