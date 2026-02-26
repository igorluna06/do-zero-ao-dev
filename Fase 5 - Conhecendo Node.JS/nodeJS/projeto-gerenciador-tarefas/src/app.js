import TaskServices from "./services/taskServices.js";
import consoleFormat from "./consoleView/consoleFormat.js";
import {question} from "./consoleView/input.js";

async function app(){

    const services = new TaskServices();

    while(true){
        console.clear();
        const chooseMenu = parseInt(await consoleFormat.chooseMainMenuFormat());
    

        if(chooseMenu === 5){
            console.log("Saindo...")
            await question("");
            break;
        }

        switch(chooseMenu){

            case 1:
                console.clear();
                const nameTask = await question("Nome da Tarefa: ");
                const description = await question("Descrição da Tarefa: ");
                const createTask = services.saveTask(nameTask, description);

                if(createTask){
                    console.log("Tarefa criada com sucesso!")
                    await question("");
                }

                break;

            case 2:
                console.clear();
                consoleFormat.listTaskFormat(services.listTask());
                const indexRemoveTask = parseInt(await question("Digita a opção da tarefa que deseja remover: "));
                const removeTask = services.removeTask(indexRemoveTask);

                if(removeTask === true){
                    console.log("Tarefa removida com sucesso!");
                    await question("");
                }

                break;

            case 3: 
                console.clear();
                consoleFormat.listTaskFormat(services.listTask());
                const indexEditTask = parseInt(await question("Digita a opção da tarefa que deseja editar: "));
                const takeTask = services.takeTask(indexEditTask);

                console.clear();
                const chooseEdit = parseInt(await consoleFormat.editOptionMenu(takeTask));

                if(chooseEdit === 5){
                    break;
                }

                let atrSelect = "";
                let atrEdit = "";

                switch(chooseEdit){

                    case 1:

                        atrEdit = await question("\nDigite o novo nome: ");
                        atrSelect = "name";
                        break;
                    case 2:
                        atrEdit = await question("\nDigite a nova descrição: ");
                        atrSelect = "description";
                        break;
                    case 3:
                        atrSelect = "complete";
                        break;
                    case 4:
                        atrSelect = "incomplete";
                        break;
                    default:
                        console.log("opção invalida!");
                        await question("");
                        break;

                }

                const editTask = services.editTask(indexEditTask, atrSelect, atrEdit);

                if(editTask === true){
                    console.log("Tarefa editada com sucesso!");
                    await question("");
                }

                break;
            
            case 4:
                console.clear();
                consoleFormat.listTaskFormat(services.listTask());
                await question("");
                break;

            default:
                console.log("opção invalida!");
                await question("");
                break;

        }
    }
}

export default app;
