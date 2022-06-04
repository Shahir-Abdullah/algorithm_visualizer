const btnInsertionSort = document.querySelector("#btnInsertionSortId");

async function insertion(){
    const bars = document.querySelectorAll(".bar");
    for(let i = 1; i < 53; i++){
        let keyh = bars[i].style.height;
        let j = i-1;
        while(j >= 0 && parseInt(bars[j].style.height) > parseInt(keyh)){
            
            bars[j].style.background = 'blue';
            await waitforme(delay);
            bars[j+1].style.height = bars[j].style.height;
            bars[j+1].style.background = 'green';
            bars[j].style.height = keyh;
            j = j - 1; 
        }
        
        bars[j+1].style.height = keyh;
        bars[j+1].style.background = 'green';  
    }
}

btnInsertionSort.addEventListener("click", async () => {
    //console.log("calling Insertion");
    await insertion();
});
