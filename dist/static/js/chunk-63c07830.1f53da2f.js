(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63c07830"],{1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},"26c4":function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var r=a("2ade");function i(e){return Object(r["a"])({url:"/api/image/all",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/api/annotation/byAnnotaterID/"+e.annotaterID,method:"get",params:e})}function o(e){return Object(r["a"])({url:"/api/annotation/add",method:"post",data:e})}},"2ade":function(e,t,a){"use strict";var r=a("cebe"),i=a.n(r),s=a("5c96"),o=a("f3e4"),l=a("14b7"),n=a.n(l);const c=i.a.create({baseURL:"http://localhost:9000",timeout:12e3});c.interceptors.request.use(e=>(Object(o["a"])()&&(e.headers["Authorization"]="Bearer "+Object(o["a"])()),e.headers["Content-Type"]="application/json;charset=utf-8",e),e=>{console.log(e),Promise.reject(e)}),c.interceptors.response.use(e=>{console.log("response = ",e);let{data:t,msg:a,status:r}=e||{};"object"===typeof t&&t.hasOwnProperty("jwtToken")&&(Object(o["c"])(t.jwtToken),t=n.a.decode(t.jwtToken));let i={data:t,code:r};return r>=200&&r<300||0==r?(console.log("newData:",i),i):(Object(s["Message"])({type:"error",message:a}),Promise.reject(t))},e=>{const t=e.response,a=t.data.status;return a||Object(s["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(e)}),t["a"]=c},3:function(e,t){},"3f19":function(e,t,a){e.exports=a.p+"static/img/delicon.2b014ff4.jpg"},4:function(e,t){},5:function(e,t){},"57a6":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"AILabel"},[t("ul",{staticClass:"toolbar"},[t("li",{on:{click:function(t){return e.setMode("PAN")}}},[t("el-tooltip",{attrs:{content:"平移",effect:"customized",placement:"right"}},[t("svg",{staticClass:"icon",attrs:{height:"50","p-id":"2275",t:"1657849698286",version:"1.1",viewBox:"0 0 1024 1024",width:"50",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M486.4 776.533333v-213.333333H247.466667v106.666667L85.333333 512l162.133334-162.133333V512h238.933333V247.466667H349.866667L512 85.333333l162.133333 162.133334h-132.266666V512h238.933333V349.866667L938.666667 512l-162.133334 162.133333v-106.666666h-238.933333v213.333333h132.266667L512 938.666667l-162.133333-162.133334h136.533333z",fill:"#e6e6e6","p-id":"2276"}})])])],1),t("li",{on:{click:function(t){return e.setMode("RECT")}}},[t("el-tooltip",{attrs:{content:"矩形",effect:"customized",placement:"right"}},[t("svg",{staticClass:"icon",attrs:{height:"30","p-id":"6373",t:"1657850246358",version:"1.1",viewBox:"0 0 1024 1024",width:"30",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M876.4664713541666 302.9680989583333H776.4029947916665V202.90462239583334c0-11.865234374999998-9.8876953125-21.7529296875-21.7529296875-21.7529296875s-21.7529296875 9.8876953125-21.7529296875 21.7529296875v100.0634765625H632.8336588541666c-11.865234374999998 0-21.7529296875 9.8876953125-21.7529296875 21.7529296875s9.8876953125 21.7529296875 21.7529296875 21.7529296875h100.0634765625v100.0634765625c0 11.865234374999998 9.8876953125 21.7529296875 21.7529296875 21.7529296875s21.7529296875-9.8876953125 21.7529296875-21.7529296875V346.4739583333333H876.4664713541666c11.865234374999998 0 21.7529296875-9.8876953125 21.7529296875-21.7529296875 0-12.2607421875-9.8876953125-21.7529296875-21.7529296875-21.7529296875zM146.75455729166666 386.0247395833333c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625h0.7910156249999999v-21.7529296875h36.38671875c10.678710937499998 0 19.775390625-8.701171874999998 19.775390625-19.775390625s-9.0966796875-19.775390625-19.775390625-19.775390625l-56.953125-0.39550781249999994c-11.07421875 0-19.775390625 8.701171874999998-19.775390625 19.775390625v42.71484374999999c0 9.8876953125 8.701171874999998 18.984374999999996 19.775390625 18.984374999999996z m135.26367187500003-41.92382812499999h98.876953125c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625s-8.701171874999998-19.775390625-19.775390625-19.775390625h-98.876953125c-11.07421875 0-19.775390625 9.0966796875-19.775390625 19.775390625 0 11.07421875 9.0966796875 19.775390625 19.775390625 19.775390625z m177.1875 0h98.876953125c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625s-8.701171874999998-19.775390625-19.775390625-19.775390625h-98.876953125c-11.07421875 0-19.775390625 9.0966796875-19.775390625 19.775390625 0.7910156249999999 11.07421875 8.701171874999998 19.775390625 19.775390625 19.775390625zM774.8209635416665 560.8391927083335c0-11.07421875-8.701171874999998-19.775390625-19.775390625-19.775390625s-19.775390625 8.701171874999998-19.775390625 19.775390625v98.876953125c0 11.07421875 8.701171874999998 19.775390625 19.775390625 19.775390625s19.775390625-8.701171874999998 19.775390625-19.775390625v-98.876953125z m-19.775390625 157.41210937500003c-11.07421875 0-19.775390625 9.0966796875-19.775390625 19.775390625v64.072265625h-79.1015625v1.1865234374999998c-11.07421875 0-19.775390625 8.701171874999998-19.775390625 19.775390625s8.701171874999998 19.775390625 19.775390625 19.775390625h98.876953125c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625V738.8177083333334c0-11.865234374999998-9.0966796875-20.56640625-19.775390625-20.56640625zM581.0221354166666 802.0989583333333L166.52994791666666 801.3079427083333V423.2024739583333h-0.7910156249999999c0-11.07421875-8.701171874999998-19.775390625-19.775390625-19.775390625s-19.775390625 8.701171874999998-19.775390625 19.775390625V821.8743489583334c0 11.07421875 8.701171874999998 19.775390625 19.775390625 19.775390625H579.8356119791666c11.07421875 0 19.775390625-9.0966796875 19.775390625-19.775390625 0-11.07421875-9.0966796875-19.775390625-18.5888671875-19.775390625z",fill:"#e6e6e6","p-id":"6374"}})])])],1),t("li",{on:{click:function(t){return e.setMode("POLYGON")}}},[t("el-tooltip",{attrs:{content:"多边形",effect:"customized",placement:"right"}},[t("svg",{staticClass:"icon",attrs:{height:"30","p-id":"6963",t:"1657850412907",version:"1.1",viewBox:"0 0 1024 1024",width:"30",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M594.8 671.7l120.3 46.9-100.7 80.7z",fill:"#e6e6e6","p-id":"6964"}}),t("path",{attrs:{d:"M591.2 859l-36.4-237.2 223.6 87.1L591.2 859z m43.7-137.3l2.8 18 14.2-11.4-17-6.6z",fill:"#e6e6e6","p-id":"6965"}}),t("path",{attrs:{d:"M810.6 934.7c-8.2 0-16.4-3.1-22.6-9.4L606.7 744.1c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L833.2 880c12.5 12.5 12.5 32.8 0 45.3-6.3 6.3-14.4 9.4-22.6 9.4z",fill:"#e6e6e6","p-id":"6966"}}),t("path",{attrs:{d:"M512.3 905.2H285.9L58.7 511.8l227.2-393.4h454.3l227.1 393.4-105.5 182.7c-8.8 15.3-28.4 20.5-43.7 11.7-15.3-8.8-20.5-28.4-11.7-43.7l87-150.7-190.2-329.4H322.8L132.6 511.8l190.2 329.4h189.5c17.7 0 32 14.3 32 32s-14.3 32-32 32z",fill:"#e6e6e6","p-id":"6967"}})])])],1),t("li",{on:{click:function(t){return e.setMode("ZOOM+")}}},[t("el-tooltip",{attrs:{content:"放大",effect:"customized",placement:"right"}},[t("svg",{staticClass:"icon",attrs:{height:"30","p-id":"7963",t:"1657850484953",version:"1.1",viewBox:"0 0 1024 1024",width:"30",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z",fill:"#e6e6e6","p-id":"7964"}}),t("path",{attrs:{d:"M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z",fill:"#e6e6e6","p-id":"7965"}})])])],1),t("li",{on:{click:function(t){return e.setMode("ZOOM-")}}},[t("el-tooltip",{attrs:{content:"缩小",effect:"customized",placement:"right"}},[t("svg",{staticClass:"icon",attrs:{height:"30","p-id":"8949",t:"1657850524018",version:"1.1",viewBox:"0 0 1024 1024",width:"30",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z",fill:"#e6e6e6","p-id":"8950"}}),t("path",{attrs:{d:"M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z",fill:"#e6e6e6","p-id":"8951"}})])])],1),t("li",{on:{click:e.Revoke}},[t("el-tooltip",{attrs:{content:"撤回",effect:"customized",placement:"right"}},[t("svg",{staticClass:"icon",attrs:{height:"30","p-id":"11141",t:"1657850742419",version:"1.1",viewBox:"0 0 1024 1024",width:"30",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M237.303467 377.216l113.152 106.026667c16.584533 16.763733 33.6512 43.933867 17.066666 60.693333-16.597333 16.759467-39.227733 16.759467-55.816533 0L138.368 368.3968c-13.162667-13.2608-14.122667-34.491733-0.96-47.752533l174.301867-178.2784c16.5888-16.759467 39.223467-16.759467 55.812266 0s-0.477867 43.933867-17.066666 60.689066L238.775467 313.216h380.881066c153.211733 0 276.343467 132.881067 276.343467 285.738667 0 152.853333-123.136 298.845867-276.343467 298.845866H213.457067c-23.317333 0-42.88-10.824533-42.88-34.133333 0-23.313067 19.562667-29.870933 42.88-29.870933h402.816c102.762667 0 215.714133-132.322133 215.714133-234.845867s-112.951467-221.725867-215.714133-221.725867H237.303467z",fill:"#e6e6e6","p-id":"11142"}})])])],1),t("li",{on:{click:e.toggleDrawer}},[t("el-tooltip",{attrs:{content:"设置",effect:"customized",placement:"right"}},[t("svg",{staticClass:"icon",attrs:{height:"30","p-id":"12071",t:"1657850805121",version:"1.1",viewBox:"0 0 1024 1024",width:"30",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M512 697.6c102.4 0 182.4-83.2 182.4-185.6 0-102.4-83.2-185.6-182.4-185.6-102.4 0-182.4 83.2-182.4 185.6C329.6 614.4 412.8 697.6 512 697.6L512 697.6zM512 646.4c-73.6 0-134.4-60.8-134.4-134.4 0-73.6 60.8-134.4 134.4-134.4 73.6 0 134.4 60.8 134.4 134.4C646.4 585.6 585.6 646.4 512 646.4L512 646.4z",fill:"#e6e6e6","p-id":"12072"}}),t("path",{attrs:{d:"M249.015232 843.178592c35.2 28.8 73.6 51.2 112 67.2 41.6-38.4 96-60.8 150.4-60.8 57.6 0 108.8 22.4 150.4 60.8 41.6-16 80-38.4 112-67.2-12.8-54.4-3.2-112 22.4-163.2 28.8-48 73.6-86.4 128-102.4 3.2-22.4 6.4-44.8 6.4-67.2 0-22.4-3.2-44.8-6.4-67.2-54.4-16-99.2-54.4-128-102.4-28.8-48-35.2-108.8-22.4-163.2-35.2-28.8-73.6-51.2-112-67.2-41.6 38.4-92.8 60.8-150.4 60.8-54.4 0-108.8-22.4-150.4-60.8-41.6 16-80 38.4-112 67.2 12.8 54.4 3.2 112-22.4 163.2-28.8 48-73.6 86.4-128 102.4-3.2 22.4-6.4 44.8-6.4 67.2 0 22.4 3.2 44.8 6.4 67.2 54.4 16 99.2 54.4 128 102.4C252.215232 731.178592 261.815232 788.778592 249.015232 843.178592M361.015232 958.378592c-54.4-19.2-105.6-48-150.4-89.6-6.4-6.4-9.6-16-6.4-22.4 16-48 9.6-99.2-16-140.8-25.6-44.8-64-73.6-112-83.2-9.6-3.2-16-9.6-16-19.2-6.4-28.8-9.6-60.8-9.6-89.6 0-28.8 3.2-57.6 9.6-89.6 3.2-9.6 9.6-16 16-19.2 48-12.8 89.6-41.6 112-83.2 25.6-44.8 28.8-92.8 16-140.8-3.2-9.6 0-19.2 6.4-22.4 44.8-38.4 96-67.2 150.4-89.6 9.6-3.2 16 0 22.4 6.4 35.2 35.2 80 57.6 128 57.6 48 0 96-19.2 128-57.6 6.4-6.4 16-9.6 22.4-6.4 54.4 19.2 105.6 48 150.4 89.6 6.4 6.4 9.6 16 6.4 22.4-16 48-9.6 99.2 16 140.8 25.6 44.8 64 73.6 112 83.2 9.6 3.2 16 9.6 16 19.2 6.4 28.8 9.6 60.8 9.6 89.6 0 28.8-3.2 57.6-9.6 89.6-3.2 9.6-9.6 16-16 19.2-48 12.8-89.6 41.6-112 83.2-25.6 44.8-28.8 92.8-16 140.8 3.2 9.6 0 19.2-6.4 22.4-44.8 38.4-96 67.2-150.4 89.6-9.6 3.2-16 0-22.4-6.4-35.2-35.2-80-57.6-128-57.6-48 0-96 19.2-128 57.6-3.2 3.2-9.6 6.4-16 6.4C364.215232 958.378592 361.015232 958.378592 361.015232 958.378592z",fill:"#e6e6e6","p-id":"12073"}})])])],1)]),t("div",{ref:"map",attrs:{id:"map"}}),t("el-drawer",{attrs:{visible:e.drawerFlag,"custom-class":"drawerAl",direction:"rtl",title:"设置参数"},on:{"update:visible":function(t){e.drawerFlag=t}}},[t("el-form",{attrs:{model:e.formLabelAlign,rules:e.rules}},[t("el-form-item",{attrs:{label:"标注文字"}},[t("el-input",{attrs:{clearable:"",placeholder:"Please input"},model:{value:e.formLabelAlign.input,callback:function(t){e.$set(e.formLabelAlign,"input",t)},expression:"formLabelAlign.input"}})],1),t("el-form-item",{attrs:{label:"绘制线边框粗细"}},[t("el-input-number",{attrs:{max:5,min:1,"controls-position":"right"},model:{value:e.formLabelAlign.borderwidth,callback:function(t){e.$set(e.formLabelAlign,"borderwidth",t)},expression:"formLabelAlign.borderwidth"}})],1),t("el-form-item",{attrs:{label:"绘制线"}},[t("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.formLabelAlign.bordercolor,callback:function(t){e.$set(e.formLabelAlign,"bordercolor",t)},expression:"formLabelAlign.bordercolor"}})],1),t("el-form-item",{attrs:{label:"文字字体颜色"}},[t("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.formLabelAlign.fontColor,callback:function(t){e.$set(e.formLabelAlign,"fontColor",t)},expression:"formLabelAlign.fontColor"}})],1),t("el-form-item",{attrs:{label:"文字背景颜色"}},[t("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.formLabelAlign.fontbgColor,callback:function(t){e.$set(e.formLabelAlign,"fontbgColor",t)},expression:"formLabelAlign.fontbgColor"}})],1),t("el-form-item",{attrs:{label:"文字边框颜色"}},[t("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.formLabelAlign.fontborderColor,callback:function(t){e.$set(e.formLabelAlign,"fontborderColor",t)},expression:"formLabelAlign.fontborderColor"}})],1)],1)],1),t("div",{staticClass:"btnlist"},[t("el-button",{attrs:{type:"success"},on:{click:e.saveData}},[e._v("保 存")]),t("el-button",{attrs:{type:"success"},on:{click:e.closewindows}},[e._v("返 回")])],1)],1)},i=[],s=(a("14d9"),a("7e66")),o=a.n(s),l=a("26c4"),n=a("a1e9"),c=a("3f19"),h=a.n(c),d=(a("d8ad"),{name:"AILabel",data(){return{data:this.$route.query,listQuery:{imageID:this.$route.query.imageID,annotaterID:this.$route.query.annotaterID,annotationResult:""},gMap:null,gFirstImageLayer:null,gFirstFeatureLayer:null,gFirstTextLayer:null,drawingStyle:{},allFeatures:[],imgList:[{id:1,src:"http://localhost:9000"+this.$route.query.path,width:1920,height:1080,zoom:5e3}],drawerFlag:!1,formLabelAlign:{input:"text",borderwidth:1,bordercolor:"#00f",fontColor:"#0f0",fontbgColor:"#F4A460",fontborderColor:"#D2691E"},rules:{input:[{required:!0,message:"请输入需要标注的文字！",trigger:"blur"}]},oldfeature:null,imglistInedx:0}},methods:{toggleDrawer(){console.log(123),this.drawerFlag=!0,this.gMap.setMode("PAN")},closewindows(){window.opener=null,window.open("about:blank","_top").close()},pre(){0!=this.imglistInedx&&(this.imglistInedx-=1,this.switchImage(this.imgList[this.imglistInedx]),this.EchoData())},next(){this.imglistInedx!=this.imgList.length-1&&(this.imglistInedx+=1,this.switchImage(this.imgList[this.imglistInedx]),this.EchoData())},initMap(){this.gMap=new o.a.Map("map",{center:{x:960,y:540},zoom:800,mode:"PAN",refreshDelayWhenZooming:!0,zoomWhenDrawing:!0,panWhenDrawing:!1}),this.eventMaps(),this.switchImage(this.imgList[0]),this.gFirstFeatureLayer=new o.a.Layer.Feature("first-layer-feature",{name:"第一个矢量图层"},{zIndex:10}),this.gFirstTextLayer=new o.a.Layer.Text("first-layer-text",{name:"第一个文本图层"},{zIndex:12,opacity:1}),this.gMap.addLayer(this.gFirstTextLayer),this.gMap.addLayer(this.gFirstFeatureLayer),this.EchoData()},EchoData(){if(localStorage.getItem("gMapData")){let{newallFeatures:e,newalllText:t}=JSON.parse(localStorage.getItem("gMapData"))[this.imgList[this.imglistInedx].id]?JSON.parse(localStorage.getItem("gMapData"))[this.imgList[this.imglistInedx].id]:{newallFeatures:[],newalllText:[]};t.forEach(({id:e,props:t,textInfo:a,style:r})=>{const i=new o.a.Text(e,{...a},{...t},{...r});this.gFirstTextLayer.addText(i)}),e.forEach(({id:e,props:t,shape:a,style:r,type:i})=>{if("RECT"===i){const i=new o.a.Feature.Rect(e,a,t,r);this.gFirstFeatureLayer.addFeature(i)}else if("POLYGON"===i){const i=new o.a.Feature.Polygon(e,a,t,r);this.gFirstFeatureLayer.addFeature(i)}})}},getCenter(e=[]){let t={x:0,y:0},a=e.length;if(a){let r=0,i=0;e.forEach(e=>{r+=e.x,i+=e.y}),t.x=r/a,t.y=i/a}return t},isPOLYGON(e=[],t,a){let r=!0;return e.forEach(e=>{r&&(e.x<0||e.x>t||e.y<0||e.y>a)&&(r=!1)}),r},eventMaps(){let e=this.gMap;e.events.on("drawDone",(e,t)=>{let{width:a,height:r}=this.gFirstImageLayer.imageInfo;const i="label-text-id-"+ +new Date,s="label-marker-id-"+ +new Date;if("RECT"===e){if(t.x<0||t.y<0||t.width+t.x>=a||t.height+t.y>=r)return void this.$message.error("超出边界!");const e=new o.a.Feature.Rect(""+ +new Date,t,{name:"RECT",textId:i,deleteMarkerId:s},this.drawingStyle);this.gFirstFeatureLayer.addFeature(e);const{x:l,y:n}=t,c=new o.a.Text(i,{text:this.formLabelAlign.input,position:{x:l,y:n},offset:{x:0,y:0}},{name:"text",textId:i,deleteMarkerId:s},{fillStyle:this.formLabelAlign.fontbgColor,strokeStyle:this.formLabelAlign.fontborderColor,background:!0,globalAlpha:1,fontColor:this.formLabelAlign.fontColor});this.gFirstTextLayer.addText(c)}else if("POLYGON"===e){if(!this.isPOLYGON(t,a,r))return void this.$message.error("超出边界!");const e=new o.a.Feature.Polygon(""+ +new Date,{points:t},{name:"POLYGON",textId:i,deleteMarkerId:s},this.drawingStyle);this.gFirstFeatureLayer.addFeature(e);const{x:l,y:n}=this.getCenter(t),c=new o.a.Text(i,{text:this.formLabelAlign.input,position:{x:l,y:n},offset:{x:-10,y:-10}},{name:"text"},{fillStyle:this.formLabelAlign.fontbgColor,strokeStyle:this.formLabelAlign.fontborderColor,background:!0,globalAlpha:1,fontColor:this.formLabelAlign.fontColor});this.gFirstTextLayer.addText(c)}}),e.events.on("featureSelected",t=>{this.oldfeature=t,e.setActiveFeature(t);const a=t.props.deleteMarkerId,r=t.props.textId,i=e.markerLayer.getMarkerById(a);if("RECT"===t.type){if(i)return;const s=new o.a.Marker(a,{src:"@/assets/images/delicon.jpg",position:t.getPoints()[1],offset:{x:-35,y:-5},width:30,height:30},{name:"delIcon"});s.events.on("click",a=>{e.markerLayer.removeMarkerById(a.id),this.gFirstTextLayer.removeTextById(r),this.gFirstFeatureLayer.removeFeatureById(t.id)}),e.markerLayer.addMarker(s)}else{const a=t.props.deleteMarkerId,i=new o.a.Marker(a,{src:h.a,position:this.getCenter(t.shape.points),offset:{x:0,y:-20},width:30,height:30},{name:"delIcon"});i.events.on("click",a=>{e.markerLayer.removeMarkerById(a.id),this.gFirstTextLayer.removeTextById(r),this.gFirstFeatureLayer.removeFeatureById(t.id)}),e.markerLayer.addMarker(i)}}),e.events.on("featureUnselected",t=>{e.setActiveFeature(null),e.markerLayer.removeMarkerById(t.props.deleteMarkerId)}),e.events.on("featureUpdated",(e,t)=>{if("RECT"===e.type){let{width:a,height:r}=this.gFirstImageLayer.imageInfo,i=t;if(i.x<0||i.y<0||i.width+i.x>=a||i.height+i.y>=r)return e.updateShape(this.oldfeature.shape),void this.$message.error("超出边界!");e.updateShape(t);const s=e.props.deleteMarkerId,o=e.props.textId,l=this.gMap.markerLayer.getMarkerById(s);l.updatePosition(e.getPoints()[1]);const n=this.gFirstTextLayer.getTextById(o);console.log("--targetText--",n),n.updatePosition(e.getPoints()[0])}else if("POLYGON"===e.type){let{width:a,height:r}=this.gFirstImageLayer.imageInfo;if(!this.isPOLYGON(t.points,a,r))return e.updateShape(this.oldfeature.shape),void this.$message.error("超出边界!");e.updateShape(t);const i=e.props.deleteMarkerId,s=e.props.textId,o=this.gMap.markerLayer.getMarkerById(i);o.updatePosition(this.getCenter(t.points));const l=this.gFirstTextLayer.getTextById(s);l.updatePosition(this.getCenter(t.points))}})},switchImage(e){const t=e.src;this.gFirstImageLayer&&this.gMap.removeLayerById("first-layer-image"),this.gFirstTextLayer&&this.gFirstTextLayer.removeAllTexts(),this.gFirstFeatureLayer&&this.gFirstFeatureLayer.removeAllFeatures(),this.gMap.markerLayer.removeAllMarkers(),this.gFirstImageLayer=new o.a.Layer.Image("first-layer-image",{src:t,width:e.width,height:e.height,position:{x:0,y:0}},{name:"layer-image"},{zIndex:5}),this.gMap.addLayer(this.gFirstImageLayer),this.gMap.centerAndZoom({center:{x:e.width/2,y:e.height/2},zoom:e.zoom})},setMode(e){switch(e){case"PAN":this.gMap.setMode(e);break;case"RECT":this.gMap.setMode(e),this.drawingStyle={strokeStyle:this.formLabelAlign.bordercolor,lineWidth:this.formLabelAlign.borderwidth},this.gMap.setDrawingStyle(this.drawingStyle);break;case"POLYGON":this.gMap.setMode(e),this.drawingStyle={strokeStyle:this.formLabelAlign.bordercolor,lineWidth:this.formLabelAlign.borderwidth},this.gMap.setDrawingStyle(this.drawingStyle);break;case"ZOOM+":this.gMap.zoomIn();break;case"ZOOM-":this.gMap.zoomOut();break;default:break}},getFeatures(){this.allFeatures=this.gFirstFeatureLayer.getAllFeatures()},Revoke(){this.getFeatures(),this.allFeatures.length&&(this.gFirstTextLayer.removeTextById(this.allFeatures[this.allFeatures.length-1].props.textId),this.allFeatures.pop(),this.gMap.refresh())},async exportImgeBlob(){const e=await this.gMap.exportLayersToImage({x:0,y:0,width:1920,height:1080},{type:"blob",format:"image/png"}),t=document.createElement("a"),a=window.URL.createObjectURL(e),r="test";t.href=a,t.download=r,t.click(),window.URL.revokeObjectURL(a),this.$message.success("下载成功")},saveData(){const e=Object(n["a"])(this.gFirstFeatureLayer.getAllFeatures()),t=Object(n["a"])(this.gFirstTextLayer.getAllTexts());let a=[],r=[];t.forEach(({props:e,type:t,style:r,textInfo:i,id:s})=>{a.push(Object.assign({},{props:e,type:t,style:r,textInfo:i,id:s}))}),e.forEach(({props:e,type:t,style:a,shape:i,id:s})=>{r.push(Object.assign({},{props:e,type:t,style:a,shape:i,id:s}))}),this.listQuery.annotationResult=JSON.stringify({[this.imgList[this.imglistInedx].id]:{newalllText:a,newallFeatures:r}}),console.log("annotationResult:",this.listQuery.annotationResult),Object(l["a"])(this.listQuery).then(e=>{const t=e.data;console.log("上传标注返回数据：",t),e.code>=200&&e.code<300&&(this.$message({type:"success",message:"上传成功!"}),localStorage.setItem("_refreshAnnotater",Math.random()),window.opener=null,window.open("about:blank","_top").close())}).catch(()=>{this.$message({message:"上传失败！",type:"warning"})}),console.log(JSON.stringify({[this.imgList[this.imglistInedx].id]:{newalllText:a,newallFeatures:r}}))}},mounted(){this.initMap()},destroyed(){this.gMap.destroyed()}}),g=d,p=(a("b45e"),a("2877")),u=Object(p["a"])(g,r,i,!1,null,null,null);t["default"]=u.exports},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},b45e:function(e,t,a){"use strict";a("ba71")},ba71:function(e,t,a){},d8ad:function(e,t,a){"use strict";var r=a("8bbf"),i=a.n(r);new i.a}}]);