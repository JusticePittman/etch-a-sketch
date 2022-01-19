const gridDiv = document.querySelector('.grid');

for(let i = 1; i <= (16*16); i++) {
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.style.aspectRatio = 1;
    gridDiv.appendChild(gridItem);
};