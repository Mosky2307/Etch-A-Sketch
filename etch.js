const grid = document.querySelector('#grid');
const button = document.createElement('button');
button.classList.add('button');
grid.appendChild(button);
button.textContent = "Clear";
button.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => {box.classList.remove('blackBox')})
})
for (let i =0; i<16; i++)    
{const container = document.createElement('div');
container.classList.add('container');
grid.appendChild(container);
for (let i =0; i<16; i++)   {
    const box = document.createElement('div');
box.classList.add('box')
container.appendChild(box);}
const box = document.querySelector('.box');
document.querySelectorAll('.box').forEach(box => {box.addEventListener('mouseenter', () => {
    box.classList.add('blackBox')
    })
});
};
