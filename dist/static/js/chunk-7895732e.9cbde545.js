(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7895732e"],{"0551":function(t,e,a){"use strict";a("a6bf")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},2:function(t,e){},2423:function(t,e,a){"use strict";a("b3fe")},"26c4":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o}));var i=a("2ade");function s(t){return Object(i["a"])({url:"/api/image/all",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/api/annotation/byAnnotaterID/"+t.annotaterID,method:"get",params:t})}function o(t){return Object(i["a"])({url:"/api/annotation/add",method:"post",data:t})}},"2ade":function(t,e,a){"use strict";var i=a("cebe"),s=a.n(i),n=a("5c96"),o=a("f3e4"),l=a("14b7"),r=a.n(l);const c=s.a.create({baseURL:"http://localhost:9000",timeout:12e3});c.interceptors.request.use(t=>(Object(o["a"])()&&(t.headers["Authorization"]="Bearer "+Object(o["a"])()),t.headers["Content-Type"]="application/json;charset=utf-8",t),t=>{console.log(t),Promise.reject(t)}),c.interceptors.response.use(t=>{console.log("response = ",t);let{data:e,msg:a,status:i}=t||{};"object"===typeof e&&e.hasOwnProperty("jwtToken")&&(Object(o["c"])(e.jwtToken),e=r.a.decode(e.jwtToken));let s={data:e,code:i};return i>=200&&i<300||0==i?(console.log("newData:",s),s):(Object(n["Message"])({type:"error",message:a}),Promise.reject(e))},t=>{const e=t.response,a=e.data.status;return a||Object(n["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(t)}),e["a"]=c},3:function(t,e){},"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination-wrapper"},[e("el-pagination",{attrs:{background:t.background,"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,layout:t.layout},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},s=[],n={name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:()=>[10,15,20,50]},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get(){return this.page},set(t){this.$emit("update:page",t)}},pageSize:{get(){return this.limit},set(t){this.emit("update:limit",t)}}},methods:{handleSizeChange(t){this.$emit("pagination",{page:this.currentPage,limit:t})},handleCurrentChange(t){this.$emit("pagination",{page:t,limit:this.pageSize})}}},o=n,l=(a("2423"),a("2877")),r=Object(l["a"])(o,i,s,!1,null,null,null);e["a"]=r.exports},3890:function(t,e,a){"use strict";a("42aa")},4:function(t,e){},"42aa":function(t,e,a){},5:function(t,e){},5750:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-classic-wrapper"},[e("el-card",{attrs:{shadow:"always"}},[e("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.listQuery,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"上传者ID"}},[e("el-input",{attrs:{placeholder:"上传人ID"},model:{value:t.listQuery.uploaderID,callback:function(e){t.$set(t.listQuery,"uploaderID",e)},expression:"listQuery.uploaderID"}})],1),e("el-form-item",{attrs:{label:"状态"}},[e("el-input",{attrs:{placeholder:"状态"},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[e("el-table-column",{attrs:{prop:"uploaderID",label:"上传者ID",align:"center"}}),e("el-table-column",{attrs:{prop:"uploadDate",label:"上传时间",align:"center",sortable:""}}),e("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",disabled:a.row.isVisible},on:{click:function(e){return t.handleAnnotation(a.$index,a.row)}}},[t._v("标注")])]}}])})],1),e("el-dialog",{staticClass:"dialog-form",attrs:{title:"切片详细信息",visible:t.formVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.formVisible=e}}},[e("el-form",{ref:"dialogForm",attrs:{model:t.dialogForm,rules:t.formRules,"label-width":"100px"}})],1)],1)],1)},s=[],n=a("26c4"),o=a("cd77"),l=a("333d"),r=a("c7f0"),c=a("b522"),u=(a("d8ad"),{name:"Table",components:{Pagination:l["a"],Upload:r["a"],Hints:c["a"]},data(){return{listLoading:!0,listQuery:{username:void 0,status:void 0},dialogForm:{name:void 0,phone:void 0,married:void 0,hobby:[]},total:0,Data:[],tableData:[],multipleSelection:[],formVisible:!1,isSubmit:!1}},created(){this.fetchData()},mounted(){window.addEventListener("storage",({key:t})=>{"_refreshAnnotater"===t&&this.fetchData()})},beforeDestroy(){window.removeEventListener("storage",()=>{})},methods:{handleSelectionChange(t){this.multipleSelection=t},handleEdit(t,e){console.log(t,e),this.formVisible=!0,this.dialogForm.name=e.name,this.dialogForm.phone=e.phone,this.dialogForm.married=e.married,this.dialogForm.hobby=e.hobby.split("、")},handleDelete(t,e){console.log(t,e),this.$confirm("此操作将删除选中数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},batchDelete(){this.multipleSelection.length<1?this.$message({message:"请先选择要删除的数据！",type:"warning"}):this.handleDelete()},handleClose(){this.formVisible=!1,this.$refs.dialogForm.resetFields()},fetchData(){this.listLoading=!0,Object(n["c"])().then(t=>{console.log("getUserAllImage",t);const e=t.data;if(t.code>=200&&t.code<300){this.total=e.length,this.tableData=e,this.Data=e;for(let t of e)0==t.status?(t.status="未标注",this.$set(t,"isVisible",!1)):1==t.status?(t.status="已审核",this.$set(t,"isVisible",!0)):2==t.status&&(t.status="已标注/待审核",this.$set(t,"isVisible",!1));this.listLoading=!1}}).catch(()=>{this.listLoading=!1})},handleAnnotation(t,e){console.log(t,e);let a=this.$router.resolve({name:"annotation",query:{imageID:e.imageID,annotaterID:localStorage.getItem("_userID"),path:e.path}});window.open(a.href,"_blank")},onSubmit(){console.log("this.tableData:",this.tableData);let t=Object.values(this.listQuery).filter(t=>void 0!==t).length>0,e=this.Data.slice();this.listQuery.uploaderID&&(e=e.filter(t=>void 0!=t["uploaderID"]&&String(t["uploaderID"])===this.listQuery.uploaderID),console.log("result1",e)),this.listQuery.status&&(e=e.filter(t=>void 0!==t["status"]&&-1!==t["status"].toString().indexOf(this.listQuery.status)),console.log("result2",e)),t||(e=this.Data.slice()),this.tableData=e},handleImport(){this.importVisible=!0},submitForm(t){this.$refs[t].validate(t=>{if(!t)return this.isSubmit=!1,!1;this.formVisible=!1})},cancleForm(){this.$refs.dialogForm.resetFields(),this.formVisible=!1},confirmImport(){this.importVisible=!1},cancleImport(){this.importVisible=!1},exportTable(t){if(this.tableData.length){const e={header:["编号","姓名","性别","手机","学历","婚姻状况","禁止编辑","爱好"],key:["id","name","sex","phone","education","married","forbid","hobby"],data:this.tableData,autoWidth:!0,fileName:"综合表格",bookType:t};o["a"].exportDataToExcel(e),this.exportVisible=!1}},selectChange(t){},stateChange(t){}}}),d=u,h=(a("c19a"),a("2877")),p=Object(h["a"])(d,i,s,!1,null,null,null);e["default"]=p.exports},6:function(t,e){},"6c9e":function(t,e,a){},7:function(t,e){},8:function(t,e){},9:function(t,e){},a6bf:function(t,e,a){},b3fe:function(t,e,a){},b522:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hints-wrapper"},[e("div",{staticClass:"hint-title"},[e("i",{staticClass:"vue-dsn-icon-tishi"}),e("span",[t._t("hintName")],2)]),e("div",{staticClass:"hint-info"},[t._t("hintInfo")],2)])},s=[],n={name:"Hints"},o=n,l=(a("3890"),a("2877")),r=Object(l["a"])(o,i,s,!1,null,null,null);e["a"]=r.exports},c19a:function(t,e,a){"use strict";a("6c9e")},c7f0:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("el-upload",{staticClass:"files-upload",attrs:{action:t.url,accept:t.filesFormat,multiple:t.isMultiple,"show-file-list":t.isShowList,"on-success":t.uploadSuccess,"on-error":t.uploadError}},[t._t("default")],2)},s=[],n={name:"Upload",props:{url:{type:String,default:""},filesFormat:{type:String,default:""},isMultiple:{type:Boolean,default:!1},isShowList:{type:Boolean,default:!1}},methods:{uploadSuccess(t,e){if([200,0].includes(t.code)){const e=t.data;this.$emit("on-success",e)}else this.$emit("on-error"),this.$message.error(t.msg)},uploadError(t,e){this.$emit("on-error")}}},o=n,l=(a("0551"),a("2877")),r=Object(l["a"])(o,i,s,!1,null,null,null);e["a"]=r.exports},cd77:function(t,e,a){"use strict";a("907a"),a("986a"),a("1d02"),a("3c5d"),a("3c65"),a("14d9");var i=a("1146"),s=a.n(i),n=a("21a6");function o(t,e){const a=e.map(t=>t.map(t=>null==t?{wch:10}:t.toString().charCodeAt(0)>255?{wch:2*t.toString().length}:{wch:t.toString().length})),i=a[0];for(let s=1;s<a.length;s++)for(let t=0;t<a[s].length;t++)i[t].wch<a[s][t].wch&&(i[t].wch=a[s][t].wch);t["!cols"]=i}function l(t,e){return e.map(e=>t.map(t=>e[t]))}function r(t){const e=new ArrayBuffer(t.length),a=new Uint8Array(e);for(let i=0;i!==t.length;++i)a[i]=255&t.charCodeAt(i);return e}function c({header:t,key:e,data:a,fileName:i,autoWidth:c=!0,bookType:u="xlsx"}={}){const d=s.a.utils.book_new(),h=l(e,a);i=i||"excel-list",h.unshift(t);const p=s.a.utils.aoa_to_sheet(h);c&&o(p,h),s.a.utils.book_append_sheet(d,p,i);const f=s.a.write(d,{bookType:u,bookSST:!1,type:"binary"});Object(n["saveAs"])(new Blob([r(f)],{type:"application/octet-stream"}),`${i}.${u}`)}function u(t){const e=[],a=s.a.utils.decode_range(t["!ref"]);let i;const n=a.s.r;for(i=a.s.c;i<=a.e.c;++i){const a=t[s.a.utils.encode_cell({c:i,r:n})];let o="UNKNOWN "+i;a&&a.t&&(o=s.a.utils.format_cell(a)),e.push(o)}return e}function d(t,e){const a=s.a.read(t,{type:e}),i=a.SheetNames[0],n=a.Sheets[i],o=u(n),l=s.a.utils.sheet_to_json(n);return{header:o,results:l}}e["a"]={exportDataToExcel:c,readDataFromExcel:d}},d8ad:function(t,e,a){"use strict";var i=a("8bbf"),s=a.n(i);new s.a}}]);