import React from 'react'
import './App.css'
import User from './User'

const App = () => {
 
  return (
    <div className='main'>
      <User name="Madhav" isLoggedIn={true}/>
      <User name="Indhu" isLoggedIn={false} />
    </div>
  )
}

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
}

function Button1({ text }) {
  return (
    <button>{text}</button>
  );
}

export default App