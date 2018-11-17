import React from 'react'

const AddNamesAndNumbers = ({ compAddNote, handleNumberChange,
    handleNameChange, combNewNumber, combNewName }) =>
    (<div>
        <form onSubmit={compAddNote}>
            <div>
                nimi: <input value={combNewName} onChange={handleNameChange} />
            </div>
            <div>
                numero: <input value={combNewNumber} onChange={handleNumberChange} />
            </div>
            <button type="submit">Add</button>
        </form>
    </div>)

export default AddNamesAndNumbers
