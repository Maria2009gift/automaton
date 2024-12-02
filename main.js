const list = document.querySelector("#list");
const input = document.querySelector("#taker");
const spanChange = document.querySelector("#spanChange");
const spanMoney = document.querySelector("#spanMoney");

let money = 0;
let cost = 0;
let change = 0;
let changeV = {
  val50: 0,
  val20: 0,
  val10: 0,
  val5: 0,
  val2: 0,
  val1: 0,
};

input.addEventListener("blur", takeMoney);
list.addEventListener("click", automatic);

function takeMoney() {
  money = Number.parseInt(input.value);
}

function automatic(event) {
  spanMoney.innerHTML = `${money}`;
  cost = Number.parseInt(event.target.id);
  change = money - cost;
  if (cost <= money) {
    while (change >= 50) {
      change -= 50;
      changeV.val50 = changeV.val50 + 1;
    }
    while (change >= 20) {
      change -= 20;
      changeV.val20 = changeV.val20 + 1;
    }
    while (change >= 10) {
      change -= 10;
      changeV.val10 = changeV.val10 + 1;
    }
    while (change >= 5) {
      change -= 5;
      changeV.val5 = changeV.val5 + 1;
    }
    while (change >= 2) {
      change -= 2;
      changeV.val2 = changeV.val2 + 1;
    }
    while (change >= 1) {
      change -= 1;
      changeV.val1 = changeV.val1 + 1;
    }
    spanChange.innerHTML = `по 50: ${changeV.val50}; по 20: ${changeV.val20}; по 10: ${changeV.val10}; 
        по 5: ${changeV.val5}; по 2: ${changeV.val2}; по 1: ${changeV.val1}`;

    input.value = "";
  } else {
    alert("Недостатьо грошив");
    cost = 0;
    input.value = "";
  }
}
