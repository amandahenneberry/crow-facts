import React from 'react'
import {connect} from 'react-redux'
import {fetchFacts} from '../store/facts'

class AllFacts extends React.Component{
    componentDidMount(){
        this.props.getFacts();
      }

      
      render() {
        const facts = this.props.facts || [];
        console.log(facts)
        return (
          <div>
              <h1>Facts {console.log('props index?', facts.length)}</h1>
              <div>
                  {facts.map(fact=> (
                      <div key={fact.id}>
                              <h2>{fact.fact}</h2>                      
                      </div>
                  ))}
              </div>
          </div>
      );
    }
    }

const mapState = (state) => {
    return {
      facts: state.factsReducer
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      getFacts: () => dispatch(fetchFacts())
    };
  };

// export default connect(mapState)(UserHome)
export default connect(mapState, mapDispatch)(AllFacts)