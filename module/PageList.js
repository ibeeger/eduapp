/*
* @Author: ibeeger
* @Date:   2016-12-28 15:05:42
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-12-28 19:54:24
*/

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


import styles from "./style.js"

class Error extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		let navigator = this.props.navigator;
		return(
				<View style={styles.main}>
					<View style={styles.header}>
						<View style={styles.titleBtn}>  
						<TouchableHighlight onPress={() => {
					           navigator.push({id:"homepage",index:0,params:{title:"首页"}})
					       }}><Text>返回</Text></TouchableHighlight>
       				</View>
						<View style={styles.title}><Text style={styles.welcome}>{this.props.message}</Text></View>
						<View style={styles.titleBtn}></View>
					</View>
					<View style={styles.container}><Text>{this.props.message}</Text></View>
				</View>
			)
	}
}
 
export default Error;