/**
 * fetch请求
 * @author 王伟
 *time:2018-10-2
 */
import cache from "../util/cache";
import config from '../config/config'


function setStorage(key,value,time){
    if(key && time){
        cache.set(key, value, time)
    }
}

function objToString(obj) {
    let arr = []
    for (let item in obj) {
        let str = `${item}=${obj[item]}`
        arr.push(str)
    }
    return arr.join("&")
}

let request = function (url,data={},method="GET",key,time){
    let requestObj = {};
    let dataStr;
    if(method==="GET"){
        dataStr = objToString(data)
        var url = url + "?" + dataStr
        requestObj = {
            method: method,
            headers: config.requestHeader
        }
    }else{
        if (config.requestHeader["Content-Type"] === "application/json"){
            dataStr = JSON.stringify(data)
        }else{
            dataStr = objToString(data)
        }
        requestObj = {
            method: method,
            headers: config.requestHeader,
            body: dataStr
        }
    }

    var storage = cache.get(key)
    if(storage){
        return new Promise((resolve,reject)=>{
            resolve(storage)
        })
    }else{
        return fetch(url, requestObj).then((res) => {
            var value = res.json()
            setStorage(key, value, time)
            return res.json()
        })
    }
   
}
export default request