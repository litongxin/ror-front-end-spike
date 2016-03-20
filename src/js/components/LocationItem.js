import React, {PropTypes} from 'react';

export default class LocationItem extends React.Component {
  render() {
    const { location } = this.props
    return (
      <li>
        <h3 className="location-name">{location.name}</h3>
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