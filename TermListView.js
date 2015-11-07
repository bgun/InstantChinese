import React from 'react-native';

var {
  ListView,
  Text,
  View,
} = React;

export default class TermListView extends React.Component {

  constructor(props) {
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.data)
    };
  }

  render() {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={
          (rowData) => <Text>{ rowData }</Text>
        }
      />
    );
  }

}