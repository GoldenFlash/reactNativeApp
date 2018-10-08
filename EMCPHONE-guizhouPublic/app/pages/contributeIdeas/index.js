/**
 * 献计献策
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
    TouchableHighlight
} from 'react-native';

import px2dp from "../../util/px2dp";
import layout from "../../util/mixin";
import gStyle from "../../gStyle";
export default class homenew extends Component {
    constructor(props) {
        super(props);
    }
    goDetail() {
        this.props.navigation.navigate("latestAction")
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>latestAction</Text>
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
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: '#F5FCFF',
        ...layout.padding(0, 10)
    },
    item: {
        width: px2dp(110),
        height: px2dp(60),
        borderColor: "red",
        ...layout.margin(10, 0),
        ...layout.border("solid", "black", 1),
        alignItems: "center",
        justifyContent: "center",

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