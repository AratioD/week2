import React from 'react'

const PrintCountries = ({
    combCountries,
    combFindValue }) => {

    const countriesCopy = [].concat(combCountries)

    console.log('toimmiii')
    countriesCopy.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });



    function filterItems(query) {
        return countriesCopy.filter(function (el) {
            return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }
    const countryCopySorted = filterItems(combFindValue)

    // console.log('personscopy', personCopySorted)
    // console.log('person', persons)

    return (
        <div>
            {countryCopySorted.map(country =>
                <p key={country.name}>
                    <p><h2><b>{country.name}</b></h2></p>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <img src={country.flag} alt="flags" width="300" height="200"></img>
                </p>)}
        </div>

    )
}
export default PrintCountries
