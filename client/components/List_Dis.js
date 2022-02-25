import React from 'react'
import {Link} from 'react-router-dom'
import { fetchDis } from '../store/discussions'
import {connect} from 'react-redux'

class List_Dis extends React.Component {
  componentDidMount(){
    this.props.getDis();
  }

  render(){
    const discussions = this.props.discussions || [];
    console.log(discussions)
    return (
      <div>
        <h1>DISCUSSION list..</h1>
        {
          discussions.map(discussion => (
            <div key={discussion.id}>
              <h2>{discussion.topic}</h2>

            </div>
          ))
        }
      </div>
    )
  }
  
}

const mapState = (state) => {
  return {
    discussions: state.disReducer
  };
};

const mapDispatch = (dispatch) => {
  return {
    getDis: () => dispatch(fetchDis())
  };
};

export default connect(mapState, mapDispatch)(List_Dis)