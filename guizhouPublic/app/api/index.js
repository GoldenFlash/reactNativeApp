/**
 * api
 * @author 王伟
 *time:2018-10-2
 */

import request from "../common/request";
function faceBook(){
    let data = {}
    return request("https://facebook.github.io/react-native/movies.json",data,"GET")
}
export default{
    faceBook
}