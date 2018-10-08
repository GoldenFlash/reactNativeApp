/**
 * fetch请求
 * @author 王伟
 *time:2018-10-2
 */
import cache from "../util/cache";
import config from '../config/config'

function objToString(obj) {
    let arr = []
    for (let item in obj) {
        let str = `${item}=${obj[item]}`
        arr.push(str)
    }
    return arr.join("&")
}

let request = function (url,data={},method="GET",key,time){
    return new Promise((resolve,reject)=>{
        let requestObj = {};
        let dataStr;
        if (method === "GET") {
            dataStr = objToString(data)
            url = url + "?" + dataStr
            requestObj = {
                method: method,
                headers: config.requestHeader
            }
        } else {
            if (config.requestHeader["Content-Type"] === "application/json") {
                dataStr = JSON.stringify(data)
            } else {
                dataStr = objToString(data)
            }
            requestObj = {
                method: method,
                headers: config.requestHeader,
                body: dataStr
            }
        }
        if(key&&time){
            cache.get(key).then((storage) => {
                if (storage) {
                    resolve(storage)
                } else {
                    fetch(url, requestObj).then((res) => {
                      return res.json()
                    }).then((value)=>{
                        cache.set(key, value, time)
                        resolve(value)
                    })
                }
            })
        }else{
            fetch(url, requestObj).then((res) => {
                return res.json()
            }).then((value)=>{
                resolve(value)
            })
        }
        
    })
   
   
}
export default request