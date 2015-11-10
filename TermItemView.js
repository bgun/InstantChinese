import React from 'react-native';

var {
  ListView,
  Text,
  View,
} = React;

export default class TermItemView extends React.Component {

  render() {
    return (
      <View>
        <Text>{ this.props.term }</Text>
      </View>
    );
  }

}
TermItemView.PropTypes = {
};