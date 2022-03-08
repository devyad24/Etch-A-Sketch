const container = document.createElement('div');
container.width = '960px';
const body = document.querySelector('body');
body.appendChild(container);
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16,1fr)';
container.style.marginTop = '50px';
for(let i = 0;i<256;i++){
   makeGrid(i);
   
}
function makeGrid(a){
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = '1px solid blue';
    div.textContent = `${a+1}`;
    div.classList.add('block');
    container.appendChild(div);
}
const allBlocks = document.querySelectorAll('.block');
allBlocks.forEach((block)=>{
    block.addEventListener('mouseenter',handleEvent);
    block.addEventListener('mouseleave',(e)=>{
        setTimeout(()=>{
       e.target.style.backgroundColor = '#fff';
        },400);
    })
})
function handleEvent(e){
    e.target.style.backgroundColor = '#4cc9f0';
    // e.target.style.transition = 'background-color 0.7s';
}
const resetGridbtn = document.querySelector('#reset-grid');
let userGrid = 0;
resetGridbtn.addEventListener('click',()=>{
    allBlocks.forEach(gridbox=>gridbox.remove());
    userGrid = parseInt(prompt('Enter the number of squares per side:'));
})

