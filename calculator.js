const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => {
    if (y === 0)
        return ("ERROR");
    return (x / y).toFixed(2);
}
const operate = (op, x, y) => {
    switch (op) {
        case '+':
            return sum(x, y);
        case '-':
            return sub(x, y);
        case '*':
            return mul(x, y);
        case '/':
            return div(x, y);
    }
}

let getA = null;
let getB = null;
let getOp = null;
let isOperating = false;
let addEventNum = document.querySelector("#buttons-container").children;
const display = document.querySelector("#display").children;
const clear = document.getElementById("ac");
const dot = document.getElementById("dot");

addEventNum = Array.from(addEventNum);
addEventNum.forEach(btn => btn.addEventListener("click", () => {
    if (!isNaN(btn.value)) {
        if (isOperating) {
            display[0].textContent = null;
            isOperating = false;
        }
        display[0].textContent += `${btn.value}`;
    }

}));
let addEventOp = document.querySelector("#operations-container").children;
addEventOp = Array.from(addEventOp);
addEventOp.forEach(btn => btn.addEventListener("click", () => {
    isOperating = true;
    getA = parseFloat(display[0].textContent);
    getOp = btn.value;
    console.log(getA);
}));

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
    getB = parseFloat(display[0].textContent);
    let result = operate(getOp, getA, getB);
    display[0].textContent = result;
    getA = result;
});

ac.addEventListener("click", () => {
    getOp = null;
    getA = null;
    getB = null;
    display[0].textContent = null;
});

dot.addEventListener("click", () => {
    if (display[0].textContent.indexOf(".") === -1)
        display[0].textContent += '.';
});