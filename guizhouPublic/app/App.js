/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//引入三个界面文件，并设置引入的类
//引入主界面
import HomeScene from '../app/pages/home/Home';
//引入登陆界面
import LoginScene from '../app/pages/loginAndregister/loginScene';
//引入注册界面
import RegisterScene from '../app/pages/loginAndregister/registerScene';
import latestAction from './pages/latestAction/index';
import publicInfo from './pages/publicInfo/index';
import searchInfo from './pages/searchInfo/index';
import contributeIdeas from './pages/contributeIdeas/index';
import weifajubao from './pages/weifajubao/index';
import eventReport from './pages/eventReport/index';
import getInfo from './pages/getInfo/index';
import hudongcanyu from './pages/hudongcanyu/index';
import publicSupervise from './pages/publicSupervise/index';

//注册导航界面
const Navigator = createStackNavigator({
    Login: {
      screen: LoginScene,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          headerTitle: '登陆',  //设置导航栏标题
      }
    },
    Home: {
      screen: HomeScene,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTitle:"首页",  //隐藏导航栏
      }
    },
    Register: {
      screen: RegisterScene,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
          headerTitle: '注册',  //设置导航栏标题
      }
    },
    latestAction:{
        screen: latestAction,
        navigationOptions:{
            headerTitle:"最新动态"
        }
    },
    publicInfo: {
        screen: publicInfo,
        navigationOptions: {
            headerTitle: "公开信息发布"
        }
    },
    searchInfo: {
        screen: searchInfo,
        navigationOptions: {
            headerTitle: "信息查询"
        }
    },
    contributeIdeas: {
        screen: contributeIdeas,
        navigationOptions: {
            headerTitle: "献计献策"
        }
    },
    weifajubao: {
        screen: weifajubao,
        navigationOptions: {
            headerTitle: "违法举报"
        }
    },
    eventReport: {
        screen: eventReport,
        navigationOptions: {
            headerTitle: "提供事件上报"
        }
    },
    getInfo: {
        screen: getInfo,
        navigationOptions: {
            headerTitle: "信息获取"
        }
    },
    hudongcanyu: {
        screen: hudongcanyu,
        navigationOptions: {
            headerTitle: "互动参与"
        }
    },
    publicSupervise: {
        screen: publicSupervise,
        navigationOptions: {
            headerTitle: "公众监督"
        }
    },
    
},
{
    initialRouteName:"Home"
}
);

export default class App extends React.Component {
    render() {
        return <Navigator />;
    }
}