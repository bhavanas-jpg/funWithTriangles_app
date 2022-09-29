const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    if(Number(sides[0].value) == 0 || Number(sides[1].value) == 0 ){
        outputEl.style.display = "none";
    }
    else{
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        const length = lengthOfHypotenuse.toFixed(2);
        outputEl.style.display = "block";
        outputEl.innerText = `The length of hypotenuse is ${length}`;
    }
   
}


hypotenuseBtn.addEventListener("click", calculateHypotenuse);