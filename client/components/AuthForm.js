import React, {useState} from 'react'
import {connect} from 'react-redux'
import {authenticateLogin, authenticateSignUp} from '../store'
import { Link } from 'react-router-dom'
/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
       {name === 'signup'? 
      <div><center><h3><Link to='/'>click to go back to facts...</Link> </h3> </center></div>:<b />}
      <center>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="email" />
        </div>
        <br />
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <br />
       
        {name === 'signup'? 
        
         <div>
            
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
      
        <br />
         {selectedImage && (
           <div>
           <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
           <br />
           <button onClick={()=>setSelectedImage(null)}>Remove</button>
           </div>
         )}
         <br />
        
         <br /> 
         <label htmlFor="image">
               <small>Upload a pic!</small>
             </label>
         <input
           type="file"
           name="image"
           onChange={(event) => {
             console.log(event.target.files[0]);
             setSelectedImage(event.target.files[0]);
           }}
         />
         <br />
       </div>:
          <br />
        }
        <br></br>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      </center>
      <div><center><h3><Link to='/'>Cancel</Link> </h3> </center></div>
      <br />
      <br />
    </div>
   

  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatchLogin = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const password = evt.target.password.value
      const email = evt.target.email.value
  
      dispatch(authenticateLogin(email, password, formName))
    }
  }
}

const mapDispatchSignUp = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const password = evt.target.password.value
      const email = evt.target.email.value
      const username = evt.target.username.value
      const image = evt.target.image.value
      dispatch(authenticateSignUp(email, password, username, image, formName))
    }
  }
}


export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignUp)(AuthForm)
