import React from 'react'

const PrintNamesAndNumbers = ({
    persons,
    findValue }) => {

    const personsCopy = [].concat(persons)

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
    const personCopySorted = filterItems(findValue)



    return (
        <div>
            {personCopySorted.map(name =>
                <ul key={name.id}>{name.name} {name.number}</ul>)}
        </div>
    )
}
export default PrintNamesAndNumbers
