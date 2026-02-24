export class TaskList{

    taskList = [];

    post(task){

        this.taskList.push(task);

        return true;
    }

    get(indexUser){

        const indexList = indexUser - 1;

        if(indexList < 0 || indexList < this.taskList.length) return false;

        return this.taskList[indexList]
    }

    put(indexUser, atributo, atributoAtualizado){

        const indexList = indexUser - 1;

        if(indexList < 0 || indexList < this.taskList.length) return false;

        if(atributo === "nome") this.taskList[indexList].setNameTask(atributoAtualizado);

        if(atributo === "descricao") this.taskList[indexList].setDescription(atributoAtualizado);
    }

    delete(indexUser){

        const indexList = indexUser - 1;

        if(indexList < 0 || indexList < this.taskList.length) return false;

        this.taskList.splice(indexList, 1);
        return true;
    }
    
}