<template>
  <div class="home">
    <!-- 导航 -->
    <tab-bar></tab-bar>

    <div class="body_page2">
      <div class="bg_liner">
        <!--        加一个渐变背景蒙版-->
      </div>
      <div class="page2_father" style="padding-top: 10px">
        <h1>欸嘿哎吼吼</h1>
        <div class="line"></div>
        <el-row>
          <!--          <el-button @click.native="isShow = !isShow" type="primary" size="medium " plain round>免费试用</el-button>-->
        </el-row>
        <div class="page2_child1">
          <transition name="el-zoom-in-center">
            <div v-show="isShow" class="transition-box">
              <button @click="editPicture">1111</button>
            </div>
          </transition>
        </div>
        <div class="page2_child2">
          <transition name="el-zoom-in-center">
            <div v-show="isShow" class="transition-box">
              <button @click="editVedio">222</button>
            </div>
          </transition>
        </div>
      </div>
      <div class="page2_left">
        <div>
          <h1>具有专业功能的免费在线视频编辑器</h1>
          <p>加入200多个国家/地区的1300万创意用户，无需任何编辑经验。</p>
          <button class="page2_btn01">111</button>
          <button class="page2_btn02">222</button>
          <button class="page2_btn03">333</button>
        </div>
      </div>
      <div class="page2_right"></div>
    </div>

    <!--  轮播图 -->
    <carousel></carousel>

    <!--    视频区域-->
    <video-player></video-player>

    <!--    操作区-->
    <carousel-item></carousel-item>

    <!--  ------------ footer_nav ------------- -->
    <div class="footer_nav"></div>

  </div>

</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Carousel";
import tabBar from "../components/tabBar";
import VideoPlayer from "../components/VideoPlayer";
import CarouselItem from "../components/CarouselItem";


export default {
  name: 'Home',
  //初始化参数
  data() {
    return {
      index: 1,
      isShow: false,
      uploadUrl: "",//你要上传视频到你后台的地址
      videoFlag: false, //是否显示进度条
      videoUploadPercent: " ", //进度条的进度，
      isShowUploadVideo: false, //显示上传按钮
    }
  },
  components: {
    tabBar,
    Carousel,
    VideoPlayer,
    CarouselItem
  },
  //初始化参数
  //上传前回调
  methods: {

    editPicture() {
      this.$router.push({path: '/editPicture'})
      // this.index = 1
    },
    editVedio() {
      this.$router.push({path: '/editVedio'})
      // this.index = 2
    },

    beforeUploadVideo(file) {
      const isLt20M = file.size / 1024 / 1024 < 20;
      if (['video/mp4'].indexOf(file.type) == -1) { //'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'
        this.$message.error('请上传正确的视频格式');
        return false;
      }
      if (!isLt20M) {
        this.$message.error('上传视频大小不能超过20MB哦!');
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
      console.log(fileList)
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      if (res.errorCode == "00") {
        this.global.company.showVideoPath = res.sprbody.urlAddress;
        // this.videoForm.showVideoPath = res.data.uploadUrl;
      } else {
        this.$message.error('视频上传失败，请重新上传！');
      }
      console.log(file)
    },
  }

}

</script>

<style lang="less">
html {
  font-size: 16px;
}


.body_page2 {
  width: 100%;
  height: 42rem;
  display: flex;
  background: url("../assets/img/video-editor-cover-min.jpg") right 45% bottom 45% no-repeat;
  background-size: cover;
  //background-position: ;
  display: flex;
  justify-content: center;
  position: relative;

  .bg_liner {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background-image: linear-gradient(to right,
    rgba(90, 76, 219, 0) 0%,
    rgba(90, 76, 219, 0) 5%,
    rgba(45, 36, 143, 0) 10%,
    rgba(45, 36, 143, 0.1) 60%,
    rgba(45, 36, 143, 0.6) 85%,
    rgba(45, 36, 143, 0.4) 90%,
    rgba(45, 36, 143, 0.3) 95%,
    rgba(45, 36, 143, 0) 100%);

  }

  .page2_father {
    padding-top: 3.125rem;
    position: relative;
    color: white;

    h1 {
      padding: 1px;
      color: white;
    }

    .line {
      width: 100px;
      height: 0;
      border: 1px solid lightblue;
      margin-bottom: 7.5px;
    }

    .page2_child1 {
      position: absolute;
      top: 27%;
      left: 60%;
      z-index: 99;
      margin-left: 50px;
    }

    .page2_child2 {
      position: absolute;
      top: 27%;
      left: -60%;
      margin-left: -50px;
      z-index: 99;
    }

    .page2_child1, .page2_child2 {
      button {
        width: 100px;
        height: 100px;
      }
    }
  }

  .page2_left {

    div {
      position: absolute;
      top: 15%;
      left: 15%;

      h1 {
        color: white;
        font-weight: 500;
        font-size: 2.8rem;
        white-space: nowrap;
        text-align: left;
      }

      p {
        color: white;
        width: 31.25rem;
        font-weight: 250;
        text-align: left;
        font-size: 25px;
      }

    }

    .page2_btn01, .page2_btn02, .page2_btn03 {
      width: 400px;
      height: 60px;
      border-radius: 30px;
      outline: none;
      z-index: 1;

      border: none;
      color: black;
      font-weight: bolder;
      font-size: 20px;
      margin-top: 20px;

      white-space: nowrap;
      display: block;
      user-select: none;
    }

    .page2_btn01 {
      background: #4285F4;
    }

    .page2_btn02 {
      background: #FFFFFF;
    }

    .page2_btn03 {
      background: transparent;
      border: 2px solid #7674B3;
    }

    .page2_btn01:hover {
      box-shadow: 1px 12px 15px 2px rgba(50, 68, 170, .6);
      transform: scale(1) translate(-1px, -2px);
    }

    .page2_btn02:hover {
      box-shadow: 1px 12px 15px 2px rgba(50, 68, 170, .6);
      transform: scale(1) translate(-1px, -2px);

    }

    .page2_btn03:hover {
      border: 3px solid #FFFFFF;
      transform: scale(1) translate(-1px, -2px);

    }

  }


}

.footer_nav {
  width: 100%;
  height: 200px;
  background: #000;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
