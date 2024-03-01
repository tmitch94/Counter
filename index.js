let total = document.getElementById("total").textContent = 0;
total = Number(total);


document.getElementById("b1").onclick = function(){
    total+=1
    document.getElementById("total").textContent = total;
    console.log(total);
}

document.getElementById("b2").onclick = function(){
    total = 0;
    document.getElementById("total").textContent = total;
}

document.getElementById("b3").onclick = function(){
    total-=1
    document.getElementById("total").textContent = total;

}