import React from 'react';
import AddNamesAndNumbers from './components/AddNamesAndNumbers'
//DOCUMENTED OUT BECAUSE SAME FUNCTIONALITY UNITED IN SearchPhoneBook
import PrintNamesAndNumbers from './components/PrintNamesAndNumbers'
import SearchPhoneBook from './components/SearchPhoneBook'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Martti Tienari', number: '040-123456', id: 2 },
        { name: 'Arto Järvinen', number: '040-123456', id: 3 },
        { name: 'Lea Kutvonen', number: '040-123456', id: 4 }
      ],
      newName: '',
      newNumber: '',
      findValue: ''
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFindChange = (event) => {
    console.log(event.target.value)
    this.setState({ findValue: event.target.value })
  }

  addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length + 1,
    }

    const notes = this.state.persons.concat(noteObject)
    const result = notes.find(fruit => fruit.name === noteObject.name);

    if (result.id < notes.length) {
      window.alert("value is used");
    } else {
      this.setState({
        persons: notes,
        newName: '',
        newNumber: '',
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <SearchPhoneBook
          addNote={this.addNote}
          handleFindSearch={this.handleFindChange}
          //THIS.STATE --> VARIABLES
          persons={this.state.persons}
          findValue={this.state.findValue}
        />
        <h2>Lisää uusi</h2>
        <AddNamesAndNumbers
          addNote={this.addNote}
          handleNumberChange={this.handleNumberChange}
          handleNameChange={this.handleNameChange}
          //THIS.STATE --> VARIABLES
          newNumber={this.state.newNumber}
          newName={this.state.newName} />
        <h2>Numerot</h2>
        <PrintNamesAndNumbers
          addNote={this.addNote}
          handleFindSearch={this.handleFindChange}
          //THIS.STATE --> VARIABLES
          persons={this.state.persons}
          findValue={this.state.findValue}
        />

      </div>
    )
  }
}

export default App


