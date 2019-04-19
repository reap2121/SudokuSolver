let filledCells = {};
let currentId = '0-0';

var setup = () => {
    fillPossibleSolutionsMatrix();
    document.getElementById("solve-button").addEventListener("click", solve);
}

var solve = () => {
    let tableBroke = false;

    while(!checkIfTableIsSolved()){
        //1. fill cell - if break go to error
        //2. iterate - go back to step one
        //error: iterate back, check new number - if break go to error, else go to step 1.
        tableBroke = !checkNumbers();

        if(tableBroke){

        }

    }
}

var solveStep = () => {
    if(checkNumbers()){
        iterateIdForward();
        return true;
    } else {
        iterateIdBackward();
        if(!backtrack()){
            iterateIdBackward();
        }
    }
}

var backtrack = () => {
    while(!filledCells.hasOwnProperty(currentId)){
        iterateIdBackward();
    }
    console.log('previous cell: ' + currentId);
    let valueInCell = document.getElementById(currentId).innerHTML;
    document.getElementById(currentId).innerHTML = "";
    return checkNumbersFrom(valueInCell);
}

/**
 * If a value fits, returns true, else if no value can fit in the cell, returns false.
 */
var checkNumbers = () => {
    for(let i = 1; i <= 9; i++){
        if(!fillCell(currentId, i)){
            console.log('Number found: ' + i);
            return true; 
        } 
    }

    console.log('Number not found');
    return false;
}

var checkNumbersFrom = (value) => {
    let thisValue = value + 1;

    for(let i = 0; i < 9; i++){
        if(thisValue >= 9) thisValue = 0;
        if(!fillCell(currentId, thisValue)){
            console.log('Number found (from): ' + thisValue);
            return true;
        }
        thisValue++;
    }

    console.log('Number not found (from)');
    return false;
}

/**
 * If collides, returns true, else if cell was not empty or number found, returns false.
 */
var fillCell = (id, value) => {
    if(document.getElementById(id).innerHTML == "")
    {
        if(checkCollision(id, value))
        {
            return true;
        }

        document.getElementById(id).innerHTML = value; 
        filledCells[id] = value;
        return false;
    } else {
        return false;
    }
    

}

var iterateIdBackward = () => {
    let gridIndex = currentId.split('-')[0];
    let cellIndex = currentId.split('-')[1];

    if(cellIndex > 0){
        currentId = `${gridIndex}-${parseInt(cellIndex) - 1}`;
    } else if(cellIndex == 0 && gridIndex != 0){
        currentId = `${parseInt(gridIndex) - 1}-8`;
    }else {
        console.log('HIBAVANA RENCERBEN');
    }

    console.log('Current ID backward - ' + currentId);
}

var iterateIdForward = () => {
    let gridIndex = currentId.split('-')[0];
    let cellIndex = currentId.split('-')[1];

    if(cellIndex < 8){
        currentId = `${gridIndex}-${parseInt(cellIndex) + 1}`;
    } else if(cellIndex == 8 && gridIndex != 8){
        currentId = `${parseInt(gridIndex) + 1}-0`;
    }else {
        console.log('HIBAVANA RENCERBEN');
    }

    console.log('Current ID forward - ' + currentId);
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