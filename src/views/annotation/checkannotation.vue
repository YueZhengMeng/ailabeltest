<template>
  <div class="AILabel">
    <ul class="toolbar">
      <li @click="setMode('PAN')">
        <el-tooltip content="平移" effect="customized" placement="right">
          <svg
            class="icon"
            height="50"
            p-id="2275"
            t="1657849698286"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M486.4 776.533333v-213.333333H247.466667v106.666667L85.333333 512l162.133334-162.133333V512h238.933333V247.466667H349.866667L512 85.333333l162.133333 162.133334h-132.266666V512h238.933333V349.866667L938.666667 512l-162.133334 162.133333v-106.666666h-238.933333v213.333333h132.266667L512 938.666667l-162.133333-162.133334h136.533333z"
              fill="#e6e6e6"
              p-id="2276"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="setMode('ZOOM+')">
        <el-tooltip content="放大" effect="customized" placement="right">
          <svg
            class="icon"
            height="30"
            p-id="7963"
            t="1657850484953"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"
              fill="#e6e6e6"
              p-id="7964"
            ></path>
            <path
              d="M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z"
              fill="#e6e6e6"
              p-id="7965"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="setMode('ZOOM-')">
        <el-tooltip content="缩小" effect="customized" placement="right">
          <svg
            class="icon"
            height="30"
            p-id="8949"
            t="1657850524018"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"
              fill="#e6e6e6"
              p-id="8950"
            ></path>
            <path
              d="M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z"
              fill="#e6e6e6"
              p-id="8951"
            ></path>
          </svg>
        </el-tooltip>
      </li>
    </ul>
    <div id="map" ref="map"></div>
    <!-- 抽屉  -->
    <div class="btnlist">
      <el-button type="success" @click="checkpass">通过</el-button>
      <el-button type="success" @click="uncheckpass">不通过</el-button>
    </div>
  </div>
</template>

<script>
import AILabel from "ailabel";
import { getAnnotationByImageID } from "@/api/user";
import { checkAnnotation } from "@/api/checker";
import { toRaw } from "@vue/reactivity";
import delicon from "@/assets/img/delicon.jpg";

