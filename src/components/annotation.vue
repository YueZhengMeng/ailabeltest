<template>
  <div class="AILabel">
    <ul class="toolbar">
      <li @click="setMode('PAN')">
        <el-tooltip content="平移" effect="customized" placement="right">
          <svg
            t="1657849698286"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2275"
            width="30"
            height="30"
          >
            <path
              d="M486.4 776.533333v-213.333333H247.466667v106.666667L85.333333 512l162.133334-162.133333V512h238.933333V247.466667H349.866667L512 85.333333l162.133333 162.133334h-132.266666V512h238.933333V349.866667L938.666667 512l-162.133334 162.133333v-106.666666h-238.933333v213.333333h132.266667L512 938.666667l-162.133333-162.133334h136.533333z"
              p-id="2276"
              fill="#e6e6e6"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="setMode('RECT')">
        <el-tooltip content="矩形" effect="customized" placement="right">
          <svg
            t="1657850246358"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6373"
            width="30"
            height="30"
          >
            <path
              d="M876.4664713541666 302.9680989583333H776.4029947916665V202.90462239583334c0-11.865234374999998-9.8876953125-21.7529296875-21.7529296875-21.7529296875s-21.7529296875 9.8876953125-21.7529296875 21.7529296875v100.0634765625H632.8336588541666c-11.865234374999998 0-21.7529296875 9.8876953125-21.7529296875 21.7529296875s9.8876953125 21.7529296875 21.7529296875 21.7529296875h100.0634765625v100.0634765625c0 11.865234374999998 9.8876953125 21.7529296875 21.7529296875 21.7529296875s21.7529296875-9.8876953125 21.7529296875-21.7529296875V346.4739583333333H876.4664713541666c11.865234374999998 0 21.7529296875-9.8876953125 21.7529296875-21.7529296875 0-12.2607421875-9.8876953125-21.7529296875-21.7529296875-21.7529296875zM146.75455729166666 386.0247395833333c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625h0.7910156249999999v-21.7529296875h36.38671875c10.678710937499998 0 19.775390625-8.701171874999998 19.775390625-19.775390625s-9.0966796875-19.775390625-19.775390625-19.775390625l-56.953125-0.39550781249999994c-11.07421875 0-19.775390625 8.701171874999998-19.775390625 19.775390625v42.71484374999999c0 9.8876953125 8.701171874999998 18.984374999999996 19.775390625 18.984374999999996z m135.26367187500003-41.92382812499999h98.876953125c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625s-8.701171874999998-19.775390625-19.775390625-19.775390625h-98.876953125c-11.07421875 0-19.775390625 9.0966796875-19.775390625 19.775390625 0 11.07421875 9.0966796875 19.775390625 19.775390625 19.775390625z m177.1875 0h98.876953125c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625s-8.701171874999998-19.775390625-19.775390625-19.775390625h-98.876953125c-11.07421875 0-19.775390625 9.0966796875-19.775390625 19.775390625 0.7910156249999999 11.07421875 8.701171874999998 19.775390625 19.775390625 19.775390625zM774.8209635416665 560.8391927083335c0-11.07421875-8.701171874999998-19.775390625-19.775390625-19.775390625s-19.775390625 8.701171874999998-19.775390625 19.775390625v98.876953125c0 11.07421875 8.701171874999998 19.775390625 19.775390625 19.775390625s19.775390625-8.701171874999998 19.775390625-19.775390625v-98.876953125z m-19.775390625 157.41210937500003c-11.07421875 0-19.775390625 9.0966796875-19.775390625 19.775390625v64.072265625h-79.1015625v1.1865234374999998c-11.07421875 0-19.775390625 8.701171874999998-19.775390625 19.775390625s8.701171874999998 19.775390625 19.775390625 19.775390625h98.876953125c11.07421875 0 19.775390625-8.701171874999998 19.775390625-19.775390625V738.8177083333334c0-11.865234374999998-9.0966796875-20.56640625-19.775390625-20.56640625zM581.0221354166666 802.0989583333333L166.52994791666666 801.3079427083333V423.2024739583333h-0.7910156249999999c0-11.07421875-8.701171874999998-19.775390625-19.775390625-19.775390625s-19.775390625 8.701171874999998-19.775390625 19.775390625V821.8743489583334c0 11.07421875 8.701171874999998 19.775390625 19.775390625 19.775390625H579.8356119791666c11.07421875 0 19.775390625-9.0966796875 19.775390625-19.775390625 0-11.07421875-9.0966796875-19.775390625-18.5888671875-19.775390625z"
              p-id="6374"
              fill="#e6e6e6"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="setMode('POLYGON')">
        <el-tooltip content="多边形" effect="customized" placement="right">
          <svg
            t="1657850412907"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6963"
            width="30"
            height="30"
          >
            <path
              d="M594.8 671.7l120.3 46.9-100.7 80.7z"
              fill="#e6e6e6"
              p-id="6964"
            ></path>
            <path
              d="M591.2 859l-36.4-237.2 223.6 87.1L591.2 859z m43.7-137.3l2.8 18 14.2-11.4-17-6.6z"
              fill="#e6e6e6"
              p-id="6965"
            ></path>
            <path
              d="M810.6 934.7c-8.2 0-16.4-3.1-22.6-9.4L606.7 744.1c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L833.2 880c12.5 12.5 12.5 32.8 0 45.3-6.3 6.3-14.4 9.4-22.6 9.4z"
              fill="#e6e6e6"
              p-id="6966"
            ></path>
            <path
              d="M512.3 905.2H285.9L58.7 511.8l227.2-393.4h454.3l227.1 393.4-105.5 182.7c-8.8 15.3-28.4 20.5-43.7 11.7-15.3-8.8-20.5-28.4-11.7-43.7l87-150.7-190.2-329.4H322.8L132.6 511.8l190.2 329.4h189.5c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              fill="#e6e6e6"
              p-id="6967"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="setMode('ZOOM+')">
        <el-tooltip content="放大" effect="customized" placement="right">
          <svg
            t="1657850484953"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7963"
            width="30"
            height="30"
          >
            <path
              d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"
              p-id="7964"
              fill="#e6e6e6"
            ></path>
            <path
              d="M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z"
              p-id="7965"
              fill="#e6e6e6"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="setMode('ZOOM-')">
        <el-tooltip content="缩小" effect="customized" placement="right">
          <svg
            t="1657850524018"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8949"
            width="30"
            height="30"
          >
            <path
              d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"
              p-id="8950"
              fill="#e6e6e6"
            ></path>
            <path
              d="M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z"
              p-id="8951"
              fill="#e6e6e6"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="saveData">
        <el-tooltip
          content="保存JSON数据"
          effect="customized"
          placement="right"
        >
          <svg
            t="1657850642145"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9946"
            width="30"
            height="30"
          >
            <path
              d="M814.805 128a51.179 51.179 0 0 1 51.179 51.179V844.01a51.179 51.179 0 0 1-51.179 51.157H201.173a51.179 51.179 0 0 1-51.178-51.157V179.179A51.179 51.179 0 0 1 201.173 128h613.654zM329.024 434.837a51.093 51.093 0 0 1-51.179-51.093V179.157h-76.672v664.854h613.76V179.179H738.22v204.48a51.179 51.179 0 0 1-51.179 51.178H329.024z m0-51.093h357.995V179.157H329.024v204.587z m357.91 204.501a25.557 25.557 0 1 1 0.085 51.072H329.024a25.536 25.536 0 1 1 0-51.072h357.91z"
              fill="#e6e6e6"
              p-id="9947"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="exportImgeBlob">
        <el-tooltip content="下载图片" effect="customized" placement="right">
          <svg
            t="1657850680441"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10149"
            width="30"
            height="30"
          >
            <path
              d="M937.319 533.986l-10.217-10.216H674.401V107.153c0-51.127-41.454-92.582-92.581-92.582H442.947c-51.127 0-92.582 41.454-92.582 92.582v416.618H96.874L86.68 533.986c-19.574 19.574-19.574 51.309 0 70.884l389.855 389.877c19.575 19.575 51.332 19.575 70.906 0L937.319 604.87c19.575-19.575 19.575-51.309 0-70.884z"
              p-id="10150"
              fill="#e6e6e6"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="Revoke">
        <el-tooltip content="撤回" effect="customized" placement="right">
          <svg
            t="1657850742419"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11141"
            width="30"
            height="30"
          >
            <path
              d="M237.303467 377.216l113.152 106.026667c16.584533 16.763733 33.6512 43.933867 17.066666 60.693333-16.597333 16.759467-39.227733 16.759467-55.816533 0L138.368 368.3968c-13.162667-13.2608-14.122667-34.491733-0.96-47.752533l174.301867-178.2784c16.5888-16.759467 39.223467-16.759467 55.812266 0s-0.477867 43.933867-17.066666 60.689066L238.775467 313.216h380.881066c153.211733 0 276.343467 132.881067 276.343467 285.738667 0 152.853333-123.136 298.845867-276.343467 298.845866H213.457067c-23.317333 0-42.88-10.824533-42.88-34.133333 0-23.313067 19.562667-29.870933 42.88-29.870933h402.816c102.762667 0 215.714133-132.322133 215.714133-234.845867s-112.951467-221.725867-215.714133-221.725867H237.303467z"
              p-id="11142"
              fill="#e6e6e6"
            ></path>
          </svg>
        </el-tooltip>
      </li>
      <li @click="drawerFlag = true,gMap.setMode('PAN');">
        <el-tooltip content="设置" effect="customized" placement="right">
          <svg
            t="1657850805121"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12071"
            width="30"
            height="30"
          >
            <path
              d="M512 697.6c102.4 0 182.4-83.2 182.4-185.6 0-102.4-83.2-185.6-182.4-185.6-102.4 0-182.4 83.2-182.4 185.6C329.6 614.4 412.8 697.6 512 697.6L512 697.6zM512 646.4c-73.6 0-134.4-60.8-134.4-134.4 0-73.6 60.8-134.4 134.4-134.4 73.6 0 134.4 60.8 134.4 134.4C646.4 585.6 585.6 646.4 512 646.4L512 646.4z"
              p-id="12072"
              fill="#e6e6e6"
            ></path>
            <path
              d="M249.015232 843.178592c35.2 28.8 73.6 51.2 112 67.2 41.6-38.4 96-60.8 150.4-60.8 57.6 0 108.8 22.4 150.4 60.8 41.6-16 80-38.4 112-67.2-12.8-54.4-3.2-112 22.4-163.2 28.8-48 73.6-86.4 128-102.4 3.2-22.4 6.4-44.8 6.4-67.2 0-22.4-3.2-44.8-6.4-67.2-54.4-16-99.2-54.4-128-102.4-28.8-48-35.2-108.8-22.4-163.2-35.2-28.8-73.6-51.2-112-67.2-41.6 38.4-92.8 60.8-150.4 60.8-54.4 0-108.8-22.4-150.4-60.8-41.6 16-80 38.4-112 67.2 12.8 54.4 3.2 112-22.4 163.2-28.8 48-73.6 86.4-128 102.4-3.2 22.4-6.4 44.8-6.4 67.2 0 22.4 3.2 44.8 6.4 67.2 54.4 16 99.2 54.4 128 102.4C252.215232 731.178592 261.815232 788.778592 249.015232 843.178592M361.015232 958.378592c-54.4-19.2-105.6-48-150.4-89.6-6.4-6.4-9.6-16-6.4-22.4 16-48 9.6-99.2-16-140.8-25.6-44.8-64-73.6-112-83.2-9.6-3.2-16-9.6-16-19.2-6.4-28.8-9.6-60.8-9.6-89.6 0-28.8 3.2-57.6 9.6-89.6 3.2-9.6 9.6-16 16-19.2 48-12.8 89.6-41.6 112-83.2 25.6-44.8 28.8-92.8 16-140.8-3.2-9.6 0-19.2 6.4-22.4 44.8-38.4 96-67.2 150.4-89.6 9.6-3.2 16 0 22.4 6.4 35.2 35.2 80 57.6 128 57.6 48 0 96-19.2 128-57.6 6.4-6.4 16-9.6 22.4-6.4 54.4 19.2 105.6 48 150.4 89.6 6.4 6.4 9.6 16 6.4 22.4-16 48-9.6 99.2 16 140.8 25.6 44.8 64 73.6 112 83.2 9.6 3.2 16 9.6 16 19.2 6.4 28.8 9.6 60.8 9.6 89.6 0 28.8-3.2 57.6-9.6 89.6-3.2 9.6-9.6 16-16 19.2-48 12.8-89.6 41.6-112 83.2-25.6 44.8-28.8 92.8-16 140.8 3.2 9.6 0 19.2-6.4 22.4-44.8 38.4-96 67.2-150.4 89.6-9.6 3.2-16 0-22.4-6.4-35.2-35.2-80-57.6-128-57.6-48 0-96 19.2-128 57.6-3.2 3.2-9.6 6.4-16 6.4C364.215232 958.378592 361.015232 958.378592 361.015232 958.378592z"
              p-id="12073"
              fill="#e6e6e6"
            ></path>
          </svg>
        </el-tooltip>
      </li>
    </ul>
    <div ref="map" id="map"></div>
    <!-- 抽屉  -->
    <el-drawer
      v-model="drawerFlag"
      title="设置参数"
      direction="rtl"
      custom-class="drawerAl"
    >
      <el-form :model="formLabelAlign" :rules="rules">
        <el-form-item label="标注文字">
          <el-input
            v-model="formLabelAlign.input"
            placeholder="Please input"
            clearable
          />
        </el-form-item>
        <el-form-item label="绘制线边框">
          <el-input-number
            v-model="formLabelAlign.borderwidth"
            :min="1"
            :max="5"
            controls-position="right"
          />
        </el-form-item>
        <el-form-item label="绘制线">
          <el-color-picker v-model="formLabelAlign.bordercolor" show-alpha />
        </el-form-item>
        <el-form-item label="文字字体颜色">
          <el-color-picker v-model="formLabelAlign.fontColor" show-alpha />
        </el-form-item>
        <el-form-item label="文字背景颜色">
          <el-color-picker v-model="formLabelAlign.fontbgColor" show-alpha />
        </el-form-item>
        <el-form-item label="文字边框颜色">
          <el-color-picker
            v-model="formLabelAlign.fontborderColor"
            show-alpha
          />
        </el-form-item>
      </el-form>
    </el-drawer>
    <div class="btnlist">
      <el-button type="success" @click="pre">上一张</el-button>
      <span>{{ imglistInedx + 1 }}/{{ imgList.length }}</span>
      <el-button type="success" @click="next">下一张</el-button>
    </div>
  </div>
