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
import Util from './config.js'



class Index extends Component {

constructor(props) {
  super(props);
  this.props = props;
  let _this = this;
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
      load:false
    };

    Util.fetchData({}).then(function(data) {
      console.log(data)
    _this.setState({
      load:true,
      dataSource: ds.cloneWithRows(data.data[0]["types"])
    });
  })

  this._renderRow = this._renderRow.bind(this);
  this._pressRow = this._pressRow.bind(this);
}



renderList(){
   return (<ListView  contentContainerStyle={styles.list}
                  initialListSize={2}
                  pageSize={5}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
                />)
}

renderMsg(){
  return (
   <View style={styles.message}>
                  <Text style={styles.msgtext}>数据加载中...</Text>
                </View>
  )
}

  _renderRow(item,s,rowID){
    
    let subjectname = item.name;
    return (  
      <View style={styles.item}>
      <TouchableHighlight onPress={this._pressRow.bind(null,item.url,subjectname)}>
          <View  style={styles.row}>
            <Text style={styles.text}>
               {subjectname}
            </Text>
          </View>
      </TouchableHighlight>
      </View>
    );
  }

  _pressRow(url,title) {
    this.props.navigator.push({id:"list",index:0,params:{title:title,url:url}})
  }


  render() {
     let navigator = this.props.navigator;
     let show = this.renderMsg();
     if (this.state.load) {
            show = this.renderList();
        }
        return (
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.welcome} numberOfLines={1}>
               {this.props.title} 
            </Text>
          </View>
          <View style={styles.container}>
              {show}
          </View>
        </View>
      )
  }
}


export default Index;
