var apiKey = "2f7eb335b9e6b805627e7b9635951372"
var rootUrl = "https://api.openweathermap.org"
var apiKey2 = "090e4e64cd7d949a4ec9129c4689cd95"
var searchInput = document.querySelector ("#search-input")
var searchForm = document.querySelector ("#searchform")


async function fetchCoordinates (searchcity) { 
    const response = await fetch(`${rootUrl}/data/2.5/weather?q=${searchcity}&appid=${apiKey2}`)
    const data = await response.json()
    console.log(data)
}
// fetchCoordinates("Philadelphia")

function handleFormSubmit (event){
    if (!searchInput.value){
        return
    }
    event.preventDefault ()
    var search =searchInput.value
    fetchCoordinates(search)
}
searchForm.addEventListener("submit", handleFormSubmit)