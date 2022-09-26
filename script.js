


function createGrid(number){

    let grid = document.querySelector('.container');
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (let i = 0; i < number*number; i++){
        let element = document.createElement('div');
        element.style.backgroundColor = "purple"
        grid.insertAdjacentElement("beforeend", element);
}
}

