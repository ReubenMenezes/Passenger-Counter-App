let count = 0;
const countEl = document.getElementById("count");
const increment = document.getElementById("increment")
const subtract = document.getElementById("decrease")
const save = document.getElementById("save")
const enteries = document.getElementById("enteries")


increment.addEventListener("click",
 ()=>{
    count++;
    countEl.textContent = count;
 }
 );

 subtract.addEventListener("click",
    ()=>{
        count--;
        countEl.textContent = count;
    }
 )

 save.addEventListener("click",
 ()=>{
    const prevEnteries = " " + count + " , ";
    enteries.textContent+=prevEnteries;
    count = 0;
    countEl.textContent = count;
 }
 )