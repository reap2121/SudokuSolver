var setup = () => {
    fillPossibleSolutionsMatrix();
    document.getElementById("solve-button").addEventListener("click", solve);
}

var solve = () => {
    solveSingleDigit();
}

var solveSingleDigit = () => {
    possibleSolutionsMatrix.forEach(element => {
        if(element.possibleValues.length == 1)
        {
            document.getElementById(element.id).innerHTML = element.possibleValues;
            removeCollidingElements(element.id, element.possibleValues);
            element.possibleValues == "";
        }
    });
}
