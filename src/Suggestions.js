import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.name}>
       {r.link}

    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
