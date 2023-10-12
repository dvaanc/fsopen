/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Display = ({stats}) => {
  let total = stats.good + stats.neutral + stats.bad
  let average = (stats.good + (-(stats.bad))) / total
  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>Total: {total} </p>
      <p>Average: { total === 0 ? 'Please enter results' : average}</p>
      <p>Positive: { total === 0 ? 'Please enter results' : `${(stats.good / total) * 100}%`}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
  }
  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleSetBad = () => {
  setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleSetGood} text='Good'/>
      <Button handleClick={handleSetNeutral} text='Neutral'/>
      <Button handleClick={handleSetBad} text='Bad'/>
      <h1>Statistics</h1>
      <Display stats={{ good, neutral, bad}}/>
    </div>
  )
}

export default App