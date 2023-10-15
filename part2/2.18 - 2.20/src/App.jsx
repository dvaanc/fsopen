import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
const [country, setCountry] = useState('')
const [allCountries, setAllCountries] = useState([])
const [filteredCountries, setFilteredCountries] = useState([])
const [status, setStatus] = useState('')

// useEffect(() => {
//   console.log('effect run, country is now', country)
https://studies.cs.helsinki.fi/restcountries/api/all
//   // skip if currency is not defined
//   if (country) {
//     console.log('fetching countries...')
//     axios
//       .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
//       .then(response => {
//         console.log(response.data)
//         setCountryData(...response.data)
//       })
//   }
// }, [country])

useEffect(() => {
  console.log('effect run, fetching all countries')
  axios
  .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
  .then(response => {
    setAllCountries(response.data)
  })
}, [])

// useEffect(() => {
//   console.log(allCountries)
// }, [allCountries])

const handleCountryInput = e => {
  const countryInput = e.target.value
  setCountry(countryInput)
  handleFilterCountries(countryInput)

}

const handleFilterCountries = (countryInput) => {
  const filterArr = allCountries.filter(country => country.name.common.toLowerCase().includes(countryInput))
  setFilteredCountries(filterArr)
  if(filterArr.length > 10) setStatus('Too many matches, specify another filter')
}


  return (
    <div>
      <div>
        find countries <input onChange={handleCountryInput} value={country}/>
      </div>
      <p>{status}</p>
      <ul>
        {filteredCountries.map(country => <li key={filteredCountries.indexOf(country)}>{country.name.common}</li>)}
      </ul>
      
      <div>
        debug: {country}
      </div>
    </div>
  )
}

export default App