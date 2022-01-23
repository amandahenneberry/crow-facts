import React from 'react'
// import axios from 'axios';

export default class AddFact extends React.ComponentComponent {

  constructor(props) {
    super(props)
    this.state = {
       fact: '',
       source: '',
       username: ''
    }
  }


//   onChange = (e) => {
//     this.setState({ 
//       [e.target.name]: e.target.value
//      })
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state)
//     axios.post('http://localhost:8000/', this.state)
//     .then(response => {
//       console.log(response)
//     })
//     .catch(error => {
//       console.log(error)
//     })
  }