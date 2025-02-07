console.log("DOM Manipulation!")

// Grab document objects and manipulate their text
document.querySelector("h1").innerText = "Dogs"

function showPicture() {

    // Manipulate HTML
    document.querySelector(".image-container").innerHTML = `
        <p>this is a picture of a lizard</p>
        <img src="https://i.ytimg.com/vi/CKlM82LJfTI/maxresdefault.jpg" />
    `
    
}