var isOff = true;
const operadores = ["+", "-", "x", "÷"]
const display = document.getElementById('display');
const statusCalculadora = document.getElementById('status');

//Funções da lógica do calculo

function getNumeroAtual(){

    const partes = display.value.split(" ");
    return partes[partes.length -1];
}

function resultado(){

    if(isOff == true){

        return;
    }

    if(display.value.trim() === ""){

        return;
    }

    let operacao = display.value.split(" ");

    let operacaoConvertida = [];

    for(let op of operacao){

        if(operadores.includes(op)){

            if(op === "x"){

                operacaoConvertida.push("*");
            }else if(op === "÷"){

                operacaoConvertida.push("/");
            }else{
                operacaoConvertida.push(op);
            }
            
        }else{

            operacaoConvertida.push(Number(op));
        }

    }

    if(typeof operacaoConvertida[operacaoConvertida.length -1] === "string"){

        return;
    }else{
        while(operacaoConvertida.length > 1){

            if(operacaoConvertida.includes("*") || operacaoConvertida.includes("/")){

                for(let i = 0; i < operacaoConvertida.length; i++){

                    if(operacaoConvertida[i] === "*"){

                        let operacaoTemporaria = operacaoConvertida[i-1] * operacaoConvertida[i+1];
                        operacaoConvertida.splice(i-1,3,operacaoTemporaria);
                        
                        break;
                    }else if(operacaoConvertida[i] === "/"){

                        if(operacaoConvertida[i+1] === 0){

                            const contaAnterior = display.value;

                            display.value = "Erro";

                            setTimeout(() =>{

                                display.value = contaAnterior;
                            }, 2000);

                            return;
                        }

                        let operacaoTemporaria = operacaoConvertida[i-1] / operacaoConvertida[i+1];

                        operacaoConvertida.splice(i-1,3,operacaoTemporaria);
                        break;
                    }
                }
            }else{

                for(let i = 0; i < operacaoConvertida.length; i++){

                    if(operacaoConvertida[i] === "+"){

                        let operacaoTemporaria = operacaoConvertida[i-1] + operacaoConvertida[i+1];

                        operacaoConvertida.splice(i-1,3,operacaoTemporaria);
                        break;
                    }else if(operacaoConvertida[i] === "-"){

                        let operacaoTemporaria = operacaoConvertida[i-1] - operacaoConvertida[i+1];

                        operacaoConvertida.splice(i-1,3,operacaoTemporaria);
                        break;
                    }
                }

            }

        }

        display.value = String(operacaoConvertida[0]);
    }
    

}

//Funções dos Botões

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

    var ultimo = display.value[display.value.length - 1]

    const numeroAtual = getNumeroAtual();

    if(isOff == false){

        if(display.value === ""){
            display.value = valor;
        }else{

            if(numeroAtual === "0"){
                display.value = display.value.slice(0,-1) + valor;
            }else{
                display.value += valor;
            }
            
        }
    }
}

function adicionarOperador(operador){


    if(isOff == false){

        var ultimo = display.value[display.value.length - 2];

        if(display.value === "" || operadores.includes(ultimo)){

            return;
        }else{

            display.value += " " + operador + " ";
        }
    }
}

function adicionarPontoF(){

    const numeroAtual = getNumeroAtual();

    var ultimo = display.value[display.value.length - 2];

    if(isOff == false){

        if(display.value === "" || numeroAtual.includes(".") || operadores.includes(ultimo)){
            return;
        }else{

            display.value += ".";

        }
    }

}




