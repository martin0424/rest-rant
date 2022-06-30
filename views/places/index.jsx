const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req,res) => {
    res.render('places/index', { places })
})

function indexedDB(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/places/${index}`} >
                        {place.name}
                    </a>
                </h2>
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
