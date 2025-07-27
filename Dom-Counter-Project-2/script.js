let counter = document.querySelector("#count");
let countPlusBtn = document.querySelector("#countPlus");
let countMinusBtn = document.querySelector("#countMinus");
let reset = document.querySelector("#reset");

let counterPrintNum = 0;

countPlusBtn.addEventListener("click", function () {
    counterPrintNum++;
    counter.textContent = counterPrintNum;
});

countMinusBtn.addEventListener("click", function () {
    counterPrintNum--;
    counter.textContent = counterPrintNum;
});

reset.addEventListener("click", function () {
    counterPrintNum = 0;
    counter.textContent = counterPrintNum;
});