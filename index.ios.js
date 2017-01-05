/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RT from './module/routes.js'
import Index from './module/index.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator
} from 'react-native';

const INITIAL_ROUTE = {
  id:"homepage",
  index:0,
  params:{title:"高中知识点总结"}
};


export default class eduapp extends Component {
  configureScene(route, routeStack){
    return Navigator.SceneConfigs.PushFromRight
  }
    renderScene (route, navigator) {
      this.navigator = navigator;
      return  RT.getRoutePage(route,navigator)
  }
  
  render() {
    return (
         <Navigator
          initialRoute={INITIAL_ROUTE}
          configureScene={this.configureScene}
          renderScene={this.renderScene.bind(this)}
        />
    );
  }
}


AppRegistry.registerComponent('eduapp', () => eduapp);
