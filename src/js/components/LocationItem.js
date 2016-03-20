import React, {PropTypes} from 'react';

export default class LocationItem extends React.Component {
  render() {
    const { location } = this.props
    const name = location.name
    const description = location.description
    return (
      <li>
        <h3 className="location-name">{name}</h3>
        <p className="location-desc">{description}</p>
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