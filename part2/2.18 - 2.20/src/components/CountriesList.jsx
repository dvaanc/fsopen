const CountriesList = ({ filteredCountries, handleShowCountry }) => {
  return (
    <ul>
      {filteredCountries.map((country, i) => {
          return (
            <li key={i}>
              {country.name.common}
              <button onClick={() => handleShowCountry(country)}>show</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CountriesList