const button = document.querySelector('#generate');



function calculate(){
var itemCount = document.querySelector('#itemcount').value;
var  totalValue = document.querySelector('#amount').value;
const first = document.querySelector('#first');
const name = document.querySelector('#name').value;
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const total = document.querySelector('#total');
const bill = document.querySelector('#billno');
const owner = document.querySelector('#owner');
var value = document.getElementById('discount').value;
var tip = document.getElementById('tip').value;
    let billValue = totalValue * itemCount;
    let afterDiscount = billValue - billValue / 100 * value;
    let finalAmount = afterDiscount + parseInt(tip);
    if(!tip){
        finalAmount = afterDiscount;
    }
    owner.innerHTML = name;
    bill.innerHTML = Math.floor(Math.random() * 2000) +500;
    first.innerHTML = itemCount;
    second.innerHTML = totalValue + "Rs";
    third.innerHTML = value + "%";
    fourth.innerHTML = tip + "Rs";
    total.innerHTML = finalAmount + "Rs";
    document.querySelector('.results').style.display = "block";
}
button.addEventListener('click', calculate);

