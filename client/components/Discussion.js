import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleDiscussion } from '../store/singleDiscussion';


class Discussion extends React.Component{
  componentDidMount () {
    try {
      this.props.loadSingleDiscussion(this.props.match.params.discussionId)
    }
    catch (error) {
      console.error(error)
    }
  }
      render(){
        const discussion = this.props.discussion || [];
        console.log(this.props.discussion)
        return (
          <div>
              <h2>{discussion.topic}</h2>
          </div>
      );
    }
}


const mapStateToProps = (state) => {
  return {
    discussion: state.singleDisReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDiscussion: (id) => dispatch(fetchSingleDiscussion(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discussion)
// export default (Discussion)
