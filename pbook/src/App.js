import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
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
      id: this.state.persons.length + 1
    }

    const notes = this.state.persons.concat(noteObject)

    console.log('notes', notes)

    console.log('noteobject', noteObject.name)

    var pos = notes.length

    console.log('positio', pos)

    const result = notes.find(fruit => fruit.name === noteObject.name);
    console.log('result', result)

    console.log('result id', result.id)
    console.log('notes.leght', notes.length)

    if (result.id < notes.length) {
      window.alert("value is used");
    } else {
      this.setState({
        persons: notes,
        newName: ''
      })

    }



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
            <ul key={name.id}>{name.name} </ul>)}
        </div>
        <div>
          {/* debug: {this.state.newName} */}
        </div>
      </div>
    )
  }
}

export default App


