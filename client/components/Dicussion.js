import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleDiscussion } from '../store/singleDiscussion';


class Discussion extends React.Component{
  componentDidMount () {
    try {
      this.props.loadSingleDiscussion(this.props.match.params.storyId)
    }
    catch (error) {
      console.error(error)
    }
  }
      render(){
        const discussion = this.props.discussion;
        return (
          <div>
              <h1>Discussion Page Placeholder...</h1>
          </div>
      );
    }
}


const mapStateToProps = (state) => {
  return {
    discussion: state.singleDiscussion
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDiscussion: (id) => dispatch(fetchSingleDiscussion(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discussion)
