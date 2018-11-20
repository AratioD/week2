import React from 'react'
import axios from 'axios'
import PrintCountries from './components/PrintCountries'
import SearchPhoneBook from './components/SearchPhoneBook'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [
        // {
        //   name: 'austria',
        //   capital: 'Vienna',
        //   population: '865843',
        //   id: 1,
        // },
        // {
        //   name: 'USA',
        //   capital: 'Washington',
        //   population: '350000000',
        //   id: 2,
        // },
      ],
      findValue: ''

    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }

  handleFindChange = (event) => {
    console.log(event.target.value)
    this.setState({ findValue: event.target.value })
  }

  render() {
    return (
      <div>
        <SearchPhoneBook
          handleFindSearch={this.handleFindChange}
          compfindValue={this.state.findValue}
        />   
        <PrintCountries
        combCountries={this.state.countries}
        combFindValue={this.state.findValue}
        />
      </div>
    )
  }
}

export default App;
