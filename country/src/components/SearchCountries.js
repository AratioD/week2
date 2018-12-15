import React from 'react'

const SearchCountries = ({combHandleFindSearch, compFindValue 
}) => {

    return (
        <label>
            find countries: <input type="text" value={compFindValue} onChange={combHandleFindSearch} />
        </label>
    )
}
export default SearchCountries
