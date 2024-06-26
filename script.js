const gridMaker = function createGrid(rows, cols){
    const container = document.getElementById("grid");
   
    const tileWidth = `calc(${100 / cols}% - 10px)`;

    for(let row = 0;row < rows; row++){
        for(let col = 0; col < cols; col++){
            const tile = document.createElement("div");
            tile.classList.add("grid-item");
            tile.textContent = `Row ${row + 1}, Col ${col+1}`;
            tile.style.flex = `1 0 ${tileWidth}`;
            container.appendChild(tile);
        }
    }
}
gridMaker(4,4);