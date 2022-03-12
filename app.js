const containerdiv = document.querySelector('.container');
const createNewbtn = document.querySelector('#btn');

const makedivs = (noOfGrids)=>{
    for(let i=0;i<noOfGrids*noOfGrids;i++){
        const singlediv = document.createElement('div');
        singlediv.classList.add('divclass');
        containerdiv.appendChild(singlediv);
        
    }
    containerdiv.style.gridTemplateColumns = `repeat(${noOfGrids},1fr)`;
}
makedivs(16);

const alldivs = document.querySelectorAll('.divclass');

function OnHoverEffect(){
    alldivs.forEach((div)=>{
        div.addEventListener('mouseenter',(e)=>{
            e.target.classList.add('onDivhover');
        })
        div.addEventListener('mouseleave',(e)=>{
           setTimeout(() => {
            e.target.classList.remove('onDivhover');
           }, 100);
        })
    })
}

createNewbtn.addEventListener('click',()=>{
    alldivs.forEach(div=>containerdiv.removeChild(div));
    let newGridSize = parseInt(prompt("Enter the size of new grid:"));
    CreateNewGrid(newGridSize);
})

function CreateNewGrid(userDefinedSize){
   makedivs(userDefinedSize);
   OnHoverEffect();
}