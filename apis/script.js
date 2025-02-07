// JSON - JavaScript Object Notation
// Fetch
// Async Await

// fetch() // function that returns data from a url

async function getCat() {

    // Gets the full response
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'live_96JjBqVW9GkEg7ezF3Qcy8xuoHUnNXdyJQGdnSJAw1nsUzW3YauIkrVeJGWN0PNs'
        }
    })
    console.log('response:', response)

    // Extract the data from the response
    const data = await response.json()
    console.log('data:', data)

    // Show on website
    document.querySelector(".live-data").innerHTML += `
        <h1>${data[0].id}</h1>
        <img src="${data[0].url}" />
    `

}

















// const myData = [
//     { 
//         name: "Alisa", 
//         age: 16 
//     },
//     { 
//         name: "Anars", 
//         age: 16 
//     },
//     { 
//         name: "Anna", 
//         age: 16 
//     }
// ]

// const student = { 
//     name: "Alisa", 
//     age: 16 
// }

















// async function getData() {
//     const data = await fetch("https://api.thecatapi.com/v1/images/search")
//     console.log(data)
//     const jsonData = await data.json()
//     console.log('json:', jsonData)
// }

// getData()