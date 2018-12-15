import React from 'react'

const PrintCountries = ({
    combCountries,
    combFindValue,
    combSelectedCountry,
    combHandleClick }) => {

    const countriesCopy = [].concat(combCountries)

    console.log(combHandleClick)
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

    console.log("listan pituus", countriesCopy.length)
    console.log(combSelectedCountry.length)
    console.log("avain", combSelectedCountry)
    console.log(countriesCopy)

    console.log("combselectedcountry", countryCopySorted.length)

    if (combSelectedCountry.length > 1) {
        
        function filterItems(query) {
            return countryCopySorted.filter(function (el) {
                return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            })
        }

        const countryCopySorted1 = filterItems(combSelectedCountry)

        console.log(filterItems(combSelectedCountry)); // ['apple', 'grapes']
        // console.log(filterItems('an')); // ['banana', 'mango', 'orange']


        return (
            <div>
                {countryCopySorted1.map(country =>
                    <div key={country.name}>
                        <h2>{country.name}</h2>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <p>Gini: {country.gini}</p>
                        <img src={country.flag} alt="flags" width="300" height="200"></img>
                    </div>)}
            </div>
        )
    } else if (countryCopySorted.length < 10 && countryCopySorted.length >= 2) {

        return (
            <div>
                {countryCopySorted.map(country =>
                    <div key={country.name}>
                        <a href="#" value={combSelectedCountry} onClick={() => combHandleClick(country.name)}>{country.name}</a>
                    </div>)}
            </div>

        )


    } else if (countryCopySorted.length === 1) {
        console.log('toimii tämä')
        return (
            <div>
            {countryCopySorted.map(country =>
                <div key={country.name}>
                    <h2>{country.name}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <p>Gini: {country.gini}</p>
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
