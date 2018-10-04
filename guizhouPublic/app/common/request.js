function objToString(obj, arr = [], idx = 0) {
    for (let item in obj) {
        arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
}

let request = function (url,data={},method="GET"){
    let requestObj = {}
    let dataStr = objToString(data)
    if(method==="GET"){
        var url = url + "?" + dataStr
        requestObj = {
            method: method,
            headers: {
                // Accept: "application/json",
                // "Content-Type": "application/json"
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    }else{
        requestObj = {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: dataStr
        }
    }
    
    fetch(url,requestObj).then((res)=>{
        res.json()
    }).then((resJson=>{
        
    }))
}