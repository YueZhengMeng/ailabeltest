(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ec4a4d1"],{1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},"2ade":function(e,t,r){"use strict";var s=r("cebe"),o=r.n(s),n=r("5c96"),a=r("f3e4"),i=r("14b7"),c=r.n(i);const u=o.a.create({baseURL:"http://localhost:9000",timeout:12e3});u.interceptors.request.use(e=>(Object(a["a"])()&&(e.headers["Authorization"]="Bearer "+Object(a["a"])()),e.headers["Content-Type"]="application/json;charset=utf-8",e),e=>{console.log(e),Promise.reject(e)}),u.interceptors.response.use(e=>{console.log("response = ",e);let{data:t,msg:r,status:s}=e||{};"object"===typeof t&&t.hasOwnProperty("jwtToken")&&(Object(a["c"])(t.jwtToken),t=c.a.decode(t.jwtToken));let o={data:t,code:s};return s>=200&&s<300||0==s?(console.log("newData:",o),o):(Object(n["Message"])({type:"error",message:r}),Promise.reject(t))},e=>{const t=e.response,r=t.data.status;return r||Object(n["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(e)}),t["a"]=u},3:function(e,t){},"30bc":function(e,t,r){"use strict";r("8d34")},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},"73cf":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-wrapper",style:"background-image:url("+e.Background+")"},[t("div",{staticClass:"form-box"},[e._m(0),t("el-form",{ref:"registerForm",staticClass:"login-form",attrs:{model:e.registerForm,rules:e.loginRules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入账号","prefix-icon":"el-icon-user"},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),t("el-form-item",{attrs:{prop:"password2"}},[t("el-input",{attrs:{type:"password2","auto-complete":"off",placeholder:"请再次输入密码","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.registerForm.password2,callback:function(t){e.$set(e.registerForm,"password2",t)},expression:"registerForm.password2"}})],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"small",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegister.apply(null,arguments)}}},[e.loading?t("span",[e._v("注 册 中...")]):t("span",[e._v("注 册")])])],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{size:"small",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.returnLogin.apply(null,arguments)}}},[e._v("返回登录")])],1)],1)],1)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-title"},[t("h2",[e._v("病理切片缺陷标注系统")]),t("p",[e._v("账号注册")])])}],n=(r("14d9"),r("7ded")),a=r("d847"),i=r.n(a),c={name:"Register",data(){return{Background:i.a,registerForm:{username:"",password:"",password2:""},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}],password2:[{required:!0,trigger:"blur",message:"密码不能为空"}]},loading:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleRegister(){this.$refs.registerForm.validate(e=>{const t={username:this.registerForm.username,password:this.registerForm.password,password2:this.registerForm.password2};this.registerForm.password==this.registerForm.password2?e&&(this.loading=!0,Object(n["c"])(t).then(e=>{this.loading=!1,console.log(e),this.$router.push("/login").catch(e=>{console.log("1",e)})}).catch(e=>{console.log(e),this.loading=!1})):""!=this.registerForm.password&&""!=this.registerForm.password2&&this.$message({message:"两次密码输入不一致",type:"warning"})})},returnLogin(){this.$router.push("/login").catch(e=>{console.log(e)})}}},u=c,l=(r("30bc"),r("2877")),d=Object(l["a"])(u,s,o,!1,null,null,null);t["default"]=d.exports},"7ded":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return c}));var s=r("2ade");function o(e){return Object(s["a"])({url:"/api/login",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/api/user/register",method:"post",data:e})}function a(e){return Object(s["a"])({url:"/api/user/me",method:"get",params:e})}function i(e){return Object(s["a"])({url:"/api/user/resetUserName",method:"put",data:e})}function c(e){return Object(s["a"])({url:"/api/user/resetPassword",method:"put",data:e})}},8:function(e,t){},"8d34":function(e,t,r){},9:function(e,t){},d847:function(e,t,r){e.exports=r.p+"static/img/login-background.0f25c16a.jpg"}}]);