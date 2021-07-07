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
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
for (let i =0; i<(num * num); i++)   
{  
    const box = document.createElement('div');
box.classList.add('box');
box.style.width = `calc(700px / ${num})`;
box.style.height = `calc(700px / ${num})`
grid.appendChild(box);} 
;



document.querySelectorAll('.box').forEach(box => {box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = 'black'
    })
});
};
makeGrid(16);

