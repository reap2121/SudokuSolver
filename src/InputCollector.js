var possibleSolutionsMatrix = [];

var getElementValue = (id) => {
    var value = document.getElementById(id).innerHTML;
    console.log(value);
}

var getPossibleElement = (id) => {
    for(let i = 0; i < possibleSolutionsMatrix.length; i++)
    {
        if(possibleSolutionsMatrix[i].id == id)
        {
            return possibleSolutionsMatrix[i];
        }
    }
}

var removeFromPossibleSolutions = (id, value) => {
    var element = getPossibleElement(id);

    element.possibleValues = element.possibleValues.replace(value, "");
    console.log(element.possibleValues);
}

var addToPossibleSolutions = (id, value) => {
    var element = getPossibleElement(id);

    element.possibleValues += value;
    console.log(element.possibleValues);
}

var fillPossibleSolutionsMatrix = () => {
    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {
            var createdId = `${i}-${j}`;
            possibleSolutionsElement = {
                id: createdId,
                possibleValues: "123456789"
            };

            possibleSolutionsMatrix.push(possibleSolutionsElement);
            document.getElementById(createdId).addEventListener("input", onInputEntered);
        }
    }
}

var onInputEntered = () => {
    console.log(event.target.id);
}