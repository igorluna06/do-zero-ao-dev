export default class Task{

    nameTask = "";
    description = "";
    conclusion = false;

    constructor(nameTask, description){

        this.nameTask = nameTask;
        this.description = description;

    }

    completed(){
        this.conclusion = true;
    }

    notCompleted(){

        this.conclusion = false;
    }

    setNameTask(nameTask){

        this.nameTask = nameTask;
    }

    setDescription(description){
        this.description = description;
    }

    getNameTask(){

        return this.nameTask;
    }

    getDescripion(){

        return this.description;
    }

    getStatusConclusion(){

        return this.conclusion;
    }



}

 