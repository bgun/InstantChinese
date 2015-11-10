import React from 'react-native';

var {
  Image,
  ListView,
  Text,
  View,
} = React;

export default class TermItemView extends React.Component {

  render() {

    let size = this.props.size;

    return (
      <View style={{ backgroundColor: '#000000', flex: 1, height: size }}>
        <Image source={{ uri: this.props.term.image_url }} resizeMode='cover' style={{ position: 'absolute', width: size, height: size }} />
        <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', flex: 1, flexDireciton: 'column', width: size, height: size, position: 'absolute' }}>
          <Text style={{ alignItems: 'center', color: '#FFFFFF', fontSize: 40, shadowColor: '#000000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 5 }}>{ this.props.term.term[0] }</Text>
          <Text style={{ alignItems: 'center', color: '#FFFFFF', fontSize: 30 }}>{ this.props.term.term[1] }</Text>
        </View>
      </View>
    );
  }

}
TermItemView.PropTypes = {
};