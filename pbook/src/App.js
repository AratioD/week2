import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        // {
        //   name: 'Arto Hellas',
        //   //id: 1,
        // },
        // {
        //   name: 'Jani Peso',
        //   //id: 2,
        // },
        // {
        //   name: 'Pasi Pinni',
        //   //id: 3,
        // },
      ],
      newName: ''
    }
    console.log('testi testi')
  }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
    // console.log('newName arvo', newName)
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: this.state.newName,
    }

    const notes = this.state.persons.concat(noteObject)

    console.log('notes', notes)
    this.setState({
      persons: notes,
      newName: ''
    })
  }

  render() {
    console.log('render', this.state.persons)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNote}>
          <input
            value={this.state.newName}
            onChange={this.handleNoteChange}
          />
          <button type="submit">tallenna</button>
        </form>
        
        <div>
        <h2> Numerot: </h2>
        {this.state.persons.map(name =>
            <ul key={name.name}>{name.name} </ul>)}
        </div>
        <div>
          {/* debug: {this.state.newName} */}
        </div>
      </div>
    )
  }
}

export default App

  // handleNoteChange = (event) => {
  //   event.preventDefault()
  //   console.log(event.target.value)
  //   this.setState({ newName: event.target.value })
  // }

  // // //testissä tämä versio
  // // addNote = (event) => {
  // //   event.preventDefault()
  // //   const noteObject = {
  // //     content: this.state.newName,
  // //     // date: new Date().toISOString(),
  // //     // important: Math.random() > 0.5,
  // //     // id: this.state.notes.length + 1
  // //   }

  // //   const notes = this.state.notes.concat(noteObject)
  // // }

  // addNote = (event) => {
  //   event.preventDefault()
  //   const noteObject = {
  //     content: this.state.newNote,
  //     // date: new Date().toISOString(),
  //     // important: Math.random() > 0.5,
  //     // id: this.state.notes.length + 1
  //   }

  //   const notes = this.state.notes.concat(noteObject)

  //   this.setState({
  //     notes: notes,
  //     newNote: ''
  //   })
  // }
