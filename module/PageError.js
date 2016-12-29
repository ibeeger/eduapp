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
  View
} from 'react-native';


class Error extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return(
				<View>
					<Text>{this.props.message}</Text>
				</View>
			)
	}

}


export default Error;