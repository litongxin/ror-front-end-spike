import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        This is app container!
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App)
