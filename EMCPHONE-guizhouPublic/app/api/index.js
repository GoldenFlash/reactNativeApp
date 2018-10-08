/**
 * api
 * @author 王伟
 *time:2018-10-2
 */

import request from "../common/request";
function faceBook(){
    let data = {}
    var key= "faceBook"
    var time = 60
    return request("https://facebook.github.io/react-native/movies.json",data,"GET",key,time)
}
export default{
    faceBook
}