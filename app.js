//Generate pin functionality goes here
const generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener('click',function(){
    let randomNumber = Math.floor(Math.random() * 10000);
    document.getElementById("generated-pin").value = randomNumber;
})
