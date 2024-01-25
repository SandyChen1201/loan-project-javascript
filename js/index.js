function ByPrincipal(amount, year) {
    MonthlyPay1 = amount / (year * 12)
    return MonthlyPay
}

function ByInterest(amount, year, rate) {
    MonthlyPay2 = (((1 + (rate / 12)) ** (year * 12)) * (rate / 12))
}