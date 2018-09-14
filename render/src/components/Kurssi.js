import React from 'react'

const Kurssi = ({ kurssi }) => {


  const rivit = () => kurssi.osat.map(note => <ul key={note.id}>{note.nimi} {note.tehtavia}</ul>)

  //const euros = [29.76, 41.85, 46.5];
  const sum = kurssi.osat.map(note => <ul key={note.id}>{note.nimi} {note.tehtavia}</ul>).reduce((total, amount) => total + amount);
  //sum // 118.11

  //console.log(sum)
  // console.log(kurssi.nimi)
  return (
    <div>
      <ul>
        <Otsikko otsikko={kurssi.nimi} />
        {rivit()}
        <Yhteensa yhteensa={kurssi} />
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

const Yhteensa = (props) => {

  const totalYears = props.yhteensa.osat.reduce((acc, pilot) => acc + pilot.tehtavia, 0);

  //console.log(totalYears)

  return (
    <div>
      <ul>
        <h1>{props.otsikko}</h1>
        <p>yhteensa {totalYears} tehtävää</p>
      </ul>
    </div>
  )
}

export default Kurssi