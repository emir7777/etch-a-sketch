function createSquareGrid(sideLength) {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = ''; 

    if (sideLength < 1 || sideLength > 100) {
        console.error('Side length must be between 1 and 100.');
        return;
    }

    const containerSize = 800; 
   
    const itemSize = containerSize/ sideLength; 

    const rainbowColors = [
        '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'
    ];

    for (let i = 0; i < sideLength * sideLength; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;
        gridContainer.appendChild(div);
        div.addEventListener("mouseenter", () => {
            const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
            div.style.backgroundColor = randomColor;
        })
    }
}


createSquareGrid(64); 
document.getElementById('erase').addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'lightgray'; 
    });
});
document.getElementById('modify').addEventListener('click', () => {
    const userSize = parseInt(document.getElementById('grid-size').value);
    if(!isNaN(userSize) && userSize>=2 && userSize <= 100){
        createSquareGrid(userSize);

    }
    else{
       alert("Enter a valid value from 2 to 100") 
    }
})