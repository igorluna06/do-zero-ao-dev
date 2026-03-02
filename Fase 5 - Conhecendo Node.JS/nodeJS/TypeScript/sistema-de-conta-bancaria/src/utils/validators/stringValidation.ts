export function containsOnlyNumbers(text: string){

        const justNumbers = /^\d+$/;

        return justNumbers.test(text);
};

export function containsOnlyLettersAndSpaces(text: string){

        const justLetterAndSpace = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/;

        return justLetterAndSpace.test(text);
};

