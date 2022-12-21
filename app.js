// Functions goes here
function showNotify(id) {
    document.getElementById(id).style.display = "block";
}
function hideNotify(id) {
    document.getElementById(id).style.display = "none";
}

//Generate pin functionality goes here
const generateBtn = document.querySelector(".generate-btn");
let randomNumberStr = "";
generateBtn.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * 10000);
    randomNumberStr = "";
    randomNumberStr = randomNumberStr + randomNumber;
    document.getElementById("generated-pin").value = randomNumber;

    hideNotify("correctNotify");
    hideNotify("wrongNotify");
    document.getElementById("disable").setAttribute("disabled");
})

// Submit pin functionality goes here
let inputNumbers = "";
let buttons = document.querySelectorAll(".button");
const enteredPin = document.getElementById("enteredPin");
Array.from(buttons).forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', function (event) {
        if (event.target.innerText == "C") {
            inputNumbers = "";
        }
        else if (event.target.innerText == "<") {
            inputNumbers = inputNumbers.substring(0, inputNumbers.length - 1);
        }
        else {
            inputNumbers = inputNumbers + event.target.innerText;
        }
        enteredPin.value = inputNumbers;

        hideNotify("correctNotify");
        hideNotify("wrongNotify");

        document.getElementById("disable").removeAttribute('disabled');
        document.getElementById("count").innerText = 3;
    })
})


const submitBtn = document.querySelector(".submit-btn");


submitBtn.addEventListener('click', function () {
    let count = +(document.getElementById("count").innerText);
    if (count == 0) {
        document.getElementById("disable").setAttribute("disabled", "");
    }
    else {
        if (randomNumberStr == inputNumbers) {
            showNotify("correctNotify");
        }
        else {
            showNotify("wrongNotify");
        }
        
        count--;
        document.getElementById("count").innerText = count;
    }
})





