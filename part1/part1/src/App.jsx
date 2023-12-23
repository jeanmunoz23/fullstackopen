import { useState } from 'react'
// SALUDANDO Y CALCULANDO FECHA NAC
const Hello = (props) => {
  const hello = (who) => () => {
    console.log('hello', who)
  }
// Desestructuración
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>

      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
      <button onClick={hello('world')}>Console world</button>
      <button onClick={hello('react')}>Console react</button>
    </div>
  )
}
// Mostrando fecha actual
const MostrarFecha = () =>{
  const now = new Date()
  console.log(now)
  return (
    <div>
      <p>It is {now.toString()}</p>
    </div>
  )
}
// suma dos valores
const Suma = () =>{
  const a = 10
  const b = 20
  console.log(a+b)
  return (
    <div>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/jeanmunoz23'>jeanmunoz23</a>
    </div>
  )
}

//lista de amigos con fecha
const Friends = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

// boton accionador
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = props => <div>{props.value}</div>

// funcion que aumenta o incrementa o pone en cero el counter
const Counter = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display value={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const LeftOrRight = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + right)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <p>Total Clicks {total}</p>
    </div>
  )
}
const Thousand = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // imprime el nuevo valor en la consola
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
    )
}
// app principal
const App = () => {

  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      {/* <Hello name='George' /> */}
      <Counter/>
      <LeftOrRight/>
      <Thousand/>
      <Hello name='Daisy' age={26 + 10} />
      <Hello name={name} age={age} />
      <MostrarFecha/>
      <Suma/>
      <Friends/>
      <Footer/>

    </div>
  )
}
export default App