const buttonHolder = document.querySelector('#buttonHolder');
const grid = document.querySelector('#grid');
const button = document.createElement('button');
button.classList.add('button');
buttonHolder.appendChild(button);
button.textContent = "Clear";
button.addEventListener('click', () => {
const gridSize = prompt("Choose grid size", "16")
    if (gridSize < 101) {
        document.querySelectorAll('.box').forEach(box => {box.remove()});
        document.querySelectorAll('.container').forEach(container => {container.remove()});
        makeGrid(gridSize)
    } else {alert("That's too big!")}
;
})

function makeGrid(num){
 
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`
for (let i =0; i<(num * num); i++)   
{  
    const box = document.createElement('div');
box.classList.add('box');
grid.appendChild(box);} 
;

let colors = ['red', 'orange', 'green', 'blue', 'yellow', 'purple', 'darkslategray', 'pink']
function randomColor() {
return colors[Math.floor(Math.random() * colors.length)]
}

document.querySelectorAll('.box').forEach(box => {box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = randomColor();
    })
});
};
makeGrid(16);

