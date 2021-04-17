const form = document.querySelector(".calc__form");
const calcColumn = document.querySelector(".calc__columns");

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

const packageSelect = document.querySelector("#package"); //pole wyboru taryfy
const selectDown = document.querySelector(".select-down");  // strzałka w dół
const selectUp =  document.querySelector(".select-up");//strzałka w góre
const dropDownList = document.querySelector(".select__dropdown"); //schowana lista taryf


let totalValueNumber = 0;
let productSum = 0;
let orderSum = 0;
let basic = 0;
let professional = 25;
let premium = 60;
let accountingsum = 35;
let terminalsum = 5;




summaryElements.forEach(function (el){
    el.style.display = "none";
}) //chowa wszystkie li



    form.addEventListener("input", function (ev){
        if (ev.target.value !== 0) {
            if (ev.target === productsInput) {
                summaryElements[0].style.display = "block";
                summaryElements[0].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.5";
                summaryElements[0].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + ev.target.value * 0.5;
                productSum = ev.target.value * 0.5;
                totalValueNumber = productSum;
                totalValue.innerText = "$"+totalValueNumber;
                return productSum;
            }
            if (ev.target === orderInput) {
                summaryElements[1].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.25";
                summaryElements[1].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + ev.target.value * 0.25;
                summaryElements[1].style.display = "block";
                orderSum = ev.target.value * 0.25;
                totalValueNumber = orderSum + productSum;
                totalValue.innerText = "$"+totalValueNumber;
            }return orderSum
        }
    })


    packageSelect.addEventListener("click", function (ev){
        dropDownList.style.visibility = "visible";
        selectDown.style.display = "none";
        selectUp.style.display = "block";

    })

dropDownList.addEventListener("click", function (ev){
    summaryElements[2].style.display = "block";
    if (ev.target === dropDownList) {

    } else {
        packageSelect.firstElementChild.innerText = ev.target.innerText;
        summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.innerText;
        if (ev.target.innerText === "Basic") {
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + basic;
            totalValueNumber = orderSum + productSum + basic;
            totalValue.innerText = "$" + totalValueNumber;
        }
        if (ev.target.innerText === "Professional") {
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + professional;
            totalValueNumber = orderSum + productSum + professional;
            totalValue.innerText = "$" + totalValueNumber;
        }
        if (ev.target.innerText === "Premium") {
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + premium;
            totalValueNumber = orderSum + productSum + premium;
            totalValue.innerText = "$" + totalValueNumber;
        }
        dropDownList.style.visibility = "hidden";
        selectDown.style.display = "block";
        selectUp.style.display = "none";
        ev.stopPropagation();
    }
})


accounting.addEventListener("click", function (ev){
    const checked = this.checked;
    if (checked === true) {
        accountingValue.style.display = "block";
        accountingValue.style.backgroundColor = "$color-green";
        summaryElements[3].firstElementChild.firstElementChild.nextElementSibling.innerText = "$"+accountingsum;
        totalValueNumber = totalValueNumber + accountingsum;
        totalValue.innerText = "$"+totalValueNumber;
    } else {
        accountingValue.style.display = "none";
        totalValueNumber = totalValueNumber - accountingsum;
        totalValue.innerText = "$"+totalValueNumber;
    }
})


terminal.addEventListener("click", function (ev){
    const checked = this.checked;
    if (checked === true) {
        terminalValue.style.display = "block";
        summaryElements[4].firstElementChild.firstElementChild.nextElementSibling.innerText = "$"+terminalsum;
        totalValueNumber += terminalsum;
        totalValue.innerText = "$"+totalValueNumber;

    } else {
        terminalValue.style.display = "none";
        totalValueNumber = totalValueNumber - terminalsum;
        totalValue.innerText = "$"+totalValueNumber;
    }

})