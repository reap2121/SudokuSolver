var possibleSolutionsMatrix = [];

var getElementValue = (id) => {
    var value = document.getElementById(id).innerHTML;
    console.log(value);
}

var getPossibleElement = (id) => {
    return possibleSolutionsMatrix.find((element) => {
        if(element.id == id)
        {
            return true;
        }
    })
}

var removeFromPossibleSolutions = (id, value) => {
    var element = getPossibleElement(id);

    if(element != null)
    {
        element.possibleValues = element.possibleValues.replace(value, "");
        console.log(element.possibleValues);
    }
    else
    {
        console.log(`Element with id ${id} not found.`);
    }
    
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
    console.log(event.target.innerHTML);
    removeHorizontalCollidingElements(event.target.id, event.target.innerHTML);
    removeVerticalCollidingElements(event.target.id, event.target.innerHTML);
    removeInnerCollidingElements(event.target.id, event.target.innerHTML);
}

var removeHorizontalCollidingElements = (id, value) => {
    var outerIndex = determineHorizontalGridIndex(id.split("-")[0]);
    var innerIndex = determineHorizontalGridIndex(id.split("-")[1]);

    for(let i = outerIndex; i < outerIndex + 3; i++)
    {
        for(let j = innerIndex; j < innerIndex + 3; j++)
        {
            removeFromPossibleSolutions(`${i}-${j}`, value);
        }
    }
}

var removeVerticalCollidingElements = (id, value) => {
    var outerIndex = determineVerticalGridIndex(id.split("-")[0]);
    var innerIndex = determineVerticalGridIndex(id.split("-")[1]);
    var counterOuter = 0;
    var counterInner = 0;

    for(let i = parseInt(outerIndex); counterOuter < 3; counterOuter++)
    {
        for(let j = parseInt(innerIndex); counterInner < 3; counterInner++)
        {
            removeFromPossibleSolutions(`${i}-${j}`, value);
            j += 3;
        }
        counterInner = 0;
        i += 3;
    }
}

var removeInnerCollidingElements = (id, value) => {
    var outerIndex = id.split("-")[0];

    for(let i = 0; i < 9; i++) 
    {
        removeFromPossibleSolutions(`${outerIndex}-${i}`, value);
    }
}

var determineVerticalGridIndex = (grid) => {
    if(grid < 3) 
    {
        return grid;
    } 
    else if(grid < 6) 
    {
        return grid - 3;
    }
    else
    {
        return grid - 6;
    }
}

var determineHorizontalGridIndex = (grid) => {
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