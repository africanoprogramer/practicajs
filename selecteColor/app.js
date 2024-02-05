const colors = ['#CB4335','green','blue','orange','#2471A3','#34495E','rgba(52, 73, 94, 3)'];



const btn = document.getElementById('btn');

const colorText = document.querySelector('.color');

btn.addEventListener('click', function(){
let color  = getRandomColor();
let colorselected = colors[color];

document.body.style.backgroundColor = colorselected ;

colorText.textContent = colorselected
    
})



function getRandomColor() {

    let colorselecteNumber = Math.random() * colors.length;

    return Math.floor(colorselecteNumber)
    
}