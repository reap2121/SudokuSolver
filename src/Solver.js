let filledCells = {};

var setup = () => {
    fillPossibleSolutionsMatrix();
    document.getElementById("solve-button").addEventListener("click", solve);
}

var solve = () => {
    //solveSingleDigit();
    let solved = false;
    let tableBroke = false;

    while(!solved){


        solved = checkIfTableIsSolved();
    }
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

var fillCell = (id, value) => {
    //find the next empty cell
    if(document.getElementById(id).innerHTML == "")
    {
        if(checkCollision(id, value))
        {
            //if it breaks the table, go back
            return true;
        }

        //fill in & add to object 
        document.getElementById(id).innerHTML = value; 
        filledCells[id] = value;
    }
    
}

var checkCollision = (id, value) => {
    return checkCollisionHorizontal(id, value) ||
        checkCollisionVertical(id, value) ||
        checkCollisionInSubgrid(id, value);
}

var checkCollisionHorizontal = (id, value) => {
    let rowIndex = determineHorizontalGridIndex(id.split('-')[1]);
    let gridIndex = determineHorizontalGridIndex(id.split('-')[0]);

    for(let i = gridIndex; i < gridIndex + 3; i++){
        for(let j = rowIndex; j < rowIndex + 3; j++){
            if(document.getElementById(`${i}-${j}`).innerHTML == value){
                console.log(`COLLISION AT ${i}-${j}`);
                return true;
            }
        }
    }

    return false;
}

var checkCollisionVertical = (id, value) => {
    let rowIndex = determineVerticalGridIndex(id.split('-')[1]);
    let gridIndex = determineVerticalGridIndex(id.split('-')[0]);
    let counterRow = 0;
    let counterGrid = 0;

    for(let i = parseInt(gridIndex); counterGrid < 3; counterGrid++)
    {
        for(let j = parseInt(rowIndex); counterRow < 3; counterRow++)
        {
            if(document.getElementById(`${i}-${j}`).innerHTML == value){
                console.log(`COLLISION AT ${i}-${j}`);
                return true;
            }
            j += 3;
        }
        counterInner = 0;
        i += 3;
    }

    return false;
}

var checkCollisionInSubgrid = (id, value) => {
    let gridIndex = id.split('-')[0];

    for(let i = 0; i < 9; i++){
        if(document.getElementById(`${gridIndex}-${i}`).innerHTML == value){
            console.log(`COLLISION AT ${gridIndex}-${i}`);
            return true;
        }
    }

    return false;
}

var checkIfTableIsSolved = () => {
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(document.getElementById(`${i}-${j}`).innerHTML == ""){
                console.log(`found empty cell at ${i}-${j}`);
                return false;
            }
        }
    }

    console.log('Sudoku is solved');
    return true;
}