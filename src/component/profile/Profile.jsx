import React from 'react'
import './style.css'

const Profile = () => {
    const name = 'Madhav';
    const age = 32;
    const country = 'India';
  return (
    <div className='card'>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
    </div>
  )
}

export default Profile