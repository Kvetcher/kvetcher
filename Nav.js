import { StackNavigator, TabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import FirebaseTest from './FirebaseTest';
import PictureTest from './PictureTest';
import StyleTest from './StyleTest';
// import VideoTest from './VideoTest';
import Location from './Location';
import PostDetail from './StyleTest';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


const Tabs = TabNavigator({
    LocationTest: {
        screen: Location
    },
    FirebaseTest: {
        screen: FirebaseTest
    },
    PictureTest: {
        screen: PictureTest
    },
    StyleTest: {
        screen: StyleTest
    },
});

export default Nav = StackNavigator({
    Tabs: {
        screen: Tabs
    },
    Details: {
      screen: PostDetail,
      navigationOptions: {
        title: 'Details',
      }
    },
});
