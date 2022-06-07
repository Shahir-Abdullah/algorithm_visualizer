const btnGenerate = document.querySelector("#btnGenerateId");
const containerDiv = document.querySelector("#containerId");
let bars = document.querySelectorAll(".bar");

let barsArray = [];


generate_bars(53);

function generate_bars(noBar = 60){
    clearBars();
    barsArray = [];
    for(let i = 0; i < noBar; i++){
        barsArray.push(Math.floor(Math.random() * 170 + 1));
    }
    for(let i = 0; i < noBar; i++){
        const bar = document.createElement("div");
        bar.style.height = `${barsArray[i]}px`;
        bar.style.background = 'red';
        bar.classList.add('bar-item');
        bar.classList.add('bar');
        bar.classList.add(`barNo${i}`);
        containerDiv.appendChild(bar);
    }
}

function clearBars(){
    containerDiv.innerHTML = '';
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
btnGenerate.addEventListener("click", () => {
    generate_bars(53);
});


