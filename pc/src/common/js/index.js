// import md5 from 'js-md5';
// 配置API接口地址
var baseUrlRoot = 'http://47.93.156.129:8848/api/'
import {Message} from 'iview';
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
  console.log(1,params)
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
        Message.error("服务异常，请刷新重试！");

    })
}

function sGetObject(k) {
  try {
    var v = sessionStorage.getItem(k);
    return v == null ? null : JSON.parse(v);
  } catch (e) {
  }
};

// 返回在vue模板中的调用接口
export default {
  getBase:function(){
    return baseUrlRoot;
  },
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
