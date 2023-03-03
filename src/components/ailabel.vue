<template>
  <div>

    <div id="map">
      <div class="button-wrap">
        <button class="btn btn-default" @click="setMode('PAN');">平移</button>
        &nbsp;&nbsp;
        <button class="btn btn-default" @click="setMode('POLYGON');">多边形</button>
        <button class="btn btn-default" @click="getFeatures();">获取标注数据</button>
        &nbsp;&nbsp;
      </div>
      <div class="zoom-icon-wrapper">
        <div class="zoom-icon-plus" @click="zoomIn">+</div>
        <div class="zoom-icon-minus" @click="zoomOut">-</div>
      </div>
    </div>
  </div>
</template>

<script>
import AILabel from 'ailabel'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'test',
  data () {
    return {
      imgUrl: '../assets/logo.png',
      drawingStyle: {},
      mode: '',
      itemName: '',
      editId: '',
      deleteIconId: 'delete01'
    }
  },
  watch: {
    mode (mode) {
      this.gMap.setMode(mode)
      this.setDrawingStyle(mode)
    }
  },
  methods: {
    zoomIn () {
      this.gMap.zoomIn()
    },
    zoomOut () {
      this.gMap.zoomOut()
    },
    setMode (mode) {
      this.mode = mode
    },
    // 获取所有features
    getFeatures () {
      const allFeatures = this.gFirstFeatureLayer.getAllFeatures()
      console.log('--allFeatures--', allFeatures)
    },
    // 初始样式
    setDrawingStyle (mode) {
      const drawingStyle = {}
      switch (mode) {
        case 'PAN': {
          break
        }
        case 'POLYGON': {
          this.drawingStyle = {
            strokeStyle: '#00f',
            fillStyle: '#0f0',
            globalAlpha: 0.3,
            lineWidth: 1,
            fill: true,
            stroke: true
          }
          this.gMap.setDrawingStyle(drawingStyle)
          break
        }
        default:
          break
      }
    },
    // 添加图形
    addFeature (data, type, name) {
      const that = this
      const drawingStyle = this.drawingStyle
      if (type === 'POLYGON') {
        const polygonFeature = new AILabel.Feature.Polygon(
          `${+new Date()}`, // id
          { points: data }, // shape
          { name }, // props
          drawingStyle // style
        )
        that.gFirstFeatureLayer.addFeature(polygonFeature)
      }
    },
    // 获取历史数据
    getHistoryData () {
      const gFirstMaskLayer = new AILabel.Layer.Mask(
        'first-layer-mask', // id
        { name: '第一个涂抹图层' }, // props
        { zIndex: 11, opacity: 0.5 } // style
      )
      this.gMap.addLayer(gFirstMaskLayer)

      const gFirstFeaturePolygon = new AILabel.Feature.Polygon(
        'first-feature-polygon', // id
        {
          points: [
            { x: 367, y: 161 }, { x: 371, y: 220 }, { x: 412, y: 241 },
            { x: 474, y: 210 }, { x: 467, y: 151 }, { x: 426, y: 124 }
          ]
        }, // shape
        { name: '第一个多边形' }, // props
        { strokeStyle: '#0000FF', lineWidth: 1 } // style
      )
      this.gFirstFeatureLayer.addFeature(gFirstFeaturePolygon)
      console.log('--AILabel--', AILabel)
    },
    // 画完取名
    // eslint-disable-next-line no-unused-vars
    getName (mode) {
      return this.$prompt('请输入填写名字', {
        confirmButtonText: '确定',
        showCancelButton: false
      }).then(({ value }) => {
        this.itemName = value
        return value
      }).catch(() => {
        return null
      })
    },
    // 增加删除图标
    addDeleteIcon (feature) {
      const gMap = this.gMap
      const that = this
      // 添加delete-icon
      const points = that.getPoints(feature)
      console.log(points)
      const gFirstMarker = new AILabel.Marker(
        that.deleteIconId, // id
        {
          src: '../../static/img/delete.png',
          position: points[1], // 矩形右上角
          offset: {
            x: -20,
            y: -4
          }
        }, // markerInfo
        { name: 'delete' } // props
      )
      gFirstMarker.events.on('click', marker => {
        // 首先删除当前marker
        gMap.markerLayer.removeMarkerById(marker.id)
        // 删除对应text
        // gFirstTextLayer.removeTextById(textId);
        // 删除对应feature
        that.gFirstFeatureLayer.removeFeatureById(feature.id)
      })
      gMap.markerLayer.addMarker(gFirstMarker)
    },
    // 删除 删除按钮
    deIcon () {
      this.gMap.markerLayer.removeAllMarkers()
    },
    // 增加事件
    addEvent () {
      const that = this
      const gMap = this.gMap
      gMap.events.on('drawDone', (type, data) => {
        console.log('--type, data--', type, data)
        that.addFeature(data, type)
        /* that.getName(type).then(val => {
          if (val) {
            that.addFeature(data, type, val);
          } else {
            this.$message({
              type: 'info',
              message: '请填写名字'
            });
          }
        }) */
      })
      gMap.events.on('boundsChanged', data => {
        console.log('--map boundsChanged--', data)
        return ''
      })
      // 双击编辑
      gMap.events.on('featureSelected', feature => {
        that.editId = feature.id
        // console.log('--map featureSelected--', feature);
        gMap.setActiveFeature(feature)
        // 增加删除按钮
        that.addDeleteIcon(feature)
      })
      // 单机空白取消编辑
      gMap.events.on('featureUnselected', () => {
        // 取消featureSelected
        that.editId = ''
        that.deIcon()
        gMap.setActiveFeature(null)
      })
      // 更新完
      gMap.events.on('featureUpdated', (feature, shape) => {
        console.log(feature)
        // 更新或者移动需要重新设置删除图标
        that.deIcon()
        feature.updateShape(shape)
        that.addDeleteIcon(feature)
      })
      // 删除
      gMap.events.on('FeatureDeleted', () => {
        console.log(2222222)
        // that.gFirstFeatureLayer.removeFeatureById(that.editId);
      })
    },
    // 获取坐标
    getPoints (feature) {
      switch (feature.type) {
        case 'POLYGON':
          return feature.shape.points
        default:
          return []
      }
    }
  },
  mounted () {
    const that = this
    const gMap = new AILabel.Map('map', {
      center: { x: 250, y: 150 }, // 为了让图片居中
      zoom: 500,
      mode: 'PAN', // 绘制线段
      refreshDelayWhenZooming: true, // 缩放时是否允许刷新延时，性能更优
      zoomWhenDrawing: true,
      panWhenDrawing: true,
      zoomWheelRatio: 5, // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
      withHotKeys: true // 关闭快捷键
    })
    that.gMap = gMap
    this.addEvent()
    // 图片层添加
    const gFirstImageLayer = new AILabel.Layer.Image(
      'first-layer-image', // id
      {
        src: that.imgUrl,
        width: 500,
        height: 300,
        crossOrigin: false, // 如果跨域图片，需要设置为true
        position: { // 左上角相对中心点偏移量
          x: 0,
          y: 0
        },
        grid: { // 3 * 3
          columns: [{ color: '#9370DB' }, { color: '#FF6347' }],
          rows: [{ color: '#9370DB' }, { color: '#FF6347' }]
        }
      }, // imageInfo
      { name: '第一个图片图层' }, // props
      { zIndex: 5 } // style
    )
    // 添加到gMap对象
    gMap.addLayer(gFirstImageLayer)
    // 添加矢量图层
    const gFirstFeatureLayer = new AILabel.Layer.Feature(
      'first-layer-feature', // id
      { name: '第一个矢量图层' }, // props
      { zIndex: 10 } // style
    )
    this.gFirstFeatureLayer = gFirstFeatureLayer
    gMap.addLayer(gFirstFeatureLayer)
    // 历史
    // this.getHistoryData();
    window.onresize = function () {
      this.gMap && this.gMap.resize()
    }
  },
  beforeUnmount () {
    this.gMap.destroy()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
}

.button-wrap {
  padding-bottom: 10px;
  position: relative;
  z-index: 99;
}

#map {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 600px;
  width: 800px;
  border: 1px dashed #ccc;
}

.zoom-icon-wrapper {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 1000;
}

.zoom-icon-plus {
  width: 30px;
  height: 30px;
  line-height: 20px;
  text-align: center;
  border: 3px solid #6495ED;
  font-size: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: #FF8C00;
  cursor: pointer;
}

.zoom-icon-plus:hover {
  border-color: #4169E1;
}

.zoom-icon-minus {
  margin-top: 6px;
  width: 30px;
  height: 30px;
  line-height: 20px;
  text-align: center;
  border: 3px solid #6495ED;
  font-size: 25px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  color: #FF8C00;
  cursor: pointer;
}

.zoom-icon-minus:hover {
  border-color: #4169E1;
}
</style>
