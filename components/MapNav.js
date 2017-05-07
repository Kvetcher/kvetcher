import React from 'react';
import { StackNavigator } from 'react-navigation';

import Location from '../Location';
import PostDetail from '../StyleTest';

const MapNav = StackNavigator({
  Feed: {
    screen: Location,
    navigationOptions: {
      title: 'map',
    }
  },
  Details: {
    screen: PostDetail,
    navigationOptions: {
      title: 'Details',
    }
  },
});

export default MapNav
