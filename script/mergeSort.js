const btnMergeSort = document.querySelector("#btnMergeSortId");
bars = document.querySelectorAll(".bar");

async function mergesort(l, r){
    let mid = Math.floor(l + (r-l)/2);
    if(l<r){
        ;
        await mergesort(l, mid);
        await mergesort(mid+1, r);
        await merge(l, mid, r);
    }
}

async function merge(l, mid, r){
    var barsleft = [];
    var barsright = [];

    const llen = mid-l+1;
    const rlen = r-mid;

    for(let i = l; i <= mid; i++){
        barsleft.push(bars[i].style.height);
        bars[i].style.background = 'blue';
    }

    for(let i = mid+1; i <= r; i++){
        barsright.push(bars[i].style.height);
        bars[i].style.background = 'blue';
    }

    var li = 0;
    var ri = 0;
    var i = l;
    await waitforme(delay);
    while(li < llen && ri < rlen){
        if(parseInt(barsleft[li]) <= parseInt(barsright[ri])){
            bars[i].style.background = 'blue';
            await waitforme(delay);
            bars[i].style.height = barsleft[li];
            bars[i].style.background = 'green';
            li++;
            i++;
        }else{
            bars[i].style.background = 'blue';
            await waitforme(delay);
            bars[i].style.height = barsright[ri];
            bars[i].style.background = 'green';
            ri++;
            i++;
        }
    }

    while(li < llen){
        bars[i].style.background = 'blue';
        await waitforme(delay);
        bars[i].style.height = barsleft[li];
        bars[i].style.background = 'green';
        li++;
        i++;
    }

    while(ri < rlen){
        bars[i].style.background = 'blue';
        await waitforme(delay);
        bars[i].style.height = barsright[ri];
        bars[i].style.background = 'green';
        ri++;
        i++;
    }
    

    return;
}


btnMergeSort.addEventListener("click", async () => {
    
    var l = 0;
    var r = bars.length-1;
    bars = document.querySelectorAll(".bar");
    await mergesort(l, r);
});