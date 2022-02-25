import React from 'react';
import {connect} from 'react-redux';
import List_Dis from './List_Dis';


const AllDiscussions = (props) => {
    return <List_Dis discussions={props.discussions} />
  }
  
  const mapStateToProps = (state) => {
    return {
      discussions: state.discussions
    }
  }
  
  export default connect(mapStateToProps)(AllDiscussions)