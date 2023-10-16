
const CountryInfo = ({ country }) => {
  console.log(country)
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>
        <p>
          Capital/s:&nbsp; 
          {!('capital' in country) && 'N/A'}
          {'capital' in country
            && country.capital
              .map((capital, i) => <span key={i}>{capital}</span>)
              .reduce((prev, curr) => [prev, ', ', curr])
          } 
        </p>
        <p>Area: {country.area}</p>
      </div>
      <h4>Languages:</h4>
      <ul>
        {Object
          .entries(country.languages)
          .map(([key, val], i) => <li key={i}>{val}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      {('capital' in country) 
        ? <h2>Weather in {country.capital[0]}</h2>
        : <h2>Weather in {country.common.name}</h2>
      }
      <p>{country.weather.main.temp}&#8451;</p>
      <p>Wind: {country.wind.speed}m/s</p>
    </div>
  )
}

export default CountryInfo