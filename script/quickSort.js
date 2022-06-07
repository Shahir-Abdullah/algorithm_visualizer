const btnQuickSort = document.getElementById("btnQuickSortId");
let bars = document.querySelectorAll(".bar");

async function quickSort(l, r){
    if(l<r){
        var pi = await partition(l, r);
        await quickSort(l, pi-1);
        await quickSort(pi+1, r);
    }
    return;
}

async function partition(l, r){
    
    var h = l-1;
    var p = bars[r];
    for(var i = l; i < r; i++){
        if(parseInt(bars[i].style.height) < parseInt(p.style.height)){
            h++;
            var temp = bars[i].style.height;
            var co1 = bars[i].style.background;
            var co2 = bars[h].style.background;
            bars[i].style.background = 'blue';
            bars[h].style.background = 'blue';
            
            await waitforme(delay);
            bars[i].style.height = bars[h].style.height;
            await waitforme(delay);
            
            bars[h].style.background = co2;
            bars[i].style.background = co1;
            bars[h].style.height = temp;
        }
    }
    var temp = bars[r].style.height;
    await waitforme(delay);
    bars[h+1].style.background = 'green';
    bars[r].style.height = bars[h+1].style.height;
    bars[h+1].style.height = temp;
    await waitforme(delay);
    bars[r].style.background = 'green';
    

    return h+1;
}

btnQuickSort.addEventListener("click", async () => {
    var r = bars.length-1;
    bars = document.querySelectorAll(".bar");
    await quickSort(0, r);
    //console.log(bars);
})

//quickSort(0, bars.length-1);
//console.log(bars);

