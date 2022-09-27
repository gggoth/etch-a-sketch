
let color = "black";

function createGrid(number){
    
    changeColor("black")
    let grid = document.querySelector('.container');
    let elements = grid.querySelectorAll('div');
    elements.forEach((div)=> div.remove());
    

    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (let i = 0; i < number*number; i++){
        let element = document.createElement('div');
        element.addEventListener('mouseover', colorSquare)
        element.style.backgroundColor = "white"
        grid.insertAdjacentElement("beforeend", element);
        
}
}

createGrid(16);

function colorSquare(){
    this.style.backgroundColor = color
}

function changeColor(choice){
    color = choice;

}
