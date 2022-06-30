const React = require('express').Router()
const router = require('../../controllers/places.js')
const Def = require('../models/places.js')

router.get('/', (req,res) => {
    res.render('places/index', { places })
})

function indexedDB(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}
