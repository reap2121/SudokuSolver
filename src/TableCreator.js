var mainTable;

window.onload = () => {
    mainTable = document.getElementById("main");
    createTable();
}

var createInnerTable = () => {
    var innerTable = document.createElement("div");
    innerTable.className = "table-inner";

    mainTable.appendChild(innerTable);

    return innerTable;
}

var createGridElement = (id) => {
    var gridElement = document.createElement("div");
    gridElement.className = "grid-item";
    gridElement.contentEditable = "true";
    gridElement.id = id;

    return gridElement;
}

var createButton = () => {
    var bottomArea = document.createElement("div");
    var button = document.createElement("button");

    bottomArea.className = "bottom-area";
    button.id = "solve-button";
    button.innerHTML = "Solve";

    bottomArea.appendChild(button);
    mainTable.appendChild(bottomArea);
}

// var createTable = () => {

//     for(let i = 0; i < 9; i++)
//     {
//         var innerTable = createInnerTable();

//         for(let j = 0; j < 9; j++)
//         {
//             let gridElement = createGridElement(`${i}-${j}`);
//             innerTable.appendChild(gridElement);
//         }
//     }

//     createButton();
// }

var createTable = () => {
    let row;
    let col;

    for(let i = 0; i < 9; i++){
        let innerTable = createInnerTable();

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
                let gridElement = createGridElement(`${row}-${col}`);
                innerTable.appendChild(gridElement);
                col++;
            }
            col -= 3;
            row++;
        }
    }
}