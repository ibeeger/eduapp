/*
 * @Author: ibeeger
 * @Date:   2016-12-28 19:01:10
 * @Last Modified by:   willclass
 * @Last Modified time: 2016-12-30 09:59:21
 */

'use strict';

import {
	StyleSheet,
	Dimensions
} from 'react-native';

const styles = StyleSheet.create({
	main: {
		flex: 1
	},
	header: {
		height:60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#18bbf2',
		flexDirection: 'row'
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 18,
		textAlign: 'center',
		color:"#ffffff"
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	titleBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		height:60,
		width:80,
		backgroundColor:"rgb(24,189,255)",
	},
	title: {
		flex: 1,
		height:60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:"rgb(24,189,255)",
	},
	list: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	listtext: {
		justifyContent: 'flex-start',
		// flexDirection: 'row',
		flexWrap: 'wrap',
	},
	itemline:{
		width: Dimensions.get("window").width,
		height:70,
	},
	item: {
		width: 100,
		height: 100,
		margin: 10
	},
	text:{
		fontSize:18
	},
	message:{
		justifyContent: 'center',
		alignItems: 'center',
		flex:1
	},
	msgtext:{
		fontSize:16,
		color:"#555555"
	},
	tips:{
		fontSize:14,
		color:"#999999"
	},
	cols: {
		
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft:15,
		paddingRight:15,
		height:70,
		borderBottomWidth:1,
		backgroundColor:"#ffffff",
		borderBottomColor:"#cccccc"
	},
	row: {
		backgroundColor: 'rgb(24,189,255)',
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		height: 100
	}
})


export default styles