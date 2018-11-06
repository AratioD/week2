import React from 'react'

const AddNamesAndNumbers = ({ addNote, handleNumberChange,
    handleNameChange, newNumber, newName }) =>
    (<div>
        <form onSubmit={addNote}>
            <div>
                nimi: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                numero: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <button type="submit">Add</button>
        </form>
    </div>)

export default AddNamesAndNumbers
