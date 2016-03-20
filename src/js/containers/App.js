import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadLocation } from '../actions'
import LocationItem from '../components/LocationItem'

function loadData(props) {
  props.loadLocation("", ['name', 'description'])
}


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    loadData(this.props)
  }


  render() {
    const { locations } = this.props

    return (
      <div>
        {
          Object.keys(locations).map( key => {
            return <LocationItem key={key} location={locations[key]}/>
          })
        }
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
