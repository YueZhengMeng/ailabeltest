(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f9b5a3a"],{"0551":function(t,e,a){"use strict";a("a6bf")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},2:function(t,e){},"233e":function(t,e,a){"use strict";a("bf39")},2423:function(t,e,a){"use strict";a("b3fe")},"2ade":function(t,e,a){"use strict";var n=a("cebe"),r=a.n(n),o=a("5c96"),i=a("f3e4"),s=a("14b7"),l=a.n(s);const c=r.a.create({baseURL:"http://localhost:9000",timeout:12e3});c.interceptors.request.use(t=>(Object(i["a"])()&&(t.headers["Authorization"]="Bearer "+Object(i["a"])()),t.headers["Content-Type"]="application/json;charset=utf-8",t),t=>{console.log(t),Promise.reject(t)}),c.interceptors.response.use(t=>{console.log("response = ",t);let{data:e,msg:a,status:n}=t||{};"object"===typeof e&&e.hasOwnProperty("jwtToken")&&(Object(i["c"])(e.jwtToken),e=l.a.decode(e.jwtToken));let r={data:e,code:n};return n>=200&&n<300||0==n?(console.log("newData:",r),r):(Object(o["Message"])({type:"error",message:a}),Promise.reject(e))},t=>{const e=t.response,a=e.data.status;return a||Object(o["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(t)}),e["a"]=c},3:function(t,e){},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination-wrapper"},[e("el-pagination",{attrs:{background:t.background,"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,layout:t.layout},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},r=[],o={name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:()=>[10,15,20,50]},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get(){return this.page},set(t){this.$emit("update:page",t)}},pageSize:{get(){return this.limit},set(t){this.emit("update:limit",t)}}},methods:{handleSizeChange(t){this.$emit("pagination",{page:this.currentPage,limit:t})},handleCurrentChange(t){this.$emit("pagination",{page:t,limit:this.pageSize})}}},i=o,s=(a("2423"),a("2877")),l=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},3890:function(t,e,a){"use strict";a("42aa")},4:function(t,e){},"42aa":function(t,e,a){},5:function(t,e){},"50fc":function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return i})),a.d(e,"g",(function(){return s})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"i",(function(){return d})),a.d(e,"h",(function(){return p}));var n=a("2ade");function r(t){return Object(n["a"])({url:"/api/user/all",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/image/all",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/api/annotation/all",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/image/byImageID/"+t,method:"get",params:t})}function l(t){return Object(n["a"])({url:"/api/user/deleteUser/"+t,method:"delete",data:t})}function c(t){return Object(n["a"])({url:"/api/image/delete/"+t,method:"delete",data:t})}function u(t){return Object(n["a"])({url:"/api/annotation/delete/"+t,method:"delete",data:t})}function d(t){return Object(n["a"])({url:"/api/user/resetRole",method:"put",data:t})}function p(t){return Object(n["a"])({url:"/api/user/register",method:"post",data:t})}},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},a6bf:function(t,e,a){},b3fe:function(t,e,a){},b522:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hints-wrapper"},[e("div",{staticClass:"hint-title"},[e("i",{staticClass:"vue-dsn-icon-tishi"}),e("span",[t._t("hintName")],2)]),e("div",{staticClass:"hint-info"},[t._t("hintInfo")],2)])},r=[],o={name:"Hints"},i=o,s=(a("3890"),a("2877")),l=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},bf39:function(t,e,a){},c7f0:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-upload",{staticClass:"files-upload",attrs:{action:t.url,accept:t.filesFormat,multiple:t.isMultiple,"show-file-list":t.isShowList,"on-success":t.uploadSuccess,"on-error":t.uploadError}},[t._t("default")],2)},r=[],o={name:"Upload",props:{url:{type:String,default:""},filesFormat:{type:String,default:""},isMultiple:{type:Boolean,default:!1},isShowList:{type:Boolean,default:!1}},methods:{uploadSuccess(t,e){if([200,0].includes(t.code)){const e=t.data;this.$emit("on-success",e)}else this.$emit("on-error"),this.$message.error(t.msg)},uploadError(t,e){this.$emit("on-error")}}},i=o,s=(a("0551"),a("2877")),l=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},cd77:function(t,e,a){"use strict";a("907a"),a("986a"),a("1d02"),a("3c5d"),a("3c65"),a("14d9");var n=a("1146"),r=a.n(n),o=a("21a6");function i(t,e){const a=e.map(t=>t.map(t=>null==t?{wch:10}:t.toString().charCodeAt(0)>255?{wch:2*t.toString().length}:{wch:t.toString().length})),n=a[0];for(let r=1;r<a.length;r++)for(let t=0;t<a[r].length;t++)n[t].wch<a[r][t].wch&&(n[t].wch=a[r][t].wch);t["!cols"]=n}function s(t,e){return e.map(e=>t.map(t=>e[t]))}function l(t){const e=new ArrayBuffer(t.length),a=new Uint8Array(e);for(let n=0;n!==t.length;++n)a[n]=255&t.charCodeAt(n);return e}function c({header:t,key:e,data:a,fileName:n,autoWidth:c=!0,bookType:u="xlsx"}={}){const d=r.a.utils.book_new(),p=s(e,a);n=n||"excel-list",p.unshift(t);const f=r.a.utils.aoa_to_sheet(p);c&&i(f,p),r.a.utils.book_append_sheet(d,f,n);const h=r.a.write(d,{bookType:u,bookSST:!1,type:"binary"});Object(o["saveAs"])(new Blob([l(h)],{type:"application/octet-stream"}),`${n}.${u}`)}function u(t){const e=[],a=r.a.utils.decode_range(t["!ref"]);let n;const o=a.s.r;for(n=a.s.c;n<=a.e.c;++n){const a=t[r.a.utils.encode_cell({c:n,r:o})];let i="UNKNOWN "+n;a&&a.t&&(i=r.a.utils.format_cell(a)),e.push(i)}return e}function d(t,e){const a=r.a.read(t,{type:e}),n=a.SheetNames[0],o=a.Sheets[n],i=u(o),s=r.a.utils.sheet_to_json(o);return{header:i,results:s}}e["a"]={exportDataToExcel:c,readDataFromExcel:d}},e46c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-classic-wrapper"},[e("el-card",{attrs:{shadow:"always"}},[e("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.listQuery,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"标注者ID"}},[e("el-input",{attrs:{placeholder:"标注人ID"},model:{value:t.listQuery.annotaterID,callback:function(e){t.$set(t.listQuery,"annotaterID",e)},expression:"listQuery.annotaterID"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[e("el-table-column",{attrs:{prop:"annotaterID",label:"标注者ID",align:"center"}}),e("el-table-column",{attrs:{prop:"annotationDate",label:"标注时间",align:"center",sortable:""}}),e("el-table-column",{attrs:{prop:"checkDate",label:"审核时间",align:"center",sortable:""}}),e("el-table-column",{attrs:{prop:"checkResult",label:"审核结果",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleSelect(a.$index,a.row)}}},[t._v("显示详细信息")])]}}])})],1)],1)],1)},r=[],o=a("f897"),i=a("50fc"),s=(a("cd77"),a("333d")),l=a("c7f0"),c=a("b522"),u={name:"Table",components:{Pagination:s["a"],Upload:l["a"],Hints:c["a"]},data(){return{listLoading:!0,listQuery:{checkerID:parseInt(localStorage.getItem("_userID"))},total:0,Data:[],tableData:[],multipleSelection:[]}},created(){this.fetchData()},mounted(){window.addEventListener("storage",({key:t})=>{"_refreshChecker"===t&&this.fetchData()})},beforeDestroy(){window.removeEventListener("storage",()=>{})},methods:{handleDelete(t,e){console.log(t,e),this.$confirm("此操作将删除选中数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},fetchData(){this.listLoading=!0,Object(o["c"])(this.listQuery).then(t=>{const e=t.data;if(t.code>=200&&t.code<300){this.total=e.length,this.tableData=e,this.Data=e;for(let t of e)0==t.checkResult?t.checkResult="未审核":1==t.checkResult?t.checkResult="通过":2==t.checkResult&&(t.checkResult="不通过");this.listLoading=!1}}).catch(()=>{this.listLoading=!1})},handleSelect(t,e){console.log(t,e),Object(i["g"])(e.imageID).then(t=>{console.log("getImageByImageID",t);const a=t.data;let n=this.$router.resolve({name:"other_showannotation",query:{imageID:e.imageID,userID:localStorage.getItem("_userID"),annotationResult:e.annotationResult,path:a.path}});window.open(n.href,"_blank")})},onSubmit(){console.log("this.tableData:",this.tableData);let t=Object.values(this.listQuery).filter(t=>void 0!==t).length>0,e=this.Data.slice();this.listQuery.annotaterID&&(e=e.filter(t=>void 0!==t["annotaterID"]&&-1!==t["annotaterID"].toString().indexOf(this.listQuery.annotaterID)),console.log("result",e)),t||(e=this.Data.slice()),this.tableData=e}}},d=u,p=(a("233e"),a("2877")),f=Object(p["a"])(d,n,r,!1,null,null,null);e["default"]=f.exports},f897:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=a("2ade");function r(t){return Object(n["a"])({url:"/api/annotation/all",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/annotation/byCheckerID/"+t.checkerID,method:"get",params:t})}function i(t){return Object(n["a"])({url:"/api/annotation/check",method:"post",data:t})}}}]);