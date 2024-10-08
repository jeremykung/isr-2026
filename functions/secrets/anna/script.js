// <img src= 

let secrets=2

function whenButtonClicked(){
    if (secrets > 0) {
     alert("Secret")
    secrets = secrets -1    
    }
}


function button(){
    if (secrets > 0){
    alert("fake secret")
    secrets = secrets -1
    }  
}

function clicked(){
    if (secrets>0){
    alert("another secret")    
    secrets = secrets -1
    }
    
}

function money(){
    if (secrets>0){
    alert("secrets")
    secrets = secrets -1
    } 
}

/*let clickCount = 0;

function buttonClicked(button) {
    // Increase the click counter
    clickCount++;
    
    // Disable the clicked button
    button.disabled = true;

    // Once two buttons are clicked, disable all remaining buttons
    if (clickCount >= 2) {
        let allButtons = document.querySelectorAll("button");
        allButtons.forEach(btn => {
            if (!btn.disabled) {
                btn.disabled = true;
            }
        });
    }
}
*/

