(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64e610f0"],{1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},"2ade":function(e,t,r){"use strict";var n=r("cebe"),o=r.n(n),s=r("5c96"),a=r("f3e4"),i=r("14b7"),l=r.n(i);const u=o.a.create({baseURL:"http://localhost:9000",timeout:12e3});u.interceptors.request.use(e=>(Object(a["a"])()&&(e.headers["Authorization"]="Bearer "+Object(a["a"])()),e.headers["Content-Type"]="application/json;charset=utf-8",e),e=>{console.log(e),Promise.reject(e)}),u.interceptors.response.use(e=>{console.log("response = ",e);let{data:t,msg:r,status:n}=e||{};"object"===typeof t&&t.hasOwnProperty("jwtToken")&&(Object(a["c"])(t.jwtToken),t=l.a.decode(t.jwtToken));let o={data:t,code:n};return n>=200&&n<300||0==n?(console.log("newData:",o),o):(Object(s["Message"])({type:"error",message:r}),Promise.reject(t))},e=>{const t=e.response,r=t.data.status;return r||Object(s["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(e)}),t["a"]=u},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},"7ded":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return l}));var n=r("2ade");function o(e){return Object(n["a"])({url:"/api/login",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/api/user/register",method:"post",data:e})}function a(e){return Object(n["a"])({url:"/api/user/me",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/api/user/resetUserName",method:"put",data:e})}function l(e){return Object(n["a"])({url:"/api/user/resetPassword",method:"put",data:e})}},8:function(e,t){},9:function(e,t){},a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-wrapper",style:"background-image:url("+e.Background+")"},[t("div",{staticClass:"form-box"},[e._m(0),t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入账号","prefix-icon":"el-icon-user"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"small",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e.loading?t("span",[e._v("登 录 中...")]):t("span",[e._v("登 录")])])],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{size:"small",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegister.apply(null,arguments)}}},[e._v("注 册")])],1)],1)],1)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-title"},[t("h2",[e._v("病理切片缺陷标注系统")]),t("p",[e._v("账号登录")])])}],s=(r("14d9"),r("7ded")),a=r("d847"),i=r.n(a),l={name:"Login",data(){return{Background:i.a,loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}]},loading:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleLogin(){this.$refs.loginForm.validate(e=>{const t={username:this.loginForm.username,password:this.loginForm.password};e&&(this.loading=!0,Object(s["b"])(t).then(e=>{this.loading=!1,console.log("res: ",e),localStorage.setItem("_userID",e.data.userID),localStorage.setItem("_username",e.data.username),localStorage.setItem("_role",e.data.role.substring(6,e.data.role.length-1)),console.log("redirect: ",this.redirect),this.$router.push({path:this.redirect||"/"}).catch(e=>{})}).catch(e=>{this.$message.error(e.message),console.log(e),this.loading=!1}))})},handleRegister(){this.$router.push("/register").catch(e=>{console.log(e)})}}},u=l,c=(r("e555"),r("2877")),d=Object(c["a"])(u,n,o,!1,null,null,null);t["default"]=d.exports},d847:function(e,t,r){e.exports=r.p+"static/img/login-background.0f25c16a.jpg"},e555:function(e,t,r){"use strict";r("f549")},f549:function(e,t,r){}}]);