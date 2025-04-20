var inputBox = document.getElementById("inputBox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noofguess = 3

var randomnumber = Math.floor(Math.random()*10)+1
if(randomnumber>5)
    {
    randomnumber=randomnumber-5
}
function checkthenumber()
{
if(inputBox.value == randomnumber)
     {
alert("you got it right")
result.textContent = "You are Right !"

     }
else
{
    noofguess=noofguess-1
    if(noofguess==0)
    {
        alert("You lost,Generated random number is: "+randomnumber)
    }
    guesscount.textContent = "Available Guesses:"+noofguess
    result.textContent = "You are Wrong !"
}

}