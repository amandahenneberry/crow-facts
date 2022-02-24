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

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path='/' component={UserHome} />
            <Route path='/discussions' component={Discussion} />
            <Route path='/allFacts' component={AllFacts} />
            <Route path='/addFact' component={AddFact} />

            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={ GuestHome } />
            {/* <Route path='/allFacts' component={AllFacts} /> */}
            <Route path='/discussions' component={Discussion} />
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
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
