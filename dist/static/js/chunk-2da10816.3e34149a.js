(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2da10816"],{1:function(e,s){},10:function(e,s){},11:function(e,s){},12:function(e,s){},13:function(e,s){},14:function(e,s){},2:function(e,s){},"2ade":function(e,s,t){"use strict";var r=t("cebe"),o=t.n(r),i=t("5c96"),a=t("f3e4"),n=t("14b7"),l=t.n(n);const u=o.a.create({baseURL:"http://localhost:9000",timeout:12e3});u.interceptors.request.use(e=>(Object(a["a"])()&&(e.headers["Authorization"]="Bearer "+Object(a["a"])()),e.headers["Content-Type"]="application/json;charset=utf-8",e),e=>{console.log(e),Promise.reject(e)}),u.interceptors.response.use(e=>{console.log("response = ",e);let{data:s,msg:t,status:r}=e||{};"object"===typeof s&&s.hasOwnProperty("jwtToken")&&(Object(a["c"])(s.jwtToken),s=l.a.decode(s.jwtToken));let o={data:s,code:r};return r>=200&&r<300||0==r?(console.log("newData:",o),o):(Object(i["Message"])({type:"error",message:t}),Promise.reject(s))},e=>{const s=e.response,t=s.data.status;return t||Object(i["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(e)}),s["a"]=u},3:function(e,s){},4:function(e,s){},5:function(e,s){},6:function(e,s){},6494:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"user-center-wrapper clear-fix"},[s("el-card",{attrs:{shadow:"always","body-style":{padding:"50px"}}},[s("div",{staticClass:"user-avatar"},[s("img",{attrs:{src:t("690a"),alt:"avatar"}})]),s("ul",{staticClass:"user-info"},[s("li",[s("label",[e._v("用户名：")]),s("span",[e._v(e._s(e.userInfo.username))])]),s("li",[s("label",[e._v("密 码：")]),s("span",[e._v(e._s(e.userInfo.password))])]),s("li",[s("label",[e._v("角 色：")]),s("span",[e._v(e._s(e.userInfo.role))])]),s("div",[s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleresetPassword}},[e._v("更改密码")])],1)]),s("el-dialog",{staticClass:"dialog-form",attrs:{title:"更改密码",visible:e.formVisible1,width:"50%","before-close":e.handleClose1},on:{"update:visible":function(s){e.formVisible1=s}}},[s("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"密码：",prop:"password"}},[s("el-input",{attrs:{placeholder:"密码"},model:{value:e.dialogForm.password,callback:function(s){e.$set(e.dialogForm,"password",s)},expression:"dialogForm.password"}})],1),s("div",{staticClass:"footer-item"},[s("el-button",{on:{click:e.cancleForm1}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary",disabled:e.isSubmit},on:{click:function(s){return e.submitForm1("dialogForm")}}},[e._v("确 定")])],1)],1)],1)],1)],1)},o=[],i=t("7ded"),a={name:"UserCenter",data(){return{userInfo:{userID:"",username:"",password:"",role:""},dialogForm:{userID:"",username:"",password:"",role:""},formVisible:!1,formVisible1:!1,isSubmit:!1}},created(){this.fetchData()},methods:{fetchData(){Object(i["a"])().then(e=>{this.userInfo=e.data,"user"==this.userInfo.role?this.userInfo.role="普通用户":"annotater"==this.userInfo.role?this.userInfo.role="标注人员":"checker"==this.userInfo.role?this.userInfo.role="审核人员":"admin"==this.userInfo.role&&(this.userInfo.role="管理员")})},handleresetUserName(){this.formVisible=!0,this.dialogForm.userID=this.userInfo.userID,this.dialogForm.username=this.userInfo.username,this.dialogForm.password=this.userInfo.password,this.dialogForm.role=this.userInfo.role},handleresetPassword(){this.formVisible1=!0,this.dialogForm.userID=this.userInfo.userID,this.dialogForm.username=this.userInfo.username,this.dialogForm.password=this.userInfo.password,this.dialogForm.role=this.userInfo.role},handleClose(){this.formVisible=!1,this.$refs.dialogForm.resetFields()},handleClose1(){this.formVisible1=!1,this.$refs.dialogForm.resetFields()},submitForm(e){this.$refs[e].validate(e=>{if(!e)return this.isSubmit=!1,!1;this.isSubmit=!0,console.log("this.dialogForm",this.dialogForm),Object(i["e"])(this.dialogForm).then(e=>{console.log("res:",e),this.$message({type:"success",message:"更改成功!"}),this.fetchData(),this.isSubmit=!1}),this.formVisible=!1})},submitForm1(e){this.$refs[e].validate(e=>{if(!e)return this.isSubmit=!1,!1;this.isSubmit=!0,console.log("this.dialogForm",this.dialogForm),Object(i["d"])(this.dialogForm).then(e=>{console.log("res:",e),this.$message({type:"success",message:"更改成功!"}),this.fetchData(),this.isSubmit=!1}),this.formVisible1=!1})},cancleForm(){this.$refs.dialogForm.resetFields(),this.formVisible=!1},cancleForm1(){this.$refs.dialogForm.resetFields(),this.formVisible1=!1}}},n=a,l=(t("70cb"),t("2877")),u=Object(l["a"])(n,r,o,!1,null,null,null);s["default"]=u.exports},7:function(e,s){},"70cb":function(e,s,t){"use strict";t("9006")},"7ded":function(e,s,t){"use strict";t.d(s,"b",(function(){return o})),t.d(s,"c",(function(){return i})),t.d(s,"a",(function(){return a})),t.d(s,"e",(function(){return n})),t.d(s,"d",(function(){return l}));var r=t("2ade");function o(e){return Object(r["a"])({url:"/api/login",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/api/user/register",method:"post",data:e})}function a(e){return Object(r["a"])({url:"/api/user/me",method:"get",params:e})}function n(e){return Object(r["a"])({url:"/api/user/resetUserName",method:"put",data:e})}function l(e){return Object(r["a"])({url:"/api/user/resetPassword",method:"put",data:e})}},8:function(e,s){},9:function(e,s){},9006:function(e,s,t){}}]);