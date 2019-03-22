var possibleSolutionsMatrix = [];

var getElementValue = (id) => {
    var value = document.getElementById(id).innerHTML;
    console.log(value);
}

var getElementPossibleValues = (id) => {
    var element;

    possibleSolutionsMatrix.forEach(matrixElement => {
        if(matrixElement.id == id)
        {
            element = matrixElement;
        }
    });
    console.log("id: " + element.id)
    console.log("values: " + element.possibleValues);
}

var fillPossibleSolutionsMatrix = () => {
    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {
            possibleSolutionsElement = {
                id: `${i}-${j}`,
                possibleValues: "123456789"
            };

            possibleSolutionsMatrix.push(possibleSolutionsElement);
        }
    }
}