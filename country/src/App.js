import React from 'react'
import axios from 'axios'
import PrintCountries from './components/PrintCountries'
import SearchCountries from './components/SearchCountries'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      findValue: '',
      selectedCountry: ''
    }
  }

  handleFindChange = (event) => {
    this.setState({ findValue: event.target.value })
    this.setState({ selectedCountry: "" })
  }

  handleClickedCountry = (countryName) => {
    console.log('countryname', countryName)
    this.setState({ selectedCountry: countryName })
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  render() {
    console.log(this.state.selectedCountry.length)

    return (
      <div>
        <SearchCountries
          combHandleFindSearch={this.handleFindChange}
          compfindValue={this.state.findValue}
        />

        <PrintCountries
          combCountries={this.state.countries}
          combFindValue={this.state.findValue}
          combSelectedCountry={this.state.selectedCountry}
          combHandleClick={this.handleClickedCountry} />
      </div >
    )
  }
}
export default App;

