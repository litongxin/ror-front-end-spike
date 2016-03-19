import React from 'react';

export default class LocationItem extends React.Component {
  render() {
    return (
      <li>
        <h3 className="location-name">{this.props.location.name}</h3>
        <p className="location-desc">{this.props.location.description}</p>
      </li>
    );
  }
}
