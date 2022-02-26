import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import UserHome from './components/UserHome';
import GuestHome from './components/GuestHome';
import AllFacts from './components/AllFacts';
import AddFact from './components/AddFact';
import Discussion from './components/Discussion';
import {me} from './store'

import List_Dis from './components/List_Dis';
import AllDiscussions from './components/AllDiscussions';

import {fetchFacts} from './store/facts';
import {fetchDis} from './store/discussions'
// import {fetchSingleDiscussion} from './store/singleDiscussion'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.loadFacts();
    this.props.loadDiscussions();
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path='/' component={UserHome} />
            {/* <Route path='/discussions' component={AllDiscussions} /> */}
            <Route path='/allFacts' component={AllFacts} />
            <Route path='/addFact' component={AddFact} />
            <Route exact path='/discussions' component={AllDiscussions} />
            <Route path="/discussions/:discussionId" component={Discussion} />


            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={ GuestHome } />
            {/* <Route path='/allFacts' component={AllFacts} /> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {/* <Route path='/addFact' component={AddFact} /> */}
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    loadFacts: ()=>dispatch(fetchFacts()),
    loadDiscussions: ()=>dispatch(fetchDis())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(mapState, mapDispatch)(Routes)
