import React from 'react'

const Single = ({single}) => {
    console.log(single)
  return (
    <div>
    <li>
        <span><strong>Name:</strong> {single.name} </span>
        <span><strong>Age:</strong> {single.age} </span>
        <span><strong>Phone:</strong> {single.phone} </span>
        <span><strong>Email:</strong> {single.email} </span>
    </li>
    </div>
  )
}

export default Single
