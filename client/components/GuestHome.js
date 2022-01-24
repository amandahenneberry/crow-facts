import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'

// const sfx = {
//   caw: new Howl({
//     src: ['.../public/howler-crow-caw.mp3']
//   })
// }
/**
 * COMPONENT
 */



class GuestHome extends React.Component{
  constructor(){
    super()
    this.state = {
      facts: [],
      currentFact: {},
      sound: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount () {
    const {data} = await axios.get('/api/facts')
    this.setState({
      facts: data
    })
    console.log()
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
          <h2>{this.state.currentFact.fact}</h2>
          <button type="button" onClick={() => this.handleClick()}>CLICK ME</button>

        </div>
      </div>
    )
  }
}

// export default connect(mapState)(UserHome)
export default (GuestHome)
