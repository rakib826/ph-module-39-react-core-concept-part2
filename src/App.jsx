
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('Button Clicked')
  }
  const handleClick2=()=>{
    alert("Button 2 Clicked")
  }
  const addToFive = (num)=>{
    alert(num+5);
  }
  return (
    <>
      <h2>React core concept</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('Button 3 Clicked')}}>Click 3</button>
      <button onClick={()=>addToFive(3)}>CLick 4</button>
    </>
  )
}

export default App
