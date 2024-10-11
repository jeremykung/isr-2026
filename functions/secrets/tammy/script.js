
    let choicesLeft = 2;

const secrets = {
  secret1: "Ms Buckland likes pineapple on pizza ",
  secret2: "Anar is responsible for Michael Jackson dying",
  romanticSecret: "Rostik isnt gay ",
  topSecret: "Max has less than 10000 tropheys in Brawl Stars"
};

function revealSecret(secret) {
  if (choicesLeft > 0) {
    alert(secrets[secret]);
    choicesLeft--;  
  } else {
    alert("No more secrets can be revealed! You've used all your choices.");
  }
}


document.getElementById('secret1').addEventListener('click', function() {
  revealSecret('secret1');
});

document.getElementById('secret2').addEventListener('click', function() {
  revealSecret('secret2');
});

document.getElementById('romanticSecret').addEventListener('click', function() {
  revealSecret('romanticSecret');
});

document.getElementById('topSecret').addEventListener('click', function() {
  revealSecret('topSecret');
});