/**
 * 数据缓存
 * @author 王伟
 *time:2018-10-2
 */
import { AsyncStorage } from "react-native"
var postfix = '_deadtime';

function getItem(key){
    AsyncStorage.getItem(key,(res)=>{
        return res
    })
}

_retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
}

function set(key, value, time) {
    // console.log(key);
    AsyncStorage.setItem(key, value)
    var seconds = parseInt(time);
    if (seconds > 0) {
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000 + seconds;
        // console.log(timestamp);
        AsyncStorage.setItem(key + postfix, timestamp + "")
    } else {
        AsyncStorage.removeItem(key + postfix)
    }
}

function get(key, def) {
    var deadtime = parseInt(getItem(key + postfix))
    if (deadtime) {
        if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
            if (def) { return def; } else { return; }
        }
    }
    var res = getItem(key);
    if (res) {
        return res;
    } else {
        return def;
    }
}

function remove(key) {
    AsyncStorage.removeItem(key);
    AsyncStorage.removeItem(key + postfix);
}

function clear() {
    wx.clearStorageSync();
}

module.exports = {
    set: set,
    get: get,
    remove: remove,
    clear: clear,
}
