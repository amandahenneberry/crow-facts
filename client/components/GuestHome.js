import axios from 'axios'
import React from 'react'
import {Howl} from 'howler'
import { Link } from 'react-router-dom'
// import {connect} from 'react-redux'
// import { fetchFacts } from '../store/facts'
// https://algorithmic-8ball.neocities.org/crow_caw.mp3

const audioClip = {
  sound: 'https://algorithmic-8ball.neocities.org/crow_caw.mp3', label: 'CAW CAW'
}


class GuestHome extends React.Component{
  constructor(){
    super()
    this.state = {
      facts: [],
      currentFact: {fact:'<<'},
      sound: false,
      img: "./img/crow_button.png",
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleMouseIn(){
    this.setState.hover = true
  }

  async componentDidMount () {
    const {data} = await axios.get('/api/facts')
    this.setState({
      facts: data,
    });
  }

  soundPlay(src){
    const sound = new Howl({
      src,
      html5: true
    })
    sound.play();
  }
  handleClick(){
    this.setState({clicked: true})
    const index = Math.floor(Math.random()* this.state.facts.length);
    this.setState.sound = true;
    this.setState({currentFact: this.state.facts[index]});
    this.soundPlay(audioClip.sound);
    // console.log('source??', this.state.facts[index].source);
    console.log('CURR FACT:', this.state.currentFact);
  }

  alert(){
    //if (!user), will alert when 'DISCUSS!' link is clicked.
    this.alert('You must be logged in to enter discussions!')
    //link: login OR sign-up
  }

  render(){

    return (
      <div id='app'>
        <br></br>
        <br></br> 
        <br></br>
        <br></br>
          <div class=".flex-parent-element space-between">
          <div class="flex-child-element">
          <button className="crow-button" type="button" onClick={() => this.handleClick()}><img src={this.state.img} 
          onMouseEnter={()=>{
            this.setState({img:'/img/crow_b_2.png'})
          }} 
          onMouseOut={()=>{
            this.setState({
              img: '/img/crow_button.png'
            })
          }} width="250"></img></button>
          </div>
          <div class="flex-child-element">
            {this.state.clicked === true ? 
            <div className='fact'><h1>{this.state.currentFact.fact}</h1>
            <h4>source: <a href={this.state.currentFact.source} target="_blank">{this.state.currentFact.source}</a></h4>
            <h2>click the crow for a new fact!</h2>
          <h3>To join discussions, please <strong><em><a href='/login' target="_blank">login</a></em></strong> or <strong><em><a href='/signup' target="_blank">sign-up</a>!</em></strong></h3>

          </div>
          :
            <div className='fact'>
              <h1>{this.state.currentFact.fact}</h1>
              <h2>click the crow.</h2>
            </div>
          }
          </div>
          </div>
      </div>
    )
  }
}

// export default connect(mapState)(UserHome)

// const mapState = (state) => {
//   return {
//     facts: state.factsReducer
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     getFacts: () => dispatch(fetchFacts())
//   };
// };

// export default connect(mapState, mapDispatch)(GuestHome)
export default GuestHome