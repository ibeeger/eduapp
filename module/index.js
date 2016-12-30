/*
* @Author: ibeeger
* @Date:   2016-12-28 14:03:25
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-12-30 17:48:02
*/

'use strict';
 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView
} from 'react-native';

import styles from "./style.js"

var hashCode = function(str) {
  var hash = parseInt(Math.random()*25);
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};


class Index extends Component {

constructor(props) {
  super(props);
  this.props = props;
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(this._genRows({}))
  };
  this._renderRow = this._renderRow.bind(this);
}
  _renderRow(rowData: string, sectionID: number, rowID: number){
     var rowHash = Math.abs(hashCode(rowData));
     
    return (
      <View style={styles.item}>
      <TouchableHighlight onPress={() => {
           this.props.navigator.push({id:"list",index:0,params:{message:"列表"}})
        }}>
          <View  style={styles.row}>
            <Text style={styles.text}>
               {rowData}
            </Text>
          </View>
      </TouchableHighlight>
      </View>
    );
  }
  componentWillReceiveProps(nextprops){
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.props = nextprops;
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({}))
    };
  }

  _genRows(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 50; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  }

  _pressRow(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  }

  render() {
     let navigator = this.props.navigator;
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.welcome}>
             {this.props.title} 
          </Text>
        </View>
        <View style={styles.container}>
          <ListView  contentContainerStyle={styles.list}
          initialListSize={2}
          pageSize={5}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        </View>
      </View>
    );
  }
}


export default Index;
