import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

var MainScreen = require('./MainScreen');

var _navigator;
var FirstScreen = React.createClass({
  getInitialState:function(){
    _navigator = this.props.navigator;
    return {}
  },
  render:function () {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress={this.getData}>
          <Text> Get test</Text>
          </TouchableOpacity>
      </View>
    );

  },
  getData:function () {
      _navigator.push({
        name:'home',
        component:'FirstScreen'
      });
  }
})


module.exports = FirstScreen;
