let hands =["Rock","Paper","Scissor"]

let Player1
let Player2
let number1
let number2
let resultOne =document.getElementById("result")



function player1(){
let randomNumber1 = Math.floor(Math.random()*hands.length)
 number1 = hands[randomNumber1]
 

 let play1 = document.getElementById("player1")
 play1.innerText =`Player 1:${number1}`
console.log(number1)  



}

function player2(){
   
    let randomNumber2 = Math.floor(Math.random()*hands.length)
 number2 = hands[randomNumber2]
 let play2 = document.getElementById("player2")
 
 play2.innerText =`Player 2:${number2}`
console.log(number2) 

resultFunction();
}


let resultFunction = function result(){
 
{    if(number1 == "Rock" && number2=="Rock"){
 resultOne.innerHTML="Game Tie"
}else if(number1== "Scissor" && number2=="Scissor"){
resultOne.innerHTML = "Game Tie"
console.log(resultOne)
}else if(number1== "Scissor" && number2=="Paper"){
resultOne.innerHTML = "Player 1 Win !!!!!"
}else if(number1== "Paper" && number2=="Scissor"){
resultOne.innerHTML = "Player 2 Win !!!!!"
}else if(number1== "Paper" && number2=="Rock"){
resultOne.innerHTML = "Player 1 Win !!!!!"
}else if(number1== "Rock" && number2=="Paper"){
resultOne.innerHTML = "Player 2 Win !!!!!"
}else if(number1== "Paper" && number2=="Paper"){
resultOne.innerHTML = "Game Tie"
}else if(number1== "Rock" && number2=="Scissor"){
resultOne.innerHTML = "Player 1 Win !!!!!"
}else if(number1== "Scissor" && number2=="Rock"){
resultOne.innerHTML = "Player 2 Win !!!!!"
}

}
console.log(result)
 
}


   



