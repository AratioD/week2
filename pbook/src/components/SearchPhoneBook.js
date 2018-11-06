import React from 'react'

const SearchPhoneBook = ({ addNote,
    handleFindSearch,
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
        <form onSubmit={addNote}>
            <label>
                rajaa näytettäviä: <input type="text" value={findValue} onChange={handleFindSearch} />
            </label>
        </form>
    )
}
export default SearchPhoneBook
