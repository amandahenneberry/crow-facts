import axios from 'axios'
import React from 'react'
import {Howl} from 'howler'
// https://algorithmic-8ball.neocities.org/crow_caw.mp3

const audioClip = {
  sound: 'https://algorithmic-8ball.neocities.org/crow_caw.mp3', label: 'CAW CAW'
}


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

  soundPlay(src){
    const sound = new Howl({
      src,
      html5: true
    })
    sound.play();
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
    this.soundPlay(audioClip.sound)
  }

  render(){
    return (
      <div>
        <h3>Welcome CAW CcccAW</h3>
        <div>
          <h2>{this.state.currentFact.fact}</h2>
          <button type="button" onClick={() => this.handleClick()}>{audioClip.label}</button>

        </div>
      </div>
    )
  }
}

// export default connect(mapState)(UserHome)
export default (GuestHome)
