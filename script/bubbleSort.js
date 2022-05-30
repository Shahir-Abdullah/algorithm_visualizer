const btnGenerate = document.querySelector("#btnGenerateId");
const btnSort = document.querySelector("#btnSortId");
const containerDiv = document.querySelector("#containerId");

let barsArray = [];
let delay = 100;

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

async function sort(){
    const bars = document.querySelectorAll(".bar");
    for(let i = 0; i < 53; i++){
        for(let j = i+1; j < 53; j++){
            bars[i].style.background = 'blue';
            bars[j].style.background = 'blue';
            if(parseInt(bars[i].style.height) > parseInt(bars[j].style.height)){
                await waitforme(delay);
                const h1 = bars[i].style.height;
                bars[i].style.height = bars[j].style.height;
                bars[j].style.height = h1;
            }
            bars[i].style.background = 'red';
            bars[j].style.background = 'red';
            
        }
        bars[i].style.background = 'green';
    }
}

btnGenerate.addEventListener("click", () => {
    generate_bars(53);
});

btnSort.addEventListener("click", async () => {
    await sort();
});