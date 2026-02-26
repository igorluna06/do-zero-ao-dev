import {question} from "./input.js";

function listTaskFormat(list){

    if(list === null){
        console.log("Lista vazia!");
        return;
    }

    let index = 0;

    list.forEach(task => {

        let statusTask = "";
        
        index++;
        console.log(index + ". " + task.getNameTask());
        console.log("Descrição: " + task.getDescripion());

        if(task.getStatusConclusion() === true){
            statusTask = "Completo";
        }else{
            statusTask = "Incompleto";
        }
        
        console.log("Status: " + statusTask + "\n");
    });

}

async function chooseMainMenuFormat(){

    console.log("==== MENU ====\n");
    console.log("1. Criar Tarefa\n");
    console.log("2. Remover Tarefa\n");
    console.log("3. Editar Tarefa\n");
    console.log("4. Listar tarefa\n");
    console.log("5. Sair\n");
    
    const numberChoose = await question("Digite a opção que deseja: ");

    return numberChoose;

}

async function editOptionMenu(task){

    let statusTask = "";

    console.log("==== Tarefa Sendo Editada ====\n")
    console.log("Nome: " + task.getNameTask());
    console.log("Descrição: " + task.getDescripion());

    if(task.getStatusConclusion() === true){
            statusTask = "Completo";
    }else{
            statusTask = "Incompleto";
    }

    console.log("Status: " + statusTask + "\n");


    console.log("==== Menu de Edição ====\n");
    console.log("1. Nome da tarefa\n");
    console.log("2. Descrição da tarefa\n");
    console.log("3. Marcar como concluído\n");
    console.log("4. Desmarcar com concluído\n");
    console.log("5. Sair");

    const numberChoose =  await question("Digite a opção que deseja: ");

    return numberChoose;
}

export default {

    listTaskFormat,
    chooseMainMenuFormat,
    editOptionMenu

};