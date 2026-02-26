import Task from "../models/task.js";
import TaskList from "../repository/taskList.js";

export default class TaskServices{

    taskBd = new TaskList();

    saveTask(nameTask, description){

        if(nameTask === "" || description === ""){
            console.log("Atributos invalidos! - Vazio!");
            return;
        } 

        const task = new Task(nameTask, description);

        const saveTask = this.taskBd.post(task);

        return saveTask;
    }

    takeTask(index){

        if(index === "" || typeof index === 'string'){

            console.log("Index invalido! - Vazio ou tipo errado!");
            return;
        } 

        return this.taskBd.get(index);
    }

    editTask(index, atr, atrAtualizado){



        if(index === "" || typeof index === 'string'){

            console.log("Index invalido! - Vazio ou tipo errado!");
            return;
        }

        let editTask;
        
        if(atr === "name"){

            editTask = this.taskBd.put(index, atr, atrAtualizado);

        }else if(atr === "description"){

            editTask = this.taskBd.put(index, atr, atrAtualizado);
        }else if(atr === "complete"){

            editTask = this.taskBd.put(index, atr);
            
        }else if(atr === "incomplete"){
            editTask = this.taskBd.put(index, atr);
        }else{
            console.log("Atributo invalido! - Inexistente!");
            return;
        }

        return editTask;
    }



    removeTask(index){

        if(index === "" || typeof index === 'string'){

            console.log("Index invalido! - Vazio ou tipo errado!");
            return;
        }

        const removeTask = this.taskBd.delete(index);

        return removeTask;
    }

    listTask(){

        return this.taskBd.getAll();
    }

}