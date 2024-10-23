import { useState } from 'react'
import './App.css'
import './index.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline text-red-500 text-center">
      Hello world!
    </h1>
    <p className='text-5xl font-bold text-blue-300 text-center'>My Name is Nidhi Rajawat</p> 
    <p className='text-4xl font-bold text-pink-200 text-center'>Hii What about you</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias cum incidunt quisquam quas iusto. Impedit id deserunt alias hic voluptatum,
       earum dolor animi tenetur ullam vel aut mollitia amet.</p>
       <p>Rajawat</p>
    </>
  );
}

export default App
