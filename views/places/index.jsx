const React =require('react')
const Def = require('./default')

function indexedDB(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AS',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
}]