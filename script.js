'use strict';




let randomNumber = Math.trunc(Math.random()*20);

let score = 20;
let userNumber =0;
let hightScore = 0;


const displayMessage = function(message)
{
    document.querySelector(".message").textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    userNumber = document.querySelector('.guess').value;
        
    if(!userNumber)
    {
    displayMessage("No Number");
    }
    else if(randomNumber != userNumber)
    {
    displayMessage(userNumber > randomNumber ?"Entered number is big": "Entered number is small ");
    score--;
    document.querySelector(".score").textContent = score;
    }
    else
    {
    displayMessage("Number is same ");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = userNumber;
    document.querySelector(".number").style.width = "30rem";
    
    if (score > hightScore) {
        hightScore = score;
        
       // console.log(`this is ${hightScore}`);
        document.querySelector(".highscore").textContent = hightScore;
      }
    }
    });


    document.querySelector(".again").addEventListener("click", function()
    {
        userNumber = 0;
        randomNumber = Math.trunc(Math.random()*20);
        score = 20;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
      
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    });
        
        
