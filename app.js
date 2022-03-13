const containerdiv = document.querySelector('.container');
const createNewbtn = document.querySelector('#btn');
let alldivs;

const makedivs = (noOfGrids) => {
    for (let i = 0; i < noOfGrids * noOfGrids; i++) {
        const singlediv = document.createElement('div');
        singlediv.classList.add('divclass');
        containerdiv.appendChild(singlediv);

    }
    alldivs = document.querySelectorAll('.divclass');
    containerdiv.style.gridTemplateColumns = `repeat(${noOfGrids},1fr)`;
    backGrChange();
}
makedivs(16);


function backGrChange() {
    let r,g,b;
    alldivs.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            r = Math.ceil(Math.random() * 255);
            g = Math.ceil(Math.random() * 255);
            b = Math.ceil(Math.random() * 255);
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }, { once: true });
    })
}

function resetGrid() {
    alldivs.forEach((e) => {
        containerdiv.removeChild(e);
    })
}
createNewbtn.addEventListener('click', () => {
    resetGrid();
    let newGridSize = parseInt(prompt("Enter the size of new grid:"));
    CreateNewGrid(newGridSize);
})

function CreateNewGrid(userDefinedSize) {
    if (userDefinedSize < 100 && userDefinedSize>0) {
        makedivs(userDefinedSize);
    }
    else {
        userDefinedSize = parseInt(prompt("Please enter a grid value between 1 and 99:"));
        CreateNewGrid(userDefinedSize);
    }

}