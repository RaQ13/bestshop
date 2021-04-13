const form = document.querySelector(".calc__form");

const accounting = document.querySelector("#accounting"); //check 1
const terminal = document.querySelector("#terminal"); //check 2

const summary = document.querySelector("#summary-list");
const summaryElements = Array.from(summary.children); //wszystkie li
const summaryInputValue = summaryElements.slice(0, 2); // dla input

const productsInput = document.querySelector("#products");
const orderInput = document.querySelector("#orders");


const accountingValue = summaryElements[3]; //accounting li
const terminalValue = summaryElements[4]; //terminal li

const totalValue = document.querySelector("#total-price")
    .firstElementChild.nextElementSibling; //wartość



summaryElements.forEach(function (el){
    el.style.display = "none";
}) //chowa wszystkie li



accounting.addEventListener("click", function (ev){
        const checked = this.checked;
            if (checked === true) {
                accountingValue.style.display = "block";
            } else {
                accountingValue.style.display = "none";
            }

})

terminal.addEventListener("click", function (ev){
    const checked = this.checked;
    if (checked === true) {
        terminalValue.style.display = "block";
    } else {
        terminalValue.style.display = "none";
    }

})

form.addEventListener("input", function (ev){
    if (ev.target.value !== 0) {
        if (ev.target === productsInput) {
            summaryElements[0].style.display = "block";
            summaryElements[0].firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.5";
        }
        if (ev.target === orderInput) {
            summaryElements[1].firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.25";
            summaryElements[1].style.display = "block";

        }
    }
})

