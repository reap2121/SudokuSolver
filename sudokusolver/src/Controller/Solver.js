export default {
    
    checkCollision (row, col, value) {
        return this.checkCollisionHorizontal(row, col, value) ||
            this.checkCollisionVertical(row, col, value) ||
            this.checkCollisionInSubgrid(row, col, value);
    },
    
    checkCollisionHorizontal (row, col, value) {
        for(let i = 0; i < 9; i++){
            if(document.getElementById(`${row}-${i}`).innerHTML == value){
                return true;
            }
        }
    
        return false;
    },
    
    checkCollisionVertical (row, col, value) {
        for(let i = 0; i < 9; i++){
            if(document.getElementById(`${i}-${col}`).innerHTML == value){
                return true;
            }
        }
    
        return false;
    },
    
    checkCollisionInSubgrid (row, col, value) {
        let r = this.determineGridIndex(row);
        let c = this.determineGridIndex(col);
    
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
    },
    
    
    determineGridIndex (grid) {
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
    },
    
    solveSudoku () {
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(document.getElementById(`${i}-${j}`).innerHTML == ""){
                    for(let k = 1; k <= 9; k++){
                        if(!this.checkCollision(i, j, k)){
                            document.getElementById(`${i}-${j}`).innerHTML = k;
                            document.getElementById(`${i}-${j}`).className += " solved-value";
                            if(this.solveSudoku()) {
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
}




