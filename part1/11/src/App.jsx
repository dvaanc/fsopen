/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistics = ({stats}) => {
  let total = stats.good + stats.neutral + stats.bad
  let average = (stats.good + (-(stats.bad))) / total
  let positive = `${(stats.good / total) * 100}%`
  if(total > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={stats.good} />
          <StatisticLine text='neutral' value={stats.neutral} />
          <StatisticLine text='bad' value={stats.bad}/>
          <StatisticLine text='total' value={total}/>
          <StatisticLine text='average' value={average}/>
          <StatisticLine text='positive' value={positive}/>
        </tbody>
      </table>
    )
  }
  return <p>No feedback given</p>
}
const StatisticLine = ({value, text}) => <tr><td>{text}</td><td>{value}</td></tr>


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
      <Statistics stats={{ good, neutral, bad}}/>
    </div>
  )
}

export default App