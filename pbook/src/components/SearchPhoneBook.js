import React from 'react'

const SearchPhoneBook = ({handleFindSearch, compFindValue 
}) => {

    return (
        <label>
            rajaa näytettäviä: <input type="text" value={compFindValue} onChange={handleFindSearch} />
        </label>
    )
}
export default SearchPhoneBook
