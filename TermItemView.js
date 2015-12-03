import React  from 'react-native';
import Swiper from 'react-native-swiper';

var {
  Image,
  ListView,
  Text,
  View,
} = React;


export default class TermItemView extends React.Component {

  render() {

    let w = this.props.width;
    let h = this.props.height;

    return (
      <View style={{ backgroundColor: '#000000', flex: 1, flexDirection: 'column' }}>
        <Image source={{ uri: this.props.term.image_url }} resizeMode='cover' style={{ position: 'absolute', width: w, height: h }} />
        <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ alignItems: 'center', color: '#FFFFFF', fontSize: 40, shadowColor: '#000000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 5 }}>{ this.props.term.term[0] }</Text>
          <Text style={{ alignItems: 'center', color: '#FFFFFF', fontSize: 30 }}>{ this.props.term.term[1] }</Text>
        </View>
        <Swiper horizontal={ false } height={ 250 }>
          { this.props.term.usages.map(usage => (
          <View style={{ borderWidth: 1, height: 250, padding: 20 }}>
            <Text style={{ color: '#FF0000', fontSize: 30 }}>{ usage[0] }</Text>
          </View>
          )) }
        </Swiper>
      </View>
    );
  }

}
TermItemView.PropTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
};