let box = document.querySelectorAll(".btn");
let restart = document.querySelector(".restart");
let pO=true;
let count=0;
let winflag=0;
const wins = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8],];
box.forEach((i) => {
    i.addEventListener("click", () => {
        if(pO===true){
            i.innerText="O";
            pO=false;
        }
        else{
            i.innerText="X";
            pO=true;
        }
        i.disabled=true;
        count++;

        for(let i of wins){
            let val1 = box[i[0]].innerText;
            let val2 = box[i[1]].innerText;
            let val3 = box[i[2]].innerText;
            if(val1 != "" && val2 != "" && val3 != ""){
                if(val1===val2 && val2===val3){
                    box[i[0]].classList.add("winner");
                    box[i[1]].classList.add("winner");
                    box[i[2]].classList.add("winner");
                    for(let j of box){
                        j.disabled=true;
                    }
                    alert(`winner is ${val1}`);
                    winflag=1;
                }
            }
        }
        if(count==9 && winflag==0){
            alert(`OOPS its a DRAW`);
        }
    })
});
restart.addEventListener("click" , () => {
    for(let j of box){
        j.classList.remove("winner");
        j.classList.remove("winner");
        j.classList.remove("winner");
        j.disabled=false;
        j.innerText="";
    }
    count=0;
    winflag=0;
})