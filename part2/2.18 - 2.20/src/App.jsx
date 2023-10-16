import { useState, useEffect } from 'react'
import CountriesList from './components/CountriesList'
import CountryInfo from './components/CountryInfo'
import CountryService from './services/CountryService'

const App = () => {
const [country, setCountry] = useState('')
const [allCountries, setAllCountries] = useState([])
const [filteredCountries, setFilteredCountries] = useState([])
const [selectedCountry, setSelectedCountry] = useState(null)
const [status, setStatus] = useState('')


useEffect(() => {
  CountryService.fetchAllCountries()
  .then(data => setAllCountries(data))
  .catch(err => console.log(err))
}, [])

const handleCountryInput = e => {
  const countryInput = e.target.value
  setCountry(countryInput)
  handleFilterCountries(countryInput)
}

const handleShowCountry = (country) => {
  CountryService.fetchWeatherdata(country)
    .then(res => setSelectedCountry({...country, weather: res}))
    .catch(err => {
      console.log(err)
      setSelectedCountry({...country, weather: null})
    })
}

const handleFilterCountries = (countryInput) => {
  const filterArr = allCountries.filter(country => country.name.common.toLowerCase().includes(countryInput))
  if(countryInput === '') {
    setStatus('')
    setFilteredCountries([])
    return
  }
  if(filterArr.length > 10) {
    setStatus('Too many matches, specify another filter')
    setFilteredCountries([])
    return
  }
  if(filterArr.length === 0) {
    setStatus('No matches found')
    setFilteredCountries([])
    return
  }
  if(filterArr.length > 1) {
    setStatus('')
    setFilteredCountries(filterArr)
    return
  }
  if(filterArr.length === 1) {
    setFilteredCountries([filterArr[0]])
  }
}

  return (
    <div>
      <div>
        {allCountries.length === 0
          ? <p>fetching countries....</p>
          : <>find countries <input onChange={handleCountryInput} value={country}/></>
        }
      </div>
      <p>{status}</p>
      {filteredCountries.length !== 1 
        && <CountriesList filteredCountries={filteredCountries} handleShowCountry={handleShowCountry} />
      }
      {selectedCountry && <CountryInfo country={selectedCountry} />}
    </div>
  )
}

export default App

// ? <CountryInfo country={filteredCountries[0]} /> 