import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Martti Tienari', number: '040-123456', id: 2 },
        { name: 'Arto Järvinen', number: '040-123456', id: 3 },
        { name: 'Lea Kutvonen', number: '040-123456', id:4 }
      ],
      newName: '',
      newNumber:'',
    }
    // console.log('testi testi')
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
    //  console.log('newName arvo', newName)
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
    // console.log('newNumber arvo', newNumber)
  }


  addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length + 1
    }

    const notes = this.state.persons.concat(noteObject)
    const result = notes.find(fruit => fruit.name === noteObject.name);

    if (result.id < notes.length) {
      window.alert("value is used");
    } else {
      this.setState({
        persons: notes,
        newName: '',
        newNumber: ''
      })

    }
  }

  render() {
    console.log('render', this.state.persons)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNote}>
          <div>
            nimi: <input
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            numero: <input
              value={this.state.newNumber}
              onChange={this.handleNumberChange}
            />
            </div>
            <button type="submit">lisää</button>
        </form>
        <div>
          <h2> Numerot: </h2>
          {this.state.persons.map(name =>
            <ul key={name.id}>{name.name} {name.number}</ul>)}
        </div>
      </div>
    )
  }
}

export default App