export default {
  name: "AILabel",
  data() {
    return {
      data: this.$route.query,
      listQuery: {
        imageID: this.$route.query.imageID,
        annotationID: this.$route.query.annotationID,
        userID: this.$route.query.userID,
        path: this.$route.query.path,
        annotationResult: "",
        description: "",
      },

      gMap: null,
      gFirstImageLayer: null,
      gFirstFeatureLayer: null,
      gFirstTextLayer: null,
      drawingStyle: {},
      allFeatures: [],
      imgList: [
        {
          id: 1,
          // src: require('../../assets/img/delicon.jpg'),
          src: process.env.VUE_APP_BASE_API + this.$route.query.path,
          // src: delicon,
          width: 1920,
          height: 1080,
          zoom: 5000,
        },
        // {
        //   id: 2,
        //   // src: require('../assets/images/delicon.jpg'),
        //   src: delicon,
        //   width: 1920,
        //   height: 1080,
        //   zoom: 4500,
        // },
      ],
      drawerFlag: false,
      formLabelAlign: {
        input: "text",
        borderwidth: 1,
        bordercolor: "#00f",
        fontColor: "#0f0",
        fontbgColor: "#F4A460",
        fontborderColor: "#D2691E",
      },
      rules: {
        input: [
          {
            required: true,
            message: "请输入需要标注的文字！",
            trigger: "blur",
          },
        ],
      },
      oldfeature: null,
      imglistInedx: 0,
    };
  },
  methods: {
    toggleDrawer() {
      console.log(123);
      this.drawerFlag = true;
      this.gMap.setMode("PAN");
    },

    uncheckpass() {
      // annotationID
      // checkerID
      // checkOpinion
      // checkResult 2
      
      let data = {
        annotationID : this.listQuery.annotationID,
        checkerID : this.listQuery.userID,
        checkOpinion : this.listQuery.checkOpinion,
        checkResult : 2
      }

      checkAnnotation(data).then(res => {
        console.log("checkAnnotation",res)
        // const data = res.data
        localStorage.setItem("_refreshChecker", Math.random())
        window.opener = null;
        window.open("about:blank", "_top").close() 

      })
       
    },
    checkpass() {
      // annotationID
      // checkerID
      // checkOpinion
      // checkResult 1
      let data = {
        annotationID : this.listQuery.annotationID,
        checkerID : this.listQuery.userID,
        checkOpinion : this.listQuery.checkOpinion,
        checkResult : 1
      }

      checkAnnotation(data).then(res => {
        console.log("checkAnnotation",res)
        // const data = res.data
        localStorage.setItem("_refreshChecker", Math.random())
        window.opener = null;
        window.open("about:blank", "_top").close() 

      })
    },
    /**
     * @author 李正阳
     * @method pre 上一张
     */
    pre() {
      if (this.imglistInedx != 0) {
        this.imglistInedx -= 1;
        this.switchImage(this.imgList[this.imglistInedx]);
        this.EchoData();
      }
    },
    /**
     * @author 李正阳
     * @method pre 下一张
     */
    next() {
      if (this.imglistInedx != this.imgList.length - 1) {
        this.imglistInedx += 1;
        this.switchImage(this.imgList[this.imglistInedx]);
        this.EchoData();
      }
    },
    /**
     * @author 李正阳
     * @method initMap 初始化地图
     */
    initMap() {
      this.gMap = new AILabel.Map("map", {
        center: {
          x: 960,
          y: 540,
        }, // 为了让图片居中
        zoom: 800,
        mode: "PAN", // 绘制线段
        refreshDelayWhenZooming: true, // 缩放时是否允许刷新延时，性能更优
        zoomWhenDrawing: true,
        panWhenDrawing: false,
      });
      this.eventMaps();
      this.switchImage(this.imgList[0]);
      this.gFirstFeatureLayer = new AILabel.Layer.Feature(
        "first-layer-feature", // id
        { name: "第一个矢量图层" }, // props
        { zIndex: 10 } // style
      );
      this.gFirstTextLayer = new AILabel.Layer.Text(
        "first-layer-text", // id
        { name: "第一个文本图层" }, // props
        {
          zIndex: 12,
          opacity: 1,
        } // style
      );
      this.gMap.addLayer(this.gFirstTextLayer);
      this.gMap.addLayer(this.gFirstFeatureLayer);
      // 回显
      this.EchoData();
    },

    /**
     * @author 李正阳
     * @method EchoData 回显数据
     */
    EchoData() {
      getAnnotationByImageID(this.listQuery).then(res => {
        // console.log("getAnnotationByImageID",res)
        const data = res.data
        this.listQuery.annotationResult = data[data.length-1].annotationResult

        let { newallFeatures, newalllText } = JSON.parse(
          //todo 显示接口
          this.listQuery.annotationResult
        )[this.imgList[this.imglistInedx].id]
          ? JSON.parse(this.listQuery.annotationResult)[
              this.imgList[this.imglistInedx].id
            ]
          : {
              newallFeatures: [],
              newalllText: [],
            };


        newalllText.forEach(({ id, props, textInfo, style }) => {
          const gFirstText = new AILabel.Text(
            id, // id
            {
              ...textInfo,
            }, // shape, 左上角
            {
              ...props,
            }, // props
            {
              ...style,
            }
          );
          this.gFirstTextLayer.addText(gFirstText);
        });

        newallFeatures.forEach(({ id, props, shape, style, type }) => {
          if (type === "RECT") {
            const rectFeature = new AILabel.Feature.Rect(
              id, // id
              shape, // shape
              props,
              style
            );
            this.gFirstFeatureLayer.addFeature(rectFeature);
          } else if (type === "POLYGON") {
            const polygonFeature = new AILabel.Feature.Polygon(
              id, // id
              shape, // shape
              props, // props
              style // style
            );
            this.gFirstFeatureLayer.addFeature(polygonFeature);
          }
        });

      })

    },


    /**
     * @author 李正阳
     * @method getCenter 获取一组坐标的中心点
     * @param {Array} points 坐标集合
     * @returns {Object} 中心点
     */
    getCenter(points = []) {
      let center = {
        x: 0,
        y: 0,
      };
      let len = points.length;
      if (len) {
        let lat = 0,
          lng = 0;
        points.forEach((point) => {
          lat += point.x;
          lng += point.y;
        });
        center.x = lat / len;
        center.y = lng / len;
      }

      return center;
    },

    /**
     * @author 李正阳
     * @method getCenter 获取一组坐标的中心点
     * @param {Array} points 坐标集合
     * @param {Number} w 图片宽度
     * @param {Number} h 图片高度
     * @returns
     */
    isPOLYGON(points = [], w, h) {
      let flag = true;
      points.forEach((point) => {
        if (
          flag &&
          (point.x < 0 || point.x > w || point.y < 0 || point.y > h)
        ) {
          flag = false;
        }
      });
      return flag;
    },

    /**
     * @author 李正阳
     * @method eventMaps 地图事件
     */
    eventMaps() {
      let gMap = this.gMap;
      gMap.events.on("drawDone", (type, data) => {
        // 判断是否超出边界
        let { width, height } = this.gFirstImageLayer.imageInfo;
        const relatedTextId = `label-text-id-${+new Date()}`;
        const relatedDeleteMarkerId = `label-marker-id-${+new Date()}`;
        if (type === "RECT") {
          if (
            data.x < 0 ||
            data.y < 0 ||
            data.width + data.x >= width ||
            data.height + data.y >= height
          ) {
            this.$message.error("超出边界!");
            return;
          }
          // 添加feature
          const rectFeature = new AILabel.Feature.Rect(
            `${+new Date()}`, // id
            data, // shape
            {
              name: "RECT",
              textId: relatedTextId,
              deleteMarkerId: relatedDeleteMarkerId,
            },
            this.drawingStyle
          );
          this.gFirstFeatureLayer.addFeature(rectFeature);
          // 添加feature标签名
          const { x: ltx, y: lty } = data;
          const gFirstText = new AILabel.Text(
            relatedTextId, // id
            {
              text: this.formLabelAlign.input,
              position: {
                x: ltx,
                y: lty,
              },
              offset: {
                x: 0,
                y: 0,
              },
            }, // shape, 左上角
            {
              name: "text",
              textId: relatedTextId,
              deleteMarkerId: relatedDeleteMarkerId,
            }, // props
            {
              fillStyle: this.formLabelAlign.fontbgColor,
              strokeStyle: this.formLabelAlign.fontborderColor,
              background: true,
              globalAlpha: 1,
              fontColor: this.formLabelAlign.fontColor,
            }
          );
          this.gFirstTextLayer.addText(gFirstText);
        } else if (type === "POLYGON") {
          if (!this.isPOLYGON(data, width, height)) {
            this.$message.error("超出边界!");
            return;
          }
          const polygonFeature = new AILabel.Feature.Polygon(
            `${+new Date()}`, // id
            { points: data }, // shape
            {
              name: "POLYGON",
              textId: relatedTextId,
              deleteMarkerId: relatedDeleteMarkerId,
            }, // props
            this.drawingStyle // style
          );
          this.gFirstFeatureLayer.addFeature(polygonFeature);
          // 添加feature标签名
          const { x: ltx, y: lty } = this.getCenter(data);
          const gFirstText = new AILabel.Text(
            relatedTextId, // id
            {
              text: this.formLabelAlign.input,
              position: {
                x: ltx,
                y: lty,
              },
              offset: {
                x: -10,
                y: -10,
              },
            }, // shape, 左上角
            { name: "text" }, // props
            {
              fillStyle: this.formLabelAlign.fontbgColor,
              strokeStyle: this.formLabelAlign.fontborderColor,
              background: true,
              globalAlpha: 1,
              fontColor: this.formLabelAlign.fontColor,
            }
          );
          this.gFirstTextLayer.addText(gFirstText);
        }
      });
      gMap.events.on("featureSelected", (feature) => {
        // 记录点击时的位置，用来判断是移动出界的话回显刚刚的操作
        this.oldfeature = feature;
        // 高亮选中feature
        gMap.setActiveFeature(feature);
        const markerId = feature.props.deleteMarkerId;
        const textId = feature.props.textId;
        const mappedMarker = gMap.markerLayer.getMarkerById(markerId);
        if (feature.type === "RECT") {
          if (mappedMarker) {
            return;
          }
          // 添加delete-icon
          const gFirstMarker = new AILabel.Marker(
            markerId, // id
            {
              // src: require('../assets/images/delicon.jpg'),
              src: "@/assets/images/delicon.jpg",
              position: feature.getPoints()[1], // 矩形右上角
              offset: {
                x: -35,
                y: -5,
              },
              width: 30,
              height: 30,
            }, // markerInfo
            { name: "delIcon" } // props
          );
          gFirstMarker.events.on("click", (marker) => {
            // 首先删除当前marker
            gMap.markerLayer.removeMarkerById(marker.id);
            // 删除对应text
            this.gFirstTextLayer.removeTextById(textId);
            // 删除对应feature
            this.gFirstFeatureLayer.removeFeatureById(feature.id);
          });
          gMap.markerLayer.addMarker(gFirstMarker);
        } else {
          const markerId = feature.props.deleteMarkerId;
          const gFirstMarker = new AILabel.Marker(
            markerId, // id
            {
              // src: require('../assets/images/delicon.jpg'),
              src: delicon,
              position: this.getCenter(feature.shape.points), // 矩形右上角
              offset: {
                x: 0,
                y: -20,
              },
              width: 30,
              height: 30,
            }, // markerInfo
            { name: "delIcon" } // props
          );
          gFirstMarker.events.on("click", (marker) => {
            // 首先删除当前marker
            gMap.markerLayer.removeMarkerById(marker.id);
            // 删除对应text
            this.gFirstTextLayer.removeTextById(textId);
            // 删除对应feature
            this.gFirstFeatureLayer.removeFeatureById(feature.id);
          });
          gMap.markerLayer.addMarker(gFirstMarker);
        }
      });
      gMap.events.on("featureUnselected", (feature) => {
        gMap.setActiveFeature(null);
        gMap.markerLayer.removeMarkerById(feature.props.deleteMarkerId);
      });
      gMap.events.on("featureUpdated", (feature, shape) => {
        if (feature.type === "RECT") {
          // 判断是否超出边界
          let { width, height } = this.gFirstImageLayer.imageInfo;
          let data = shape;
          if (
            data.x < 0 ||
            data.y < 0 ||
            data.width + data.x >= width ||
            data.height + data.y >= height
          ) {
            feature.updateShape(this.oldfeature.shape);
            this.$message.error("超出边界!");
            return;
          }
          feature.updateShape(shape);
          const markerId = feature.props.deleteMarkerId;
          const textId = feature.props.textId;
          // 更新marker位置
          const targetMarker = this.gMap.markerLayer.getMarkerById(markerId);
          targetMarker.updatePosition(feature.getPoints()[1]);
          // 更新text位置
          const targetText = this.gFirstTextLayer.getTextById(textId);
          console.log("--targetText--", targetText);
          targetText.updatePosition(feature.getPoints()[0]);
        } else if (feature.type === "POLYGON") {
          let { width, height } = this.gFirstImageLayer.imageInfo;
          if (!this.isPOLYGON(shape.points, width, height)) {
            feature.updateShape(this.oldfeature.shape);
            this.$message.error("超出边界!");
            return;
          }
          feature.updateShape(shape);
          const markerId = feature.props.deleteMarkerId;
          const textId = feature.props.textId;
          const targetMarker = this.gMap.markerLayer.getMarkerById(markerId);
          targetMarker.updatePosition(this.getCenter(shape.points));
          // 更新text位置
          const targetText = this.gFirstTextLayer.getTextById(textId);
          targetText.updatePosition(this.getCenter(shape.points));
        }
      });
    },

    /**
     * @author 李正阳
     * @method switchImage 添加图片
     * @param imgObj 图片详细信息
     */
    switchImage(imgObj) {
      const initImage = imgObj.src;
      this.gFirstImageLayer && this.gMap.removeLayerById("first-layer-image");
      this.gFirstTextLayer && this.gFirstTextLayer.removeAllTexts();
      this.gFirstFeatureLayer && this.gFirstFeatureLayer.removeAllFeatures();
      this.gMap.markerLayer.removeAllMarkers();
      // 实例化图片层
      this.gFirstImageLayer = new AILabel.Layer.Image(
        "first-layer-image", // id
        {
          src: initImage,
          width: imgObj.width,
          height: imgObj.height,
          position: {
            x: 0,
            y: 0,
          },
        },
        { name: "layer-image" },
        { zIndex: 5 }
      );
      this.gMap.addLayer(this.gFirstImageLayer);
      this.gMap.centerAndZoom({
        center: {
          x: imgObj.width / 2,
          y: imgObj.height / 2,
        },
        zoom: imgObj.zoom,
      });
    },

    /**
     * @author 李正阳
     * @param mode 地图事件参数
     * @method setMode 设置地图当前状态
     */
    setMode(mode) {
      switch (mode) {
        case "PAN":
          this.gMap.setMode(mode);
          break;
        case "RECT":
          this.gMap.setMode(mode);
          this.drawingStyle = {
            strokeStyle: this.formLabelAlign.bordercolor,
            lineWidth: this.formLabelAlign.borderwidth,
          };
          this.gMap.setDrawingStyle(this.drawingStyle);
          break;
        case "POLYGON":
          this.gMap.setMode(mode);
          this.drawingStyle = {
            strokeStyle: this.formLabelAlign.bordercolor,
            lineWidth: this.formLabelAlign.borderwidth,
          };
          this.gMap.setDrawingStyle(this.drawingStyle);
          break;
        case "ZOOM+":
          this.gMap.zoomIn();
          break;
        case "ZOOM-":
          this.gMap.zoomOut();
          break;
        default:
          break;
      }
    },

    /**
     * @author 李正阳
     * @method getFeatures 获取所有features
     */
    getFeatures() {
      this.allFeatures = this.gFirstFeatureLayer.getAllFeatures();
    },

    /**
     * @author 李正阳
     * @method Revoke 撤销
     */
    Revoke() {
      this.getFeatures();
      if (this.allFeatures.length) {
        this.gFirstTextLayer.removeTextById(
          this.allFeatures[this.allFeatures.length - 1].props.textId
        );
        this.allFeatures.pop();
        this.gMap.refresh(); // 刷新map
      }
    },

    /**
     * @author 李正阳
     * @method exportImgeBlob 将图片导出成Blob
     */
    async exportImgeBlob() {
      const blob = await this.gMap.exportLayersToImage(
        {
          x: 0,
          y: 0,
          width: 1920,
          height: 1080,
        },
        {
          type: "blob",
          format: "image/png",
        }
      );
      const a = document.createElement("a");
      const url = window.URL.createObjectURL(blob);
      const filename = "test";
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
      this.$message.success("下载成功");
    },

    /**
     * @author 李正阳
     * @method saveData 保存数据
     */
    saveData() {
      // 标注数据
      const allFeatures = toRaw(this.gFirstFeatureLayer.getAllFeatures());
      const alllText = toRaw(this.gFirstTextLayer.getAllTexts());
      let newalllText = [];
      let newallFeatures = [];
      alllText.forEach(({ props, type, style, textInfo, id }) => {
        newalllText.push(
          Object.assign(
            {},
            {
              props,
              type,
              style,
              textInfo,
              id,
            }
          )
        );
      });
      allFeatures.forEach(({ props, type, style, shape, id }) => {
        newallFeatures.push(
          Object.assign(
            {},
            {
              props,
              type,
              style,
              shape,
              id,
            }
          )
        );
      });

      // if (localStorage.getItem("gMapData")) {
      //   let data = JSON.parse(localStorage.getItem("gMapData"));

      //   data[this.imgList[this.imglistInedx].id] = {
      //     newalllText,
      //     newallFeatures,
      //   };
      //   // localStorage.setItem('gMapData', JSON.stringify(data))
      //   // todo 调用接口保存json数据
      //   this.listQuery.annotationResult = JSON.stringify({
      //     [this.imgList[this.imglistInedx].id]: {
      //       newalllText,
      //       newallFeatures,
      //     },
      //   });


      //   console.log("annotationResult:", this.listQuery.annotationResult);
      //   addAnnotation(this.listQuery)
      //     .then((res) => {
      //       const data = res.data;

      //       console.log("上传标注返回数据：", data);

      //       if (res.code >= 200 && res.code < 300) {
      //         // this.total = data.length
      //         // this.tableData = data
      //         // console.log("total",this.total)
      //         // console.log("total",this.tableData)
      //         this.$message({
      //           type: "success",
      //           message: "上传成功!",
      //         });
      //       }
      //     })
      //     .catch(() => {
      //       this.$message({
      //         message: "上传失败！",
      //         type: "warning",
      //       });
      //     });
      // } else {

        // todo 调用接口保存json数据
        this.listQuery.annotationResult = JSON.stringify({
          [this.imgList[this.imglistInedx].id]: {
            newalllText,
            newallFeatures,
          },
        });
        console.log("annotationResult:", this.listQuery.annotationResult);
        addAnnotation(this.listQuery)
          .then((res) => {
            const data = res.data;

            console.log("上传标注返回数据：", data);

            if (res.code >= 200 && res.code < 300) {
              // this.total = data.length
              // this.tableData = data
              // console.log("total",this.total)
              // console.log("total",this.tableData)
              this.$message({
                type: "success",
                message: "上传成功!",
              });
            }
          })
          .catch(() => {
            this.$message({
              message: "上传失败！",
              type: "warning",
            });
          });
      
      console.log(
        JSON.stringify({
          [this.imgList[this.imglistInedx].id]: {
            newalllText,
            newallFeatures,
          },
        })
      );
      // console.log(this.data)
      // this.$message.success("保存成功");
    },
  },
  mounted() {
    this.initMap();
  },
  destroyed() {
    this.gMap.destroyed();
  },
};
</script>

