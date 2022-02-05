function toggleGrid() {
    toggle = true;
}

function clearGrid() {
    main.textContent=''
}

function createGrid() {
    let size = 16;

    if(toggle) {
        size = +prompt('Enter number N from 1 to 100 for N x N Grid');
        console.log(size);
        if(!(size >=1 && size <= 100)) alert('Error. Click "Create New Grid" to try again.');
    }

    console.log(size);

    const height = 960/size;
    const styleHeight = height + 'px';

    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.style.height = styleHeight;
        main.append(row);        

        for(let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            main.lastElementChild.append(square);
        }
    }
}

const createBtn = document.querySelector('.create');
const main = document.querySelector('.main');
let toggle = false;

createBtn.addEventListener('click', toggleGrid);
createBtn.addEventListener('click', clearGrid);
createBtn.addEventListener('click', createGrid);

createGrid();

