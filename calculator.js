const sum=(x,y)=>x+y;
const sub=(x,y)=>x-y;
const mul=(x,y)=>x*y;
const div=(x,y)=>x/y;
const operate=(op,x,y)=>{
    switch(op){
        case '+':
            return sum(x,y);
        case '-':
            return sub(x,y);
        case'*':
            return mul(x,y);
        case'/':
            return div(x,y);
    }
}

let getNum=[];
let getOp;
let addEventNum=document.querySelector("#buttons-container").children;
const display=document.querySelector("#display").children;
const clear=document.getElementById("ac");

addEventNum=Array.from(addEventNum);
addEventNum.forEach(btn => btn.addEventListener("click", () => {
    if(!isNaN(btn.value)){
        display[0].textContent=btn.value;
        getNum.push(parseFloat(display[0].textContent));
    }
        
}));
let addEventOp=document.querySelector("#operations-container").children;
addEventOp=Array.from(addEventOp);
addEventOp.forEach(btn=>btn.addEventListener("click",()=>{
    if(getNum.length>=2 && getOp!=undefined){
        let result=operate(getOp,getNum[0],getNum[1]);
        getNum=[];
        display[0].textContent=result;
        getNum.push(result);
    }   
    getOp=btn.value
}));

const equals=document.getElementById("equals");
equals.addEventListener("click",()=>{
    let result=operate(getOp,getNum[0],getNum[1]);
    getNum=[];
    display[0].textContent=result;
    getNum.push(result);
})

ac.addEventListener("click",()=>{
    getOp="";
    getNum=[];
    display[0].textContent="";
})
