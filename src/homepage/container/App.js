import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { loadLocation } from '../action'
import LocationItem from '../../core/view/LocationItem'

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

  renderFetchingFlag(){
   const {isFetching} = this.props
   if(isFetching){
     return <h1><i>Loading locations, pls wait...</i></h1>
   } else{
     return <h1><i>isFetching status is false now!</i></h1>
   }
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
      <div className="location-list">
        {this.renderFetchingFlag()}
        {this.renderLocationList()}
        {children}
      </div>
    )
  }

}

App.propTypes = {
  locations: PropTypes.object,
  isFetching: PropTypes.boolean,
  loadLocation: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  const {
    entities: { locations },
    ui : { locationsIsFetching }
    } = state
  return {
    locations: locations,
    isFetching : locationsIsFetching
  }
}

export default connect(mapStateToProps, {
  loadLocation
})(App)
