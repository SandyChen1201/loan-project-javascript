const amountEL = document.querySelector("#amount");
const yearEL = document.querySelector("#year");
const rateEL = document.querySelector("#rate");
const feeEL = document.querySelector("#fee");
const paymentEL1 = document.querySelector("#payment1");
const paymentEL2 = document.querySelector("#payment2");
const caculateEL = document.querySelector("#caculate");
const tableEL = document.querySelector("#table");
console.log(amountEL, yearEL, rateEL, feeEL, paymentEL1, paymentEL2, caculateEL, tableEL);


caculateEL.addEventListener("click", caculateLoan);



function caculateLoan() {
    let amount = amountEL.value * 10000;
    let years = yearEL.value;
    let rate = rateEL.value;
    /*let fee = 0
    if (feeEL.checked) {
        fee = 5000
    }*/
    let fee = feeEL.checked ? 5000 : 0;
    let rule = paymentEL1.checked ? 1 : 2;

    //基本公式
    let result;
    if (rule == 1) {
        result = rule1(amount, years, rate);
        console.log(result);
    } else {
        console.log(result);
        alert("功能製作中..(回家作業)");
        return
    }

    let totalInterest = result[1];
    let totalAmount = result[2] + fee;
    let MonthlyPay1 = parseInt(amount / (years * 12));
    console.log(amount, years, rate, fee, rule, totalAmount, totalInterest);

    document.querySelector(".totalAmount").innerHTML = "$" + totalAmount + (fee == 0 ? "" : `<br>(include fee)`);
    document.querySelector(".interest").innerText = "$" + totalInterest;
    const resultEL = document.querySelector("#result");
    resultEL.style.display = "none";
    setTimeout(function () {
        resultEL.style.display = "block";
    }, 500)

    document.querySelector(".MonthlyPayment").innerText = "$" + MonthlyPay1.toFixed(2)
    console.log(MonthlyPay1.toFixed(2), totalAmount);

    drawTable(result[0])
}

function drawTable(datas) {
    let tableStr = "";
    for (let i = 0; i < datas.length; i++) { //外迴圈控制tr的數量
        tableStr += "<tr>";
        for (let j = 0; j < datas[i].length; j++) { //內迴圈控制td
            tableStr += `<td>${datas[i][j]}</td> `;
        }
        tableStr += "<tr>"
    }
    tableEL.innerHTML = tableStr


    //let tableStr = '<ul>'
    //for (let i = 0; i < datas.length; i++) {
    //    console.log(datas[i].join(","));
    //    tableStr += `< li > ${ datas[i].join(",") }</li > `
    //}
    //tableStr += '</ul>'
    //tableEL.innerHTML = tableStr;
}



function rule1(total_amount, years, rate) {
    let amount = total_amount;
    let period = years * 12;
    let monthly_rate = rate / 100 / 12;
    let monthly_pay = parseInt(amount / period);
    let Monthly = [];
    let total_int = 0
    let totalAmount = 0
    for (let i = 0; i < period; i++) {
        interest = Math.round(amount * monthly_rate);
        monthly_int = monthly_pay + interest;
        amount -= monthly_pay;
        if (i != period - 1) {
            total_int += interest
            Monthly.push([i + 1, monthly_pay, interest, monthly_int, amount]);
        } else {
            total_int += interest;
            Monthly.push([i + 1, monthly_pay + amount, interest, monthly_pay + amount + interest, 0]);
        }
        totalAmount = total_amount + total_int
    }
    console.log(Monthly, total_int, totalAmount);
    return [Monthly, total_int, totalAmount];
}
