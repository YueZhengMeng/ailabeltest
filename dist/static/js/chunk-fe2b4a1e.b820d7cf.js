(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe2b4a1e"],{"0551":function(t,e,a){"use strict";a("a6bf")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},2:function(t,e){},2423:function(t,e,a){"use strict";a("b3fe")},"2ade":function(t,e,a){"use strict";var n=a("cebe"),i=a.n(n),r=a("5c96"),s=a("f3e4"),o=a("14b7"),l=a.n(o);const u=i.a.create({baseURL:"http://localhost:9000",timeout:12e3});u.interceptors.request.use(t=>(Object(s["a"])()&&(t.headers["Authorization"]="Bearer "+Object(s["a"])()),t.headers["Content-Type"]="application/json;charset=utf-8",t),t=>{console.log(t),Promise.reject(t)}),u.interceptors.response.use(t=>{console.log("response = ",t);let{data:e,msg:a,status:n}=t||{};"object"===typeof e&&e.hasOwnProperty("jwtToken")&&(Object(s["c"])(e.jwtToken),e=l.a.decode(e.jwtToken));let i={data:e,code:n};return n>=200&&n<300||0==n?(console.log("newData:",i),i):(Object(r["Message"])({type:"error",message:a}),Promise.reject(e))},t=>{const e=t.response,a=e.data.status;return a||Object(r["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(t)}),e["a"]=u},3:function(t,e){},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination-wrapper"},[e("el-pagination",{attrs:{background:t.background,"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,layout:t.layout},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},i=[],r={name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:()=>[10,15,20,50]},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get(){return this.page},set(t){this.$emit("update:page",t)}},pageSize:{get(){return this.limit},set(t){this.emit("update:limit",t)}}},methods:{handleSizeChange(t){this.$emit("pagination",{page:this.currentPage,limit:t})},handleCurrentChange(t){this.$emit("pagination",{page:t,limit:this.pageSize})}}},s=r,o=(a("2423"),a("2877")),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports},3890:function(t,e,a){"use strict";a("42aa")},4:function(t,e){},"42aa":function(t,e,a){},5:function(t,e){},"50fc":function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"g",(function(){return o})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return c})),a.d(e,"i",(function(){return d})),a.d(e,"h",(function(){return p}));var n=a("2ade");function i(t){return Object(n["a"])({url:"/api/user/all",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/api/image/all",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/annotation/all",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/image/byImageID/"+t,method:"get",params:t})}function l(t){return Object(n["a"])({url:"/api/user/deleteUser/"+t,method:"delete",data:t})}function u(t){return Object(n["a"])({url:"/api/image/delete/"+t,method:"delete",data:t})}function c(t){return Object(n["a"])({url:"/api/annotation/delete/"+t,method:"delete",data:t})}function d(t){return Object(n["a"])({url:"/api/user/resetRole",method:"put",data:t})}function p(t){return Object(n["a"])({url:"/api/user/register",method:"post",data:t})}},5217:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-classic-wrapper"},[e("el-card",{attrs:{shadow:"always"}},[e("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.listQuery,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"标注者ID"}},[e("el-input",{attrs:{placeholder:"标注人ID"},model:{value:t.listQuery.annotaterID,callback:function(e){t.$set(t.listQuery,"annotaterID",e)},expression:"listQuery.annotaterID"}})],1),e("el-form-item",{attrs:{label:"审核结果"}},[e("el-input",{attrs:{placeholder:"审核结果"},model:{value:t.listQuery.checkResult,callback:function(e){t.$set(t.listQuery,"checkResult",e)},expression:"listQuery.checkResult"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[e("el-table-column",{attrs:{prop:"annotaterID",label:"标注者ID",align:"center"}}),e("el-table-column",{attrs:{prop:"annotationDate",label:"标注时间",align:"center",sortable:""}}),e("el-table-column",{attrs:{prop:"checkResult",label:"审核结果",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",disabled:a.row.isVisible},on:{click:function(e){return t.handleCheck(a.$index,a.row)}}},[t._v("审核")])]}}])})],1)],1)],1)},i=[],r=a("f897"),s=a("50fc"),o=a("333d"),l=a("c7f0"),u=a("b522"),c={name:"Table",components:{Pagination:o["a"],Upload:l["a"],Hints:u["a"]},data(){return{listLoading:!0,listQuery:{username:void 0,annotatorName:void 0,status:void 0},total:0,Data:[],tableData:[],multipleSelection:[]}},created(){this.fetchData()},mounted(){window.addEventListener("storage",({key:t})=>{"_refreshChecker"===t&&this.fetchData()})},beforeDestroy(){window.removeEventListener("storage",()=>{})},methods:{handleDelete(t,e){console.log(t,e),this.$confirm("此操作将删除选中数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},fetchData(){this.listLoading=!0,Object(r["b"])().then(t=>{console.log("getUAllAnnotation",t);const e=t.data;if(t.code>=200&&t.code<300){for(let t of e)0==t.checkResult?(t.checkResult="未审核",this.$set(t,"isVisible",!1)):1==t.checkResult?(t.checkResult="通过",this.$set(t,"isVisible",!0)):2==t.checkResult&&(t.checkResult="不通过",this.$set(t,"isVisible",!0));this.total=e.length,this.tableData=e,this.Data=e,this.listLoading=!1}}).catch(()=>{this.listLoading=!1})},handleCheck(t,e){console.log(t,e),Object(s["g"])(e.imageID).then(t=>{console.log("getImageByImageID",t);const a=t.data;let n=this.$router.resolve({name:"checkannotation",query:{imageID:e.imageID,userID:localStorage.getItem("_userID"),annotationResult:e.annotationResult,path:a.path,annotationID:e.annotationID}});window.open(n.href,"_blank")})},onSubmit(){console.log("this.tableData:",this.tableData);let t=Object.values(this.listQuery).filter(t=>void 0!==t).length>0,e=this.Data.slice();this.listQuery.annotaterID&&(e=e.filter(t=>void 0!=t["annotaterID"]&&String(t["annotaterID"])===this.listQuery.annotaterID),console.log("result1",e)),this.listQuery.checkResult&&(e=e.filter(t=>void 0!==t["checkResult"]&&-1!==t["checkResult"].toString().indexOf(this.listQuery.checkResult)),console.log("result2",e)),t||(e=this.Data.slice()),this.tableData=e}}},d=c,p=(a("b384"),a("2877")),h=Object(p["a"])(d,n,i,!1,null,null,null);e["default"]=h.exports},"546e":function(t,e,a){},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},a6bf:function(t,e,a){},b384:function(t,e,a){"use strict";a("546e")},b3fe:function(t,e,a){},b522:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hints-wrapper"},[e("div",{staticClass:"hint-title"},[e("i",{staticClass:"vue-dsn-icon-tishi"}),e("span",[t._t("hintName")],2)]),e("div",{staticClass:"hint-info"},[t._t("hintInfo")],2)])},i=[],r={name:"Hints"},s=r,o=(a("3890"),a("2877")),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports},c7f0:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-upload",{staticClass:"files-upload",attrs:{action:t.url,accept:t.filesFormat,multiple:t.isMultiple,"show-file-list":t.isShowList,"on-success":t.uploadSuccess,"on-error":t.uploadError}},[t._t("default")],2)},i=[],r={name:"Upload",props:{url:{type:String,default:""},filesFormat:{type:String,default:""},isMultiple:{type:Boolean,default:!1},isShowList:{type:Boolean,default:!1}},methods:{uploadSuccess(t,e){if([200,0].includes(t.code)){const e=t.data;this.$emit("on-success",e)}else this.$emit("on-error"),this.$message.error(t.msg)},uploadError(t,e){this.$emit("on-error")}}},s=r,o=(a("0551"),a("2877")),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports},f897:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return s}));var n=a("2ade");function i(t){return Object(n["a"])({url:"/api/annotation/all",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/api/annotation/byCheckerID/"+t.checkerID,method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/annotation/check",method:"post",data:t})}}}]);