/*
* @Author: ibeeger
* @Date:   2016-12-28 15:05:42
* @Last Modified by:   willclass
* @Last Modified time: 2016-12-30 09:50:55
*/

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Util from './config.js'
import styles from "./style.js"

class Error extends Component {

	constructor(props) {
	  super(props);
		 var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});	
		 let _this = this;
			
		if (props.hasOwnProperty("dataSource") ) {
			this.state = {
				load:true,
				dataSource:ds.cloneWithRows(props["dataSource"])
			}
		}else{
			this.state = {
				load: false
			};
			Util.fetchData({url:props.url}).then(function(data) {
				_this.setState({
					load: true,
					dataSource: ds.cloneWithRows(data)
				});
			})
		}

		
		this._renderRow = this._renderRow.bind(this);
		this._pressRow = this._pressRow.bind(this);
	}

	_pressRow(title,id) {
		let params = {title:title,id:id};
		let page = "list";
		if (arguments.length>2) {
			params["dataSource"] = arguments[2];
		}



		if (!params.hasOwnProperty("dataSource")  || params["dataSource"]==0) {
			page = "detail";
		}

	    this.props.navigator.push({id:page,index:0,params:params})
	  }

	renderMsg(){
		return (
			<View style={styles.message}>
				 <Text style={styles.msgtext}>数据加载中...</Text>
			</View>
			)

	}


	renderList(){
   			return (<ListView  contentContainerStyle={styles.listtext}
                  initialListSize={2}
                  pageSize={5}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
                />)
	}	

	_renderRow(item,s,rowID){
    	let name = item.name;
    	let num = item.subKnowledges.length>0 ? "共"+item.subKnowledges.length+"知识点" : "";
	    return (  
	      <View style={styles.itemline}>
	      <TouchableHighlight onPress={this._pressRow.bind(null,name,item.id,item.subKnowledges)}>
	          <View  style={styles.cols}>
	            <Text style={styles.text}>
	               {name}
	            </Text>
	             <Text style={styles.tips}>
	              {num}
	            </Text>
	          </View>
	      </TouchableHighlight>
	      </View>
	    );
  }

	render(){
		let navigator = this.props.navigator;
		let show = this.renderMsg();
		if (this.state.load) {
			show = this.renderList();
		}
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
						{show}
					</View>
				</View>
			)
	}
}
 
export default Error;