import React from 'react'

const PrintNamesAndNumbers = ({
    combPersons,
    combFindValue }) => {

    const personsCopy = [].concat(combPersons)


    personsCopy.sort(function (a, b) {
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
        return personsCopy.filter(function (el) {
            return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }
    const personCopySorted = filterItems(combFindValue)

    // console.log('personscopy', personCopySorted)
    // console.log('person', persons)

    return (
        <div>
            {personCopySorted.map(name =>
                <ul key={name.id}>{name.name} {name.number}</ul>)}
        </div>
    )
}
export default PrintNamesAndNumbers
