import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class GuestHome extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       fact: ['fact 1', 'fact 2', 'fact 3'],
//       currentFact: 'click for \nCAW A\n facts'
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   componentDidMount() {
//     // document.addEventListener("click", this.handleClick) -> gives an answer whenever the user clicks
//     document.addEventListener("keydown", this.handleKeyDown)
// }

  render(){
    return (
      <div>
        <h3>Welcome CAW CcccAW</h3>
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