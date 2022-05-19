const initialPrice = document.querySelector("#initialPrice");
const stockQuantiy = document.querySelector("#quantity");
const currentPrice = document.querySelector("#currentPrice");
const tellBtn = document.querySelector("#tellBtn");
const outputBox = document.querySelector("#output");

tellBtn.addEventListener("click", submitHandler);

function submitHandler() {
    let initial = Number(initialPrice.value);
    let quantity = Number(stockQuantiy.value);
    let current = Number(currentPrice.value);

    calculateProfitAndLoss(initial, quantity, current);

    if(initialPrice.value === '' || stockQuantiy.value === '' || currentPrice.value === '') {
        showOutput2("Enter all fields");
    }
}

function calculateProfitAndLoss(initial, quantity, current) {

    if(initial > current) {
        let loss = ((initial - current) * quantity).toFixed(2);
        let lossPercentage = ((loss / initial) * 100).toFixed(2);
        showOutput2(`The loss is ${loss} and the loss percentage is ${lossPercentage}%`);
    } 
     else if(initial < current) {
        let profit = ((current - initial) * quantity).toFixed(2);
        let profitPercentage = ((profit / initial) * 100).toFixed(2);
        showOutput1(`The profit is ${profit} and the profit percentage is ${profitPercentage}%`);
    }
    else {
        showOutput1("No loss/profit")
    }
}

function showOutput1(message) {
    outputBox.innerHTML = message;
    outputBox.style.color = "green";
}
function showOutput2(message) {
    outputBox.innerHTML = message;
    outputBox.style.color = "red";
}