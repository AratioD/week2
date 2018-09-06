import React from 'react'

const Kurssi = ({ kurssi }) => {

  const rivit = () => kurssi.osat.map(note => <ul key={note.id}>{note.nimi} {note.tehtavia}</ul>)

  return (
    <div>
      <ul>
        <h1>{kurssi.nimi}</h1>
        {rivit()}
      </ul>
    </div>
  )
}

export default Kurssi