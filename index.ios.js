/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;

var Main = require('./main.js');
var styles = require('./styles.js');

var InstantChinese = React.createClass({
  render: function() {
    return (
      <View style={ styles.main }>
      </View>
    );
  }
});

AppRegistry.registerComponent('InstantChinese', () => InstantChinese);
