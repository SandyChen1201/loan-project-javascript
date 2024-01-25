const amountEL = document.querySelector("#amount");
const yearEL = document.querySelector("#year");
const rateEL = document.querySelector("#rate");
const feeEL = document.querySelector("#fee");
const paymentEL1 = document.querySelector("#payment1");
const paymentEL2 = document.querySelector("#payment2");
console.log(amountEL, yearEL, rateEL, feeEL, paymentEL1, paymentEL2);

const caculateEL = document.querySelector("#caculate");
caculateEL.addEventListener("click", ByPrincipal);



function ByPrincipal() {
    let amount = amountEL.value * 10000;
    let year = yearEL.value;
    let rate = rateEL.value / 100;
    /*let fee = 0
    if (feeEL.checked) {
        fee = 5000
    }*/
    let fee = feeEL.checked ? 5000 : 0;
    let rule = paymentEL1.checked ? 1 : 2;
    console.log(amount, year, rate, fee, rule);
    //基本公式
    let interest = amount * rate * year;
    let totalAmount = amount + interest + fee
    let MonthlyPay1 = amount / (year * 12);

    document.querySelector(".totalAmount").innerHTML = "$" + totalAmount + (fee == 0 ? "" : `<br>(include fee)`);
    document.querySelector(".interest").innerText = "$" + interest;
    const resultEL = document.querySelector("#result");
    resultEL.style.display = "none";
    setTimeout(function () {
        resultEL.style.display = "block";
    }, 500)


    document.querySelector(".MonthlyPayment").innerText = "$" + MonthlyPay1.toFixed(2)

    console.log(MonthlyPay1.toFixed(2), totalAmount);
    //return (MonthlyPay1, totalAmount)
}
//
function ByInterest(amount, year, rate, rule) {
    let fee = feeEL.checked ? 5000 : 0;
    console.log(amount, year, rate, fee, rule);

    let MonthlyPay2 = amount * (((1 + (rate / 12)) ** (year * 12)) * (rate / 12)) / (((1 + (rate / 12)) ** (year * 12)) - 1);
    return MonthlyPay2.toFixed(2)
}