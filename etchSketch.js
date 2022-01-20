const gridSize = 16;
const gridDiv = document.querySelector('.grid');
const gridReset = document.querySelector('.reset');
const gridResize = document.querySelector('.resize');
const colorSelect = document.querySelectorAll('.color');
const erase = document.querySelector('.erase');


function randomColor() {
    const colorArr = ['--clr-red','--clr-orange','--clr-yellow','--clr-green','--clr-blue','--clr-purple'];
    let randColor = colorArr[Math.floor(Math.random()*colorArr.length)];
    return randColor;
}

colorSelect.forEach(color => color.addEventListener('click', () => {
    const gridColor = document.querySelectorAll('.grid-item');
    switch (color.textContent) {
        case 'Red':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `var(--clr-red)`;
            }));
            break;
        case 'Orange':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `var(--clr-orange)`;
            }));
            break;
        case 'Yellow':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `var(--clr-yellow)`;
            }));
            break;
        case 'Green':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `var(--clr-green)`;
            }));
            break;
        case 'Blue':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `var(--clr-blue)`;
            }));
            break;
        case 'Purple':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `var(--clr-purple)`;
            }));
            break;
        case 'Random':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `var(${randomColor()})`;
            }));
            break;
        case 'Eraser':
            gridColor.forEach(square => square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `white`;
            }));
            break;
    }

}));

function makeGrid(cells) {
    gridDiv.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    
    for(let i = 0; i < cells * cells; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        gridDiv.appendChild(gridItem);
    };
};
makeGrid(gridSize);

gridReset.addEventListener('click', () => {window.location.reload()});
gridResize.addEventListener('click', () => {
    const gridRedo = document.querySelectorAll('.grid-item');
    gridRedo.forEach(item => {item.style.backgroundColor = 'white';
    });
    newGridSize = parseInt(prompt("Choose grid size(1-100): ", "16"));
    makeGrid(newGridSize);
});