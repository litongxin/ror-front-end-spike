import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import LocationItem from '../../../src/core/view/LocationItem'

describe('<LocationItem />', () => {
  let locationItem
  beforeEach(() => {
    const location = {
      description: "The largest city and national capital of the Netherlands (Holland).",
      name: "Amsterdam"
    }
    locationItem = shallow(<LocationItem location={location}/>)
  })

  it('should have correct name', () => {
    expect(locationItem.find('.location-name').text()).equals("Amsterdam");
  })

  it('should have correct description', () => {
    expect(locationItem.find('.location-desc').text()).equals("The largest city and national capital of the Netherlands (Holland).");
  })

});
