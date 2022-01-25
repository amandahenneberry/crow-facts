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
      sound: false,
      img: "./img/black-crow.png"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleMouseIn(){
    this.setState.hover = true
  }

  async componentDidMount () {
    const {data} = await axios.get('/api/facts')
    this.setState({
      facts: data
    });
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
    const index = Math.floor(Math.random()* this.state.facts.length);
    this.setState.sound = true;
    this.setState({currentFact: this.state.facts[index]});
    this.soundPlay(audioClip.sound);
    console.log('source??', this.state.facts[index].source);
    this.setState.clicked = true;
  }

  alert(){
    //if (!user), will alert when 'DISCUSS!' link is clicked.
    this.alert('You must be logged in to enter discussions!')
    //link: login OR sign-up
  }

  render(){
    return (
      <div id='main'>
        <div className='column container'>
        <div id='header'>
          <button className="crow-button" type="button" onClick={() => this.handleClick()}><img src={this.state.img} 
          onMouseEnter={()=>{
            this.setState({img:'/img/black-crow-hover.png'})
          }} 
          onMouseOut={()=>{
            this.setState({
              img: '/img/black-crow.png'
            })
          }} width="250"></img></button>
          <div><h1 id ='fact'><mark>{this.state.currentFact.fact}</mark></h1>
          <h5><a href={this.state.currentFact.source} target="_blank">{this.state.currentFact.source}</a></h5>
          <h3>click the crow for a new fact!</h3>
          <h6>To join discussions, please <strong><em><a href='/login' target="_blank">login</a></em></strong> or <strong><em><a href='/signup' target="_blank">sign-up</a>!</em></strong></h6></div>
          </div>
          </div>
          {/* <span>To join discussions, please <strong><em><a href='/login' target="_blank">login</a></em></strong> or <strong><em><a href='/signup' target="_blank">sign-up</a>!</em></strong></span> */}

      </div>
    )
  }
}

// export default connect(mapState)(UserHome)
export default (GuestHome)
