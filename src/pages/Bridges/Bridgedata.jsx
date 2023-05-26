import React from 'react'
import { Link } from 'react-router-dom'

const Bridgedata = ({ data }) => {
  return (
    <ul className="list-group m-auto">
      {data.map((item, index) => (
        <li key={index} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
          <Link to>
          {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Bridgedata