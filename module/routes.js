/*
* @Author: ibeeger
* @Date:   2016-12-28 14:57:50
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-12-29 13:55:41
*/

'use strict';
import React from 'react';
/*
	route = {
		id: class,
		component: component,
		params : params
	}
 */
import Index from './index.js'
import Error from './PageError.js'
import List from './PageList.js'
import Detail from './PageDetail.js'


const RouteMap = {
    'homepage': {index: 0, component: Index, params: {}},
    'list': {index: 1, component: List, params: {}},
    'detail': {index: 2, component: Detail, params: {}}
};




class Route {
	static getRoutePage(route, navigator){
		let id = route.id,
            params = route.params,
            routeObj = RouteMap[id],
            Component;
        if (routeObj) {
            Component = routeObj.component;
            Object.assign(params, routeObj.params);
        } else {
            Component = Error;
            params = {message: '当前页面没有找到：' + id};
        }
        return <Component navigator={navigator} {...params} />;
	}
}


export default Route;