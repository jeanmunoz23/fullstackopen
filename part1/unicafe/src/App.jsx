import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text} </td>
    <td>{props.value / props.all} {props.optional}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <tbody>
        <tr>
          <td>
            No Feedback Given
          </td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody>
      <StatisticLine text="Good" value ={props.good} all={1}/>
      <StatisticLine text="Neutral" value ={props.neutral} all={1}/>
      <StatisticLine text="Bad" value ={props.bad} all={1}/>
      <StatisticLine text="All" value ={props.all} all={1}/>
      <StatisticLine text="Average Score" value ={props.good - props.bad} all={props.all}/>
      <StatisticLine text="Positive Feedback" value ={props.good * 100} all={props.all} optional='%'/>
    </tbody>
  )
}

const App = () => {
  const title = "Give Feedback"
  const stats = "Statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad

  return (
    <div>
      <h1>{title}</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <h1>{stats}</h1>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      </table>
    </div>
  )
}
export default App
