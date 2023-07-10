var apiKey = "2f7eb335b9e6b805627e7b9635951372"
var rootUrl = "https://api.openweathermap.org"



async function fetchCoordinates (searchcity) { 
    const response = await fetch(`${rootUrl}/data/2.5/weather?q=${searchcity}&appid=${apiKey}`)
    const data = await response.json()
    console.log(data)
}
fetchCoordinates("")