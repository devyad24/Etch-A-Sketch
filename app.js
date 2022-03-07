const container = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(container);
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16,1fr)';
container.style.marginTop = '50px';
for(let i = 0;i<256;i++){
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = '1px solid blue';
    div.textContent = `${i+1}`;
    div.classList.add('block');
    container.appendChild(div);
}
const allDivs = document.querySelectorAll('.block');
allDivs.forEach((e)=>{
    e.addEventListener('mouseover',a=>a.target.style.backgroundColor = 'aqua');
})