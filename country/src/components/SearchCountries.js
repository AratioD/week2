import React from 'react'

const SearchCountries = ({handleFindSearch, compFindValue 
}) => {

    return (
        <label>
            find countries: <input type="text" value={compFindValue} onChange={handleFindSearch} />
        </label>
    )
}
export default SearchCountries
