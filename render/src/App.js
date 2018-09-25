import React from 'react'
import Kurssi from './components/Kurssi'

const App = () => {
  const mainTopic = "Opetusohjelma"
  const kurssi = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'LUA',
          tehtavia: 111,
          id: 3
        },
      ]
    },
    {
      nimi: 'BASIC UNDERSTANDING OF CODING',
      id: 3,
      osat: [
        {
          nimi: 'Naming Convention',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Say it once',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Game of thrones',
          tehtavia: 14,
          id: 3
        }
      ]
    },
  ]
 //console.log('app.js works')
  return (
    <div>
      <Kurssi kurssi={kurssi} maintopic={mainTopic} /> 
    </div>
  )
}

export default App;