</template>
 
<script>
import AILabel from "ailabel";
import { toRaw } from "@vue/reactivity";
export default {
  name: "AILabel",
  data() {
    return {
      gMap: null,
      gFirstImageLayer: null,
      gFirstFeatureLayer: null,
      gFirstTextLayer: null,
      drawingStyle: {},
      allFeatures: [],
      imgList: [
        {
          id: 1,
          src: require("@/assets/images/delicon.jpg"),
          width: 1920,
          height: 1080,
          zoom: 5000,
        },
        {
          id: 2,
          src: require("@/assets/images/delicon.jpg"),
          width: 1920,
          height: 1080,
          zoom: 4500,
        },
      ],
      drawerFlag: false,
      formLabelAlign: {
        input: "elongpaox",
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
    /**
     * @author elongpaox
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
     * @author elongpaox
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
     * @author elongpaox
     * @method initMap 初始化地图
     */
    initMap() {
      this.gMap = new AILabel.Map("map", {
        center: { x: 960, y: 540 }, // 为了让图片居中
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
        { zIndex: 12, opacity: 1 } // style
      );
      this.gMap.addLayer(this.gFirstTextLayer);
      this.gMap.addLayer(this.gFirstFeatureLayer);
      // 回显
      this.EchoData();
    },
 
    /**
     * @author elongpaox
     * @method EchoData 回显数据
     */
    EchoData() {
      if (localStorage.getItem("gMapData")) {
        let { newallFeatures, newalllText } = JSON.parse(
          localStorage.getItem("gMapData")
        )[this.imgList[this.imglistInedx].id]
          ? JSON.parse(localStorage.getItem("gMapData"))[
              this.imgList[this.imglistInedx].id
            ]
          : { newallFeatures: [], newalllText: [] };
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
      }
    },
 
    /**
     * @author elongpaox
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
     * @author elongpaox
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
     * @author elongpaox
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
              position: { x: ltx, y: lty },
              offset: { x: 0, y: 0 },
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
              position: { x: ltx, y: lty },
              offset: { x: -10, y: -10 },
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
              src: require("@/assets/images/delicon.jpg"),
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
              src: require("@/assets/images/delicon.jpg"),
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
     * @author elongpaox
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
        center: { x: imgObj.width / 2, y: imgObj.height / 2 },
        zoom: imgObj.zoom,
      });
    },
 
    /**
     * @author elongpaox
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
     * @author elongpaox
     * @method getFeatures 获取所有features
     */
    getFeatures() {
      this.allFeatures = this.gFirstFeatureLayer.getAllFeatures();
    },
 
    /**
     * @author elongpaox
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
     * @author elongpaox
     * @method exportImgeBlob 将图片导出成Blob
     */
    async exportImgeBlob() {
      const blob = await this.gMap.exportLayersToImage(
        { x: 0, y: 0, width: 1920, height: 1080 },
        { type: "blob", format: "image/png" }
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
     * @author elongpaox
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
          Object.assign({}, { props, type, style, shape, id })
        );
      });
      if (localStorage.getItem("gMapData")) {
        let data = JSON.parse(localStorage.getItem("gMapData"));
        data[this.imgList[this.imglistInedx].id] = {
          newalllText,
          newallFeatures,
        };
        localStorage.setItem('gMapData',JSON.stringify(data))
      } else {
        localStorage.setItem(
          "gMapData",
          JSON.stringify({
            [this.imgList[this.imglistInedx].id]: {
              newalllText,
              newallFeatures,
            },
          })
        );
      }
      this.$message.success("保存成功");
    },
  },
  mounted() {
    this.initMap();
  },
  destroyed(){
    this.gMap.destroyed()
  }
};
</script>
 
<style lang="scss" >
.AILabel {
  width: 100%;
  height: 100%;
  background-color: rgb(26, 26, 26);
  overflow: hidden;
  .toolbar {
    width: 50px;
    background-color: rgba(43, 43, 43, 1);
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 20px;
    z-index: 999;
    transform: translate(0%, -50%);
    > li {
      width: 15px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  #map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  #map::after {
    content: " ";
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0.1;
    filter: blur(5px);
  }
}
.el-popper.is-customized {
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(83, 83, 83), rgb(102, 102, 102));
  font-weight: 550;
}
.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, rgb(83, 83, 83), rgb(102, 102, 102));
  right: 0;
}
.drawerAl {
  background-color: rgb(25, 28, 30);
  color: rgb(230, 230, 230);
  .el-drawer__header,
  .el-drawer__body,
  .el-form-item,
  .el-form-item__label {
    color: rgb(230, 230, 230);
  }
  .el-form-item {
    width: 300px;
    .el-form-item__label {
      width: 120px;
    }
  }
}
.btnlist {
  width: 100%;
  height: 40px;
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 999;
  padding: 0px 20px;
  > span {
    font-size: 18px;
    font-weight: 550;
    color: rgb(230, 230, 230);
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>