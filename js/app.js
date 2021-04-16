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



summaryElements.forEach(function (el){
    el.style.display = "none";
}) //chowa wszystkie li











    accounting.addEventListener("click", function (ev){
        const checked = this.checked;
        if (checked === true) {
            accountingValue.style.display = "block";
            accountingValue.style.backgroundColor = "$color-green";
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
                summaryElements[0].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.5";
                summaryElements[0].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + ev.target.value * 0.5;
            }
            if (ev.target === orderInput) {
                summaryElements[1].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.25";
                summaryElements[1].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + ev.target.value * 0.25;
                summaryElements[1].style.display = "block";
            }
        }
    })


    packageSelect.addEventListener("click", function (ev){
        console.log(this.innerText);
        dropDownList.style.visibility = "visible";
        selectDown.style.display = "none";
        selectUp.style.display = "block";

    })

dropDownList.addEventListener("click", function (ev){
    summaryElements[2].style.display = "block";
    packageSelect.firstElementChild.innerText = ev.target.innerText;
    summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.innerText;
    dropDownList.style.visibility = "hidden";
    selectDown.style.display = "block";
    selectUp.style.display = "none";
    ev.stopPropagation();
    //trzeba jeszcze zablokować dodawanie ul
})

console.log(summaryElements);