// import md5 from 'js-md5';
// 配置API接口地址
var baseUrlRoot = 'http://47.93.156.129:8848/api/'
import {Message} from 'iview'
import  { Toast, Loading } from 'vux'
import Vue from 'vue'

// 引用axios
import axios from 'axios'

function getParams(req){
    // let objType = sGetObject("_objType");
    // let objectid=sGetObject("_objectid");
    // let userid=sGetObject("_userid");
    let objType = "2";
    let objectid="EzQ319HuHN8done";
    let userid="nHoIlS9HDYodone";
    let params={
        objType:objType,
        objectid:objectid,
        userid:userid,
        reqData:req
    };
    return params;
}



function apiAxios(method, url, params, success, failure) {
  if (method=="POST") {
    params = getParams(params)
  }
  // console.log(1,params)
  axios({
    method: method,
    url: url,
    data: method === 'POST'? params : null,
    params: method === 'GET'? params : null,
    baseURL: baseUrlRoot,
    withCredentials: false,
    timeout: 10000
  })
    .then(function (res) {
      // console.log(res)
        let data=res.data;
        if(res.status==200){
          if(data.state==0){
            // Message.success(data.result);
            Vue.$vux.toast.show({
              text: data.result,
              time: "2000",
              type: "text",
              position: "middle"
            });
            success(data);
          }else{
            // failure(data)
            Vue.$vux.toast.show({
              text: data.result,
              time: "2000",
              type: "text",
              position: "middle"
            });
            // Message.error(data.result);
          }   
        }
        
    })
    .catch(function (err) {
      // failure(err)
      Vue.$vux.toast.show({
        text: '服务异常，请刷新重试！',
        time: "2000",
        type: "text",
        position: "middle"
      });
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
      Vue.$vux.toast.show({
        text: '请选择一个文件',
        time: "2000",
        type: "text",
        position: "middle"
      });
      return;
    }
    Vue.$vux.loading.show({
      text: '上传中'
    })
   axios({
      method: 'post',
      url: baseUrlRoot + url,
      data: fd,
      params:params,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      timeout: 40000,

    })
    .then(function (res) {
      Vue.$vux.loading.hide()
      let data=res.data;
      if(res.status==200){
        if(data.state==0){
          Vue.$vux.toast.show({
            text: data.result,
            time: "2000",
            type: "text",
            position: "middle"
          });
          success(data);
        }else{
          Vue.$vux.toast.show({
            text: data.result,
            time: "2000",
            type: "text",
            position: "middle"
          });
        }   
      }
    })
    .catch(function (err) {
      Vue.$vux.loading.hide()
        // Message.error("服务异常，请刷新重试！");

    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  sset: function(k, v) {
    try {
      sessionStorage.setItem(k, v);
    } catch(e) {

    }
  },
  uploadFile:function(url,params, file, success){
    return uploadFile(url,params, file, success);
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
  }
}
