import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './components/Kurssi'


const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
  const [osa1, osa2, osa3] = props.kurssi.osat
  return(
    <div>
      <Osa osa={osa1.nimi} tehtavia={osa1.tehtavia} />
      <Osa osa={osa2.nimi} tehtavia={osa2.tehtavia} />
      <Osa osa={osa3.nimi} tehtavia={osa3.tehtavia} />
    </div>
  )
}
const Yhteensa = (props) => {
  const [osa1, osa2, osa3] = props.kurssi.osat
  
  return(
    <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
  )
}

const App = () => {

  console.log('testi jee')
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      },
      {
        nimi: 'LUAn arkitehtuuri',
        tehtavia: 22,
        id: 4
      },

    ]
  }

  // const kurssi = [
  //   {
  //     id: 1,
  //     content: 'HTML on helppoa',
  //     date: '2017-12-10T17:30:31.098Z',
  //     important: true
  //   },
  //   {
  //     id: 2,
  //     content: 'Selain pystyy suorittamaan vain javascriptiä',
  //     date: '2017-12-10T18:39:34.091Z',
  //     important: false
  //   },
  //   {
  //     id: 3,
  //     content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
  //     date: '2017-12-10T19:20:14.298Z',
  //     important: true
  //   }
  // ]

  console.log('teststset')
  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)