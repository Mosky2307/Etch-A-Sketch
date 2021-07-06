const grid = document.querySelector('#grid');
const button = document.createElement('button');
button.classList.add('button');
grid.appendChild(button);
button.textContent = "Clear";
button.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => {box.remove()})
makeGrid(prompt("Choose grid size"))
})

function makeGrid(num){
for (let i =0; i<num; i++)    
{const container = document.createElement('div');
container.classList.add('container');
grid.appendChild(container);
for (let i =0; i<num; i++)   {
    const box = document.createElement('div');
box.classList.add('box')
container.appendChild(box);}
};



const box = document.querySelector('.box');
document.querySelectorAll('.box').forEach(box => {box.addEventListener('mouseenter', () => {
    box.classList.add('blackBox')
    })
});
};

makeGrid(16);