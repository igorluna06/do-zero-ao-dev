export default class TaskList{

    taskList = [];


    post(task){

        this.taskList.push(task);

        return true;
    }

    get(indexUser){

        const indexList = indexUser - 1;

        if(indexList < 0){
            console.log("Index invalido! - Index Negativo!");
            return;
        }

        if(indexList > this.taskList.length - 1) {
            console.log("Index invalido! - Inexistente!");
            return;
        } 

        return this.taskList[indexList];
    }

    put(indexUser, atributo, atributoAtualizado){

        const indexList = indexUser - 1;

        if(indexList < 0){
            console.log("Index invalido! - Index Negativo!");
            return;
        }

        if(indexList > this.taskList.length - 1) {
            console.log("Index invalido! - Inexistente!");
            return;
        }

        if(atributo === "name") this.taskList[indexList].setNameTask(atributoAtualizado);

        if(atributo === "description") this.taskList[indexList].setDescription(atributoAtualizado);

        if(atributo === "complete") this.taskList[indexList].completed();

        if(atributo === "incomplete") this.taskList[indexList].notCompleted();

        return true;
    }

    delete(indexUser){

        const indexList = indexUser - 1;

        if(indexList < 0){
            console.log("Index invalido! - Index Negativo!");
            return;
        }

        if(indexList > this.taskList.length - 1) {
            console.log("Index invalido! - Inexistente!");
            return;
        }

        this.taskList.splice(indexList, 1);
        return true;
    }

    getAll(){

        return this.taskList;
    }
    
}