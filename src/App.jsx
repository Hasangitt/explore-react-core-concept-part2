
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'


function App() {

  function handleClick1(){
    alert('clicked By Button-1')
  }

  const handleClick2 = () => {
    alert('clicked By Button-2')
  }
  
  const addToSix = (num) => {
    alert(num + 4);
  }


  return (
    <>
      <h1>React Core Concept Exploreing</h1>

      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <div className= 'addCss'>
      <button onClick={handleClick1}>Click Me-1</button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button onClick={() => {alert('clicked by button-3')}}>Click Me-3</button>
      <button onClick={() => {addToSix(6)}}>Click Me-4</button> 
      </div>
    </>
  )
}

export default App
