const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const MostrarFecha = () =>{
  const now = new Date()
  console.log(now)
  return (
    <div>
      <p>It is {now.toString()}</p>
    </div>
  )
}

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
const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      {/* <Hello name='George' /> */}
      <Hello name='Daisy' age={26 + 10} />
      <Hello name={name} age={age} />
      <MostrarFecha/>
      <Suma/>
    </div>
  )
}
export default App