const gridSize = 16;
const gridDiv = document.querySelector('.grid');
const gridReset = document.querySelector('.reset');

gridReset.addEventListener('click', () => {window.location.reload()});

function makeGrid(cells) {
    gridDiv.style.gridTemplateColumns = `repeat(${cells}, minmax(2em, 3.25em))`;
    gridDiv.style.gridTemplateRows = `repeat(${cells}, minmax(2em, 3.25em))`;
    
    for(let i = 0; i < cells * cells; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.style.aspectRatio = 1;
        gridItem.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'blue';
        });
        gridDiv.appendChild(gridItem);
    };
};

makeGrid(gridSize);