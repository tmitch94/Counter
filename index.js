let total = document.getElementById("total").textContent = 0;
total = Number(total);


document.getElementById("increase").onclick = function(){
    total+=1
    document.getElementById("total").textContent = total;
    console.log(total);
}

document.getElementById("reset").onclick = function(){
    total = 0;
    document.getElementById("total").textContent = total;
}

document.getElementById("decrease").onclick = function(){
    total-=1
    document.getElementById("total").textContent = total;

}
