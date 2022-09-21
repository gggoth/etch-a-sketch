const grid = document.querySelector('div');

const gridElement = document.createElement('div');
gridElement.setAttribute('id', 'inGrid');
gridElement.textContent = "1"

const gridElement1 = document.createElement('div');
gridElement1.setAttribute('id', 'inGrid');
gridElement1.textContent = "2"

const gridElement2 = document.createElement('div');
gridElement2.setAttribute('id', 'inGrid');
gridElement2.textContent = "3"

grid.appendChild(gridElement);
grid.appendChild(gridElement1);
grid.appendChild(gridElement2);

