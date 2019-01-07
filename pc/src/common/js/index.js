// import md5 from 'js-md5';
// 配置API接口地址
var baseUrlRoot = 'https://jiance.meych.com/';
// var baseUrlRoot = 'http://47.93.156.129:8848/'
// var baseUrlRoot = 'http://127.0.0.1:8848/'
import {Message} from 'iview';
// 引用axios
import axios from 'axios'

function getParams(req){
    // let objType = sGetObject("_objType");
    // let objectid=sGetObject("_objectid");
    // let userid=sGetObject("_userid");
    // let openAppID=sGetObject("_openAppID");
    let userObj = sGetObject("userObj");
    let params={
        objType:userObj.objType,
        objectid:userObj.objectid,
        userid:userObj.userId,
        openAppID:userObj.openAppID,
        reqData:req
    };
    return params;
}



function apiAxios(method, url, params, success, failure) {
  if (method=="POST") {
    params = getParams(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST'? params : null,
    params: method === 'GET'? params : null,
    baseURL: baseUrlRoot+"api/",
    withCredentials: false,
    timeout: 10000
  })
    .then(function (res) {
        let data=res.data;
        if(res.status==200){
          if(data.state==0){
            // Message.success(data.result);
            success(data);
          }else{
            failure(data);
            Message.error(data.result);
          }   
        }
        
    })
    .catch(function (err) {
      failure(err);
        // Message.error("服务异常，请刷新重试！");

    })
}

function sGetObject(k) {
  try {
    var v = sessionStorage.getItem(k);
    return v == null ? null : JSON.parse(v);
  } catch (e) {
  }
};

function uploadFile(url,params, file, success){
  var fd = new FormData();
    if (params != null && params != undefined) {
      for (var i = 0; i < params.length; i++) {
        fd.append(params[i].name, params[i].value)
      }
    }
    if (file != null) {
      fd.append("file", file);
    } else {
      Message.success("请选择一个文件");
      return;
    }
   axios({
      method: 'post',
      url: baseUrlRoot +"api/" + url,
      data: fd,
      params:params,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      timeout: 40000,

    })
    .then(function (res) {

      let data=res.data;
      if(res.status==200){
        if(data.state==0){
          Message.success(data.result);
          success(data);
        }else{
          Message.error(data.result);
        }   
      }
    })
    .catch(function (err) {
        // Message.error("服务异常，请刷新重试！");

    })
}
// 返回在vue模板中的调用接口
export default {
  getBase:function(){
    return baseUrlRoot;
  },
  getImgBase:function(){
    return baseUrlRoot+"/web/images/";
  },
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  uploadFile:function(url,params, file, success){
    return uploadFile(url,params, file, success);
  },
  sset: function(k, v) {
    try {
      sessionStorage.setItem(k, v);
    } catch(e) {

    }
  },
  sget: function(k) {
    try {
      return sessionStorage.getItem(k);
    } catch(e) {
      return null;
    }
  },
  sSetObject: function (k, v) {
    try {
      sessionStorage.setItem(k, JSON.stringify(v));
    } catch (e) {

    }
  },
  sGetObject: function (k) {
    try {
      var v = sessionStorage.getItem(k);
      return v == null ? null : JSON.parse(v);
    } catch (e) {

    }
  },
  sdel: function(k) {
    sessionStorage.removeItem(k);
  },
  sclear: function() {
    sessionStorage.clear();
  },
  onver(limit){
    var size = "";
    if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B
      size = limit.toFixed(2) + "B";  
    }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB
      size = (limit / 1024).toFixed(2) + "KB";      
    }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB
      size = (limit / (1024 * 1024)).toFixed(2) + "MB";
    }else{ //其他转化成GB
      size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    
    var sizestr = size + ""; 
    var len = sizestr.indexOf("\.");
    var dec = sizestr.substr(len + 1, 2);
    if(dec == "00"){//当小数点后为00时 去掉小数部分
      return sizestr.substring(0,len) + sizestr.substr(len + 3,2);
    }
    return sizestr;
  },
  arrUniq(tmpArr,attr){
    var result = [], hash = {};
      for (var i = 0; i<tmpArr.length; i++) {
          var elem = tmpArr[i][attr]; 
          if (!hash[elem]) {
              result.push(tmpArr[i]);
              hash[elem] = true;
          }
      }
      return result;
  },
  delFile(paths){
    this.get("/file/deleteFile",{
      path:paths
    },r=>{
      
    })
  },
  formatTreeData(arr,attr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
      if(!arr[i].children){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}
