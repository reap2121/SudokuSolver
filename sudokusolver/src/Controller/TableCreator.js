export default {
    createInnerTable (element) {
        var innerTable = document.createElement("div");
        innerTable.className = "table-inner";
    
        element.appendChild(innerTable);
    
        return innerTable;
    },
    
    createGridElement (id) {
        var gridElement = document.createElement("div");
        gridElement.className = "grid-item";
        gridElement.contentEditable = "true";
        gridElement.id = id;
    
        return gridElement;
    },
    
    createButton (element) {
        var bottomArea = document.createElement("div");
        var button = document.createElement("button");
    
        bottomArea.className = "bottom-area";
        button.id = "solve-button";
        button.innerHTML = "Solve";
    
        bottomArea.appendChild(button);
        element.appendChild(bottomArea);
    },
    
    createTable (element) {
        let row;
        let col;
    
        for(let i = 0; i < 9; i++){
            let innerTable = this.createInnerTable(element);
    
            if(i == 0 || i == 3 || i == 6){
                col = 0;
            } else if(i == 1 || i == 4 || i == 7){
                col = 3;
            } else {
                col = 6;
            }
    
            if(i <= 2){
                row = 0;
            } else if(i <= 5){
                row = 3;
            }else{
                row = 6;
            }
    
            for(let j = 0; j < 3; j++){
                for(let k = 0; k < 3; k++){
                    let gridElement = this.createGridElement(`${row}-${col}`);
                    innerTable.appendChild(gridElement);
                    col++;
                }
                col -= 3;
                row++;
            }
        }
    }
}

