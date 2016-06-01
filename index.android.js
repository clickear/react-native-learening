/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var MainScreen = require('./MainScreen');
var FirstScreen = require('./FirstScreen');

var _navigator;
class myproject extends Component {
  render(){
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ name: 'first', component: MainScreen }}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.RouteMapper}
      />
    );
  }

  RouteMapper(route, navigator){
    _navigator = navigator;
    debugger;
    if(route.name == 'first'){
        return <FirstScreen navigator={_navigator} route={route} />;
    }else {
        return <MainScreen navigator={_navigator} route={route}/>;
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});

AppRegistry.registerComponent('myproject', () => myproject);
