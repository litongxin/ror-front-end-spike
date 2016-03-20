import React, {PropTypes} from 'react';

export default class LocationItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleNameClick = this.handleNameClick.bind(this)
  }

  handleNameClick() {
    this.props.onChange(this.props.location.name)
  }

  render() {
    const { location } = this.props
    return (
      <li>
        <button onClick={this.handleNameClick} className="location-name">{location.name}</button>
        <p className="location-desc">{location.description}</p>
      </li>
    );
  }
}

LocationItem.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}