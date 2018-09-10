import React from 'react'

const Kurssi = ({ kurssi }) => {


  const rivit = () => kurssi.osat.map(note => <ul key={note.id}>{note.nimi} {note.tehtavia}</ul>)

  // console.log(kurssi.nimi)
  return (
    <div>
      <ul>
        <Otsikko otsikko={kurssi.nimi}></Otsikko>
        {rivit()}
      </ul>
    </div>
  )
}

const Otsikko = (props) => {

  // console.log('testi toimiiko')
  return (
    <div>
      <ul>
        <h1>{props.otsikko}</h1>
      </ul>
    </div>
  )
}




export default Kurssi