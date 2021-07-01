let feetEl = document.getElementById("feet-el")
let inchEl = document.getElementById("inch-el")
let weightEl = document.getElementById("weight-el")

let bmiBtn = document.getElementById("bmi-btn")
let resultEl = document.getElementById("result-el")

bmiBtn.addEventListener("click", function() {
    calculateBMI()
})

function calculateBMI() {
    let weight = weightEl.value
    let feet = feetEl.value
    let inch = inchEl.value

    // bmi = weight(kg) / height(m) ^ 2
    // 1 feet = 0.3048 meter
    // 1 inch = 0.0254 meter
    if (weight.length > 0 && feet.length > 0 && inch.length > 0) {
        let result = (weight / Math.pow((feet* 0.3048 + inch * 0.0254),2)).toFixed(2)
        resultEl.textContent = result
    }
}