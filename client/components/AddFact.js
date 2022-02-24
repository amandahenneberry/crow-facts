import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import { addFact } from '../store/facts'
import { Link } from 'react-router-dom'

class AddFact extends React.Component {
  constructor () {
    super()
    this.state = {
      fact: '',
      source: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.addFact({...this.state})
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    // const username = this.props.username;
    const { fact, source } = this.state;
    const {handleChange, handleSubmit} = this;
    return (
      <div id='container'>
        <div>
          <h2>Add a fact about crows!</h2>
          <h4>Please include a fact AND a source (a link, URL, or short citation!) </h4>
          <h5>An admin will let you know when your fact has been approved and added to our database!</h5>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='fact'>Fact:</label>
          <input value={fact} type='text' name='fact' onChange={handleChange} />
          <label htmlFor='source'>Source:</label>
          <input value={source} type='source' name='source' onChange={handleChange} />
          <button type='submit'>Submit</button>
          <Link to='/'>Cancel</Link>
        </form>
        </div>
      </div>
    )
  }
}

const mapDispatch = (dispatch, {history}) =>({
  addFact: (fact) =>dispatch(addFact(fact, history))
})

export default connect(null, mapDispatch)(AddFact)
