import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { loadLocation } from '../actions'
import LocationItem from '../components/LocationItem'

function loadData(props) {
  props.loadLocation(['name', 'description'])
}


class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }

  renderLocationList() {
    const {children, locations} = this.props
    if (children === null) {
      return (
        Object.keys(locations).map(key => {
          return <LocationItem key={key} location={locations[key]} onChange={this.handleChange}/>
        }))
    }
  }


  render() {
    const {children} = this.props
    return (
      <div>
        {this.renderLocationList()}
        {children}
      </div>
    )
  }

}

App.propTypes = {
  locations: PropTypes.object,
  loadLocation: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  const {
    entities: { locations }
    } = state

  return {
    locations : locations
  }
}

export default connect(mapStateToProps, {
  loadLocation
})(App)
