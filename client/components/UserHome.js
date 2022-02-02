import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Howl} from 'howler'
import { render } from 'enzyme'
import { Link } from 'react-router-dom'
// import { fetchDis } from '../store/discussions'
const audioClip = {
  sound: 'https://algorithmic-8ball.neocities.org/crow_caw.mp3', label: 'CAW CAW'
}

class UserHome extends React.Component{
  constructor(){
    super()
    this.state = {
      facts: [],
      currentFact: {},
      discussions: [],
      currentDis: {},
      sound: false,
      img: "./img/black-crow.png",
      // discussLink:'',
      clicked: false,
      response: "",
      clickedText: 'click the crow for a fact!'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleMouseIn(){
    this.setState.hover = true
  }

  async componentDidMount () {
    try{ 
      const {data} = await axios.get('/api/discussions')
    this.setState({
      discussions: data
    }) 
  }catch(err){
    console.log('error getting discussions')
  }
  try{

    const {data} = await axios.get('/api/facts')
    this.setState({
      facts: data
    });
    console.log('STATE', this.state)
  }catch(err){
    console.log('error getting facts')
  }

   
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
    this.setState({currentDis: this.state.discussions[index]});
    this.soundPlay(audioClip.sound);
    // this.setState.discussLink = `/discussions`
    // this.setState({discussions: this.state.discussions[index]})
    console.log('source??', this.state.facts[index].source);
    this.setState.clicked = true;
    this.setState.response = 'DISCUSS!!'
    this.setState.clickedText = ''
  }
  

  render() {
    const username = this.props.username;
    return (
      <div id='main'>       
       <h3>Welcome back {username.toUpperCase()}!</h3>

        <div className='column container'>
        <div id='header'>
        <div>
        <button className="crow-button" type="button" onClick={() => this.handleClick()}><img src={this.state.img} 
          onMouseEnter={()=>{
            this.setState({img:'/img/black-crow-hover.png'})
          }} 
          onMouseOut={()=>{
            this.setState({
              img: '/img/black-crow.png'
            })
          }} width="250"></img></button>
          <div>
            <div className ='fact'> <h1>{this.state.currentFact.fact}</h1>
            <h5><a href={this.state.currentFact.source} target="_blank">{this.state.currentFact.source}</a></h5>
            <h3>{this.state.clickedText}</h3>
            <p><Link to={'./discussions'}>Discuss!</Link></p>
          {/* <h6>To join discussions, please <strong><em><a href='/login' target="_blank">login</a></em></strong> or <strong><em><a href='/signup' target="_blank">sign-up</a>!</em></strong></h6> */}
          </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
  
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    discussions: state.discussions
  }
}

// const mapDispatch = dispatch =>{
//   return{
//     getDis: () =>dispatch(fetchDis())
//   }
// }

export default connect(mapState)(UserHome)