<style>
.AILabel {
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  overflow: hidden;
}

.AILabel .toolbar {
  width: 35px;
  background-color: #2b2b2b;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  z-index: 999;
  transform: translate(0%, -50%);
  padding-left: 10px;
}

.AILabel .toolbar > li {
  width: 20px;
  height: 50px;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.AILabel #map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}

.AILabel #map::after {
  content: " ";
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: URL("../../assets/img/bg.jpg");
  background-color: #666666;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.1;
  filter: blur(5px);
}

.el-popper .is-customized {
  padding: 6px 12px;
  background: linear-gradient(90deg, #535353, #666666);
  font-weight: 550;
}

.el-popper .is-customized.el-popper__arrow::before {
  background: linear-gradient(45deg, #535353, #666666);
  right: 0;
}

.drawerAl {
  background-color: #191c1e;
  color: #e6e6e6;
}

.drawerAl .el-drawer__header,
.drawerAl .el-drawer__body,
.drawerAl .el-form-item,
.drawerAl .el-form-item__label {
  color: #e6e6e6;
}

.drawerAl .el-form-item {
  width: 300px;
}

.drawerAl .el-form-item .el-form-item__label {
  width: 120px;
}

.btnlist {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
  position: fixed;
  bottom: 0px;
  z-index: 999;
  padding: 0px 20px;
}

.btnlist > span {
  font-size: 18px;
  font-weight: 550;
  color: #e6e6e6;
  flex: 0.85;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
