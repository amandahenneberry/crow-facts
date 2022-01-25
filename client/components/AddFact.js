import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

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
    evt.preventDefault()
    window.alert(JSON.stringify(this.state))
    this.setState({
      fact: '',
      sources: ''
    });
    alert(`thank you ${username}!`)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    const username = this.props.username;
    return (
      <div id='container'>
        <div id='navbar'>
          Add a fact about crows!
          <p>Please include a fact AND a source (a link or citation, preferably!) An admin will let you know when your fact has been approved and added to our database!</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='fact'>Fact:</label>
          <input value={this.state.fact} type='text' name='fact' onChange={this.handleChange} />
          <label htmlFor='source'>Source:</label>
          <input value={this.state.source} type='source' name='source' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

// const mapState = state => {
//   return {
//     username: state.auth.username,  }
// }
export default (AddFact)

// export default connect(mapState)(AddFact)
// ReactDOM.render(
//   <AddFact />,
// )