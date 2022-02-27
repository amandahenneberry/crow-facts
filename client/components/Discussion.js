import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleDiscussion, addComment } from '../store/singleDiscussion';


class Discussion extends React.Component{
  constructor () {
    super()
    this.state = {
      comment: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount () {
    try {
      this.props.loadSingleDiscussion(this.props.match.params.discussionId)
    }
    catch (error) {
      console.error(error)
    }
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.addComment({...this.state})
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

      render(){
        const discussion = this.props.discussion || [];
        const comments = this.props.discussion.comments || [];
        const { comment } = this.state;
        const {handleChange, handleSubmit} = this;

        // console.log(this.props.discussion)
        return (
          <div>
              <h2>{discussion.topic}</h2>
              <h3>Comments:</h3>
              <ul>
                {comments.map((comment) => {
                  return (
                  <li key={comment.id}>
               
            {/* <p>by {user.username}</p> */}
          </li>
        );
      })}
    </ul>
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='comment'>leave comment:</label>
          <input value={comment} type='text' name='comment' onChange={handleChange} />
          <button type='submit'>Submit</button>
          {/* <Link to='/'>Cancel</Link> */}
        </form>
    </div>
    
  </div>
      );
    }
}


const mapStateToProps = (state) => {
  return {
    discussion: state.singleDisReducer
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    loadSingleDiscussion: (id) => dispatch(fetchSingleDiscussion(id)),
    addComment: (comment) =>dispatch(addComment(comment, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discussion)
// export default (Discussion)
