import React from 'react'

const Single = ({single}) => {
    console.log(single)
  return (
    <div>
      <li class="collection-header"><h4>{single.name}</h4></li>
      <li class="collection-item">
        <span><strong>Age:</strong> {single.age} </span> 
      </li>
      <li class="collection-item"> 
        <span><strong>Phone:</strong> {single.phone} </span> 
      </li>
      <li class="collection-item"> 
        <span><strong>Email:</strong> {single.email} </span>
      </li>
        <div className="divider"></div>
    </div>
  )
}

export default Single
