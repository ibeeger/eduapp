/*
* @Author: ibeeger
* @Date:   2016-12-28 15:05:42
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-12-28 15:14:16
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
					           navigator.pop()
					       }}>
					       <View style={styles.titleBtn}> 
					       <Text>返回</Text>
					       </View>
					       </TouchableHighlight>
       				</View>
						<View style={styles.title}><Text style={styles.welcome} numberOfLines={1}>{this.props.title}</Text></View>
						<View style={styles.titleBtn}></View>
					</View>
					<View style={styles.container}>
						<View style={styles.message}>
							<Text style={styles.msgtext}>等待开发中</Text>
						</View>
					</View>
				</View>
			)
	}

}


export default Error;