const base = document.querySelector('#base');
const height = document.querySelector('#height');
const areaBtn = document.querySelector('#area-btn');
const outputText = document.querySelector('#output');


function calculateArea(){
    var b = Number(base.value);
    var h = Number(height.value);
     if(b==0 || h == 0){
        outputText.style.display = "none"
     }
     else{
        const area = 0.5 * b * h;
        outputText.style.display = "block";
        outputText.innerHTML = `The area of a triangle is ${area}`;
     }
}

areaBtn.addEventListener("click", calculateArea);