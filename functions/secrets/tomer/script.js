//
secretCounter = 2

function buttonPressed(){
    if (secretCounter > 0)
        {
    alert('Honey never spoils, it can last ever after 3,000 years')
        }
    secretCounter = secretCounter - 1
    console.log('Honey never spoils, it can last ever after 3,000 years')
}
function buttonPressed2(){
    if (secretCounter > 0)
        {
    alert("The reason a bug in a computer is called a bug is beacuase a real bug was found in a computer at harvard in 1948")
        }
    secretCounter = secretCounter - 1
    console.log('secretCounter:', secretCounter)
}
function buttonPressed3(){
    if (secretCounter > 0)
        {
    alert("The avarage phone is 10 times stronger than the technology that was used for the apollo space trip")
        }
    secretCounter = secretCounter -1
    console.log('secretCounter:', secretCounter)
}
function buttonPressed4(){
    if (secretCounter > 0)
        {

    alert("Man are 5 times more likely to get struck by lightning then women")
        }
    secretCounter = secretCounter - 1
    console.log('secretCounter:', secretCounter)
}
if (secretCounter < 0)
    {
        secretCounter = 0
        alert("No more secrets for you!")
    }