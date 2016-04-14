import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadLocation } from '../../homepage/action'
import LocationItem from '../../core/view/LocationItem'

class LocationPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { location, name } = this.props

    if (!location) {
      return <h1><i>Loading {name}’s detail...</i></h1>
    }

    return (
      <LocationItem key={name} location={location} onChange={this.handleChange}/>
    )
  }
}

LocationPage.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  const { name } = ownProps.params
  const {
    entities: { locations }
    } = state

  return {
    name,
    location: locations[name]
  }
}

export default connect(mapStateToProps, {
  loadLocation
})(LocationPage)
