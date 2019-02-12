// Init weather
const storage = new Storage
const weatherLocation = storage.getLocationData()
const weather = new Weather(weatherLocation.city, weatherLocation.state)
const ui = new UI


const change = document.getElementById('w-change-button')

// Get weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather)

// Change Location event
//weather.changeLocation('Miami', 'FL')
change.addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value

    weather.changeLocation(city, state)

    // Set Location in LS
    storage.setLocationData(city, state)
    // Get and Display weather
    getWeather()
    $('#locModal').modal('hide')
    e.preventDefault()
})

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results)
        })
        .catch(err => console.log(err))
}