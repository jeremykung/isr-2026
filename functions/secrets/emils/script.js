let secretsLeft = 2;

function revealSecret(secretNumber) {
    if (secretsLeft > 0) {
        let secretMessage = '';
        
        switch(secretNumber) {
            case 1:
                secretMessage = "Secret 1: Anar's real name is Ainārs";
                break;
            case 2:
                secretMessage = "Secret 2: Anar's real age is 22";
                break;
            case 3:
                secretMessage = "Romantic Secret: Anar's love of his life is CJ";
                break;
            case 4:
                secretMessage = "Top Secret: Anar's love Emcha's goatee";
                break;
            default:
                secretMessage = "No secret available.";
        }
        
        alert(secretMessage);
        secretsLeft--;
    } else {
        prompt("Your free subsription of Anar's secrets has ended, please provide us with your cards details so we can continue further actions. If you don't pay we will be forced instal a trojan horse on your computer...");
    }
    
    document.getElementById('counter').textContent = `Secrets left: ${secretsLeft}`;
}
