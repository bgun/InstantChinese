import React  from 'react-native';
import Swiper from 'react-native-swiper';

var {
  Dimensions,
  ListView,
  Text,
  View,
} = React;

var {
  width,
  height
} = Dimensions.get('window');

import TermItemView from './TermItemView.js';


export default class TermListView extends React.Component {

  render() {
    let items = this.props.data.map(i => (
      <TermItemView term={ i } width={ width } height={ height } />
    ));
    return (
      <Swiper>
        { items }
      </Swiper>
    );
  }

}