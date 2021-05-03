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
let professional = 0;
let premium = 0;



function calcTotal() {
    totalValueNumber = 0;
    const productSum = Number(productsInput.value) * 0.5;
    const orderSum = Number(orderInput.value) * 0.25;
    const accountingsum = accounting.checked ? 35 : 0; // jezeli true to 10 jezeli nie to 0
    const terminalsum = terminal.checked ? 5 : 0;
    // const professional = packageSelect.innerText === "Professional" ? 25 : 0;
    // const premium = packageSelect.innerText === "Premium" ? 60 : 0;
    total = productSum + orderSum + accountingsum + terminalsum + professional + premium;
    totalValueNumber = total;
}


summaryElements.forEach(function (el){
    el.style.display = "none";
}) //chowa wszystkie li



    form.addEventListener("input", function (ev){
        if (ev.target.value !== 0) {
            if (ev.target === productsInput) {
                summaryElements[0].style.display = "block";
                summaryElements[0].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.5";
                summaryElements[0].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + ev.target.value * 0.5;
                calcTotal();
                totalValue.innerText = "$"+totalValueNumber;
            }
            if (ev.target === orderInput) {
                summaryElements[1].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.value + " * $0.25";
                summaryElements[1].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + ev.target.value * 0.25;
                summaryElements[1].style.display = "block";
                calcTotal();
                totalValue.innerText = "$"+totalValueNumber;
            }
        }
    })


    packageSelect.addEventListener("click", function (ev){
        dropDownList.style.visibility = "visible";
        selectDown.style.display = "none";
        selectUp.style.display = "block";

    })

dropDownList.addEventListener("click", function (ev){ // (".select__dropdown");
    if (ev.target === dropDownList) {

    } else {
        summaryElements[2].style.display = "block";
        if (ev.target.innerText === "Basic") {
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + 0;
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.innerText;
            premium = 0;
            professional = 0;
            calcTotal()
            totalValue.innerText = "$" + totalValueNumber;

        }
            if (ev.target.innerText === "Professional") {
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + 25;
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.innerText;
            premium = 0;
            professional = 25;
            calcTotal()
            totalValue.innerText = "$" + totalValueNumber;
        }

            if (ev.target.innerText === "Premium") {
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = "$" + 60;
            summaryElements[2].firstElementChild.firstElementChild.nextElementSibling.innerText = ev.target.innerText;
            professional = 0;
            premium = 60;
            calcTotal()
            totalValue.innerText = "$" + totalValueNumber;
        }
        dropDownList.style.visibility = "hidden";
        selectDown.style.display = "block";
        selectUp.style.display = "none";
        ev.stopPropagation();
        console.log(packageSelect.innerText === "Professional");
        console.log(professional);
    }
})





terminal.addEventListener("click", function (ev){
    const checked = this.checked;
    if (checked === true) {
        calcTotal();
        terminalValue.style.display = "block";
        summaryElements[4].firstElementChild.firstElementChild.nextElementSibling.innerText = "$"+5;
        totalValue.innerText = "$"+totalValueNumber;

    } else {
        calcTotal();
        terminalValue.style.display = "none";
        totalValue.innerText = "$"+totalValueNumber;
    }

})

accounting.addEventListener("click", function (ev){
    const checked = this.checked;
    if (checked === true) {
        calcTotal();
        accountingValue.style.display = "block";
        accountingValue.style.backgroundColor = "$color-green";
        summaryElements[3].firstElementChild.firstElementChild.nextElementSibling.innerText = "$"+35;
        totalValue.innerText = "$"+totalValueNumber;
    } else {
        calcTotal();
        accountingValue.style.display = "none";
        totalValue.innerText = "$"+totalValueNumber;
    }
})


