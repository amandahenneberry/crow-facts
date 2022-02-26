import React,{Component} from 'react';
import { fetchSingleUser, userUpdate } from "../store/user";
import {connect} from 'react-redux';

class UserUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchUser(id)
    }

    componentDidUpdate(prevProps){
        if (prevProps.user.id !== this.props.user.id){
            this.setState({
                email: this.props.user.email || ''
            });
        }
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.updateUser({...this.props.user, ...this.state})
    }

    render(){
        const { email } = this.state;
        const {handleSubmit, handleChange } = this;
    
        return(
            <div>
                <form id='user-update' onSubmit={handleSubmit}>
                    <label htmlFor='email'> Email: </label>
                    <input name='email' onChange={handleChange} value={email} />

                    <button type='submit'>Submit</button>
                    
                </form>
            </div>
        )
    }


}

const mapStateToProps = ({ user }) => ({
    user
  });
  
  const mapDispatchToProps = (dispatch, { history }) => ({
    updateUser: (user) => dispatch(userUpdate(user, history)),
    fetchUser: (id) => dispatch(fetchSingleUser(id)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);