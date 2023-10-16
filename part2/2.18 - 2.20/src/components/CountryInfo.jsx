
const CountryInfo = ({ country }) => {
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
      <p>Wind: {country.weather.wind.speed}m/s</p>
      <img src={`https://openweathermap.org/img/wn/${country.weather.weather[0].icon}@2x.png`} alt={country.weather.weather[0].description}/>
    </div>
  )
}

export default CountryInfo