import React from 'react'
import {Link} from 'react-router-dom'

const FactsList = (props) => {
  const facts = props.stories

  return (
    <div id='stories' className='column'>
      {
        facts.map(facts => (
          <div className='story' key={facts.id}>
            <Link to={`/facts/${facts.id}`}>
              <h3>{facts.fact}</h3>
            </Link>
            <Link to={`/discussions/${id}`}>
              <p>{facts.fact}</p>
            </Link>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default FactsList