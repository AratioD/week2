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

    console.log('flag amount', countryCopySorted.length)
    // console.log('person', persons)

    if (countryCopySorted.length < 10 && countryCopySorted.length >= 2 )  {
        console.log('toimiiko tämä if')
        return (
            <div>
                {countryCopySorted.map(country =>
                    <div key={country.name}>
                        <p>{country.name}</p>
                    </div>)}
            </div>

        )
    } else if (countryCopySorted.length === 1) {
        return (
            <div>
                {countryCopySorted.map(country =>
                    <div key={country.name}>
                        <h2>{country.name}</h2>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <img src={country.flag} alt="flags" width="300" height="200"></img>
                    </div>)}
            </div>

        )

    } else {
        return (
            <div>
                <p>too many matches, please specify another filter</p>
            </div>
        )
    }

}
export default PrintCountries
