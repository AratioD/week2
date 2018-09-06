import React from 'react'
import Note from './components/Note'
import Kurssi from './components/Kurssi'


const App = () => {
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
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}



// const App = ({ notes}) => {

//   console.log('täällä ollaan')

//   const kurssi = [
//     {
//       id: 1,
//       content: 'HTMdfghdfgha',
//       date: '2017-12-10T17:30:31.098Z',
//       important: true
//     },
//     {
//       id: 2,
//       content: 'Seldfghdfghdfghttamaan vain javascriptiä',
//       date: '2017-12-10T18:39:34.091Z',
//       important: false
//     },
//     {
//       id: 3,
//       content: 'HTTdfghdfghST',
//       date: '2017-12-10T19:20:14.298Z',
//       important: true
//     },
//     {
//       id: 4,
//       content: 'sdfsfsfsf1231231231231231',
//       date: '2017-12-10T19:20:14.298Z',
//       important: true
//     },
//   ]

//   // const kurssi = {
//   //   nimi: 'Half Stack -sovelluskehitys',
//   //   osat: [
//   //     {
//   //       nimi: 'Reactin perusteet',
//   //       tehtavia: 10,
//   //       id: 1
//   //     },
//   //     {
//   //       nimi: 'Tiedonvälitys propseilla',
//   //       tehtavia: 7,
//   //       id: 2
//   //     },
//   //     {
//   //       nimi: 'Komponenttien tila',
//   //       tehtavia: 14,
//   //       id: 3
//   //     }
//   //   ]
//   // }

//   console.log(notes)
//   console.log(kurssi)

//   return (
//     <div>
//       <h1>Muistiinpanot</h1>
//       <ul>
//         {notes.map(note => <Note key={note.id} note={note} />)}
//         {/* {kurssi.map((note) => <Kurssi key={note.id} kurssi={note} />)} */}
//         <Kurssi kurssi={kurssi} /> 
//       </ul>
//     </div>
//   )
// }

// export default Appimport React from 'react'
