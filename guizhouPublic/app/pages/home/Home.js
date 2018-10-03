/**
 * 首页
 * @author 王伟
 *time:2018-10-2
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import px2dp from "../../util/index";
import layout from "../../util/mixin";
import gStyle from "../../gStyle";

let {width:deviceWidth,height:deviceHeight} = Dimensions.get("window")
export default class homenew extends Component {
    constructor(props){
        super(props);
    }
    goDetail(navigation){
        this.props.navigation.navigate(navigation)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.goDetail.bind(this, "latestAction")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>最新动态</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "publicInfo")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>公开信息发布</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "searchInfo")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>信息查询</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "contributeIdeas")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>献计献策</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "weifajubao")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>违法举报</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "eventReport")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>提供事件上报</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "getInfo")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>信息获取</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "hudongcanyu")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>互动参与</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goDetail.bind(this, "publicSupervise")}>
                    <View style={styles.item}>
                        <Icon name="ios-person" size={30} color="#4F8EF7" />
                        <Text style={gStyle.alignCenter}>公众监督</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

/**
 * 设置界面的布局样式
 * @type {[StyleSheet]}
 */
const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height:deviceHeight,
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        backgroundColor: '#F5FCFF',
        ...layout.padding(0,10)
    },
    item: {
        width: px2dp(110),
        height: px2dp(60),
        borderColor:"red",
        ...layout.margin(10,0),
        ...layout.border("solid","black",1),
        alignItems:"center",
        justifyContent:"center",
        
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});