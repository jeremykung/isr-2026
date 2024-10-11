let remainingChoices = 2;

const secrets = {
    secret1: "Emils got hit by a bus, when he was only 12",
    secret2: "Emils love kids",
    romanticSecret: "Emils love Anar",
    topSecret: "Emils favourite food is frogs",
};

function revealSecret(secretId) {
    if (remainingChoices > 0) {
        alert(secrets[secretId]);
        remainingChoices--;
        document.getElementById("remainingChoices").innerText = `Choices left: ${remainingChoices}`;
        document.getElementById(secretId).disabled = true;
    } else {
        alert("You have used all your choices! No more secrets for you.");
    }
}

