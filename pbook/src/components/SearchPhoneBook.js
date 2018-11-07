import React from 'react'

const SearchPhoneBook = ({handleFindSearch, findValue 
}) => {

    return (
        <label>
            rajaa näytettäviä: <input type="text" value={findValue} onChange={handleFindSearch} />
        </label>
    )
}
export default SearchPhoneBook
