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

var TermListView = require('./TermListView.js');
var styles = require('./styles.js');

var data = require('./data.json');

class InstantChinese extends React.Component {

  render() {
    return (
      <View style={ styles.main }>
        <TermListView data={ data } />
      </View>
    );
  }

}

AppRegistry.registerComponent('InstantChinese', () => InstantChinese);