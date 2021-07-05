const grid = document.querySelector('#grid');
for (let i =0; i<16; i++)    
{const container = document.createElement('div');
container.classList.add('container');
grid.appendChild(container);
for (let i =0; i<16; i++)   {
    const box = document.createElement('div');
box.classList.add('box')
container.appendChild(box);}};

