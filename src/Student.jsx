import React from 'react'

const Student = ({name,age,course,city}) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
        <p>City: {city}</p>
    </div>
  )
}

export default Student