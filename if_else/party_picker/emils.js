function partyRatingSystem() {
    let musicRating = prompt("Rate the music at the party from 1 to 5:");
    let foodRating = prompt("Rate the food at the party from 1 to 5:");
    let crowdRating = prompt("Rate the drinks at the party from 1 to 5:");

    musicRating = parseInt(musicRating);
    foodRating = parseInt(foodRating);
    crowdRating = parseInt(crowdRating);

    if (isNaN(musicRating) || isNaN(foodRating) || isNaN(crowdRating)) {
        console.log("Please enter valid ratings between 1 and 5.");
        return;
    }

    let partyScore = musicRating * foodRating * crowdRating;

    let maxScore = 5 * 5 * 5; 
    let overallScore = (partyScore / maxScore) * 100;

    console.log(`The overall party score is: ${overallScore.toFixed(2)} out of 100.`);

    if (partyScore >= 100) {
        console.log("This party is a MUST! You should definitely go!");
    } else if (partyScore >= 80) {
        console.log("The party sounds great! You should consider going.");
    } else if (partyScore >= 50) {
        console.log("The party seems okay, but it might not be amazing.");
    } else {
        console.log("You might want to avoid this party, it doesn't sound too fun.");
    }
}

partyRatingSystem();
