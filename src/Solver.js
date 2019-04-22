var setup = () => {
    document.getElementById("solve-button").addEventListener("click", solve);
}

var solve = () => {
    solveSudoku();
}

var checkCollision = (row, col, value) => {
    return checkCollisionHorizontal(row, col, value) ||
        checkCollisionVertical(row, col, value) ||
        checkCollisionInSubgrid(row, col, value);
}

var checkCollisionHorizontal = (row, col, value) => {
    for(let i = 0; i < 9; i++){
        if(document.getElementById(`${row}-${i}`).innerHTML == value){
            return true;
        }
    }

    return false;
}

var checkCollisionVertical = (row, col, value) => {
    for(let i = 0; i < 9; i++){
        if(document.getElementById(`${i}-${col}`).innerHTML == value){
            return true;
        }
    }

    return false;
}

var checkCollisionInSubgrid = (row, col, value) => {
    let r = determineGridIndex(row);
    let c = determineGridIndex(col);

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(document.getElementById(`${r}-${c}`).innerHTML == value){
                return true;
            }
            c++;
        }
        c -= 3;
        r++;
    }

    return false;
}


var determineGridIndex = (grid) => {
    if(grid < 3) 
    {
        return 0;
    } 
    else if(grid < 6) 
    {
        return 3;
    } 
    else 
    {
        return 6;
    }
}

var solveSudoku = () => {
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(document.getElementById(`${i}-${j}`).innerHTML == ""){
                for(let k = 1; k <= 9; k++){
                    if(!checkCollision(i, j, k)){
                        document.getElementById(`${i}-${j}`).innerHTML = k;
                        if(solveSudoku()) {
                            return true;
                        } else {
                            document.getElementById(`${i}-${j}`).innerHTML = "";
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}


