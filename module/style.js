/*
 * @Author: ibeeger
 * @Date:   2016-12-28 19:01:10
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-12-29 14:48:21
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
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#18bbf2',
		flexDirection: 'row'
	},
	container: {
		flex: 9,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	titleBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	title: {
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	list:{
	    justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
	},
	row: {
		backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
	}
})


export default styles