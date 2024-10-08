let secretsRemaining = 2
function secret(whichOne) {
    if (secretsRemaining > 0) {
        if (whichOne == 1) {
            alert("Secret 1: Mark owes Dominykas 4.2 euros")
        } else if (whichOne == 2) {
            alert("Secret 2: Mark almost killed his dog Luna last year by force feeding her grass. After that, his dog got revenge on his friend.")
        } else if (whichOne == 3) {
            alert("Secret 3: Mark likes dudes")
        } else if (whichOne == 4) {
            alert("Secret 4: Mark is short")
        }
    }
    else {
        alert("Too many secrets for you, big man")
    }
    secretsRemaining = secretsRemaining - 1
}