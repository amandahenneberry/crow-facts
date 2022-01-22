import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */


class GuestHome extends React.Component{
  constructor(){
    super()
    this.state = {
      facts: ['fact 1', 'fact 2', 'fact 3', 'fact 4', 'fact 5', 'fact 6', 'fact 7', 'fact 8', 'fact 9', 'fact 10'],
      currentFact: 'click for \nCAW A\n facts',
      sound: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    // const index = Math.floor(Math.random()* this.state.facts.length);
    // this.setState({currentFact: this.state.facts[index]})

    // const index = Math.floor(Math.random()* this.state.facts.length);
    // this.setState({currentFact: this.state.facts.filter(function(fact){
    //   return fact !== [index]
    // })})

    const index = Math.floor(Math.random()* this.state.facts.length);
    this.setState.sound = true;
    this.setState({currentFact: this.state.facts[index]});
  }

  render(){
    return (
      <div>
        <h3>Welcome CAW CcccAW</h3>
        <div>
          <h2>{this.state.currentFact}</h2>
          <button type="button" onClick={() => this.handleClick()}>CLICK ME</button>

        </div>
      </div>
    )
  }
}
//   const {username} = props

  

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     username: state.auth.username
//   }
// }

// export default connect(mapState)(UserHome)
export default (GuestHome)