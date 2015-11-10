import React from 'react-native';

var {
  ListView,
  Text,
  View,
} = React;

import TermItemView from './TermItemView.js';

export default class TermListView extends React.Component {

  constructor(props) {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.data),
      layout: {
        width: 100
      }
    };
  }

  onLayout(event) {
    this.setState({
      layout: event.nativeEvent.layout
    })
  }

  render() {
    return (
      <ListView
        style={{ flex: 1, flexDirection: 'column' }}
        onLayout={ this.onLayout.bind(this) }
        dataSource={ this.state.dataSource }
        renderRow={ (rowData) => <TermItemView term={ rowData } size={ this.state.layout.width } /> }
      />
    );
  }

}