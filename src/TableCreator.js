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

var createTable = () => {
    
    for(let i = 1; i <= 9; i++)
    {
        var innerTable = createInnerTable();

        for(let j = 1; j <= 9; j++)
        {
            innerTable.appendChild(createGridElement(`${i}-${j}`));
        }
    }

    createButton();
}