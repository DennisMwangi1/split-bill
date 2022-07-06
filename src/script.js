let billCalculator = document.getElementById('form');
let totalBill = document.getElementById('total-bill')
let tip = document.getElementById('tip-percent')
let billInfo = document.getElementById('bill-text')
let tipInfo = document.getElementById('tip-text')
let dividedBill = document.getElementById('bill-individual')
let peopleCount = document.getElementById('people-count')
let currency = document.getElementById('currency')


billCalculator.addEventListener('submit',(e)=>{
    e.preventDefault()
   calculateTotalBill()
   form.reset()
})

function calculateTotalBill(){
    let bill = parseInt(totalBill.value)
    let tipAmount =parseInt( (tip.value/100)*bill)
    let totalAmount = bill + tipAmount
    let dividedAmount =Math.ceil(totalAmount/parseInt(peopleCount.value))
    billInfo.innerText = totalAmount
    tipInfo.innerText = tipAmount
    dividedBill.innerText = dividedAmount
    setTimeout(reset,5000)

}
function reset(){
    billInfo.innerText = ''
    tipInfo.innerText = ''
    dividedBill.innerText = ''
}

