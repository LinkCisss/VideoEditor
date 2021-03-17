<template>
  <div>
  <div class="video1">
    <video
        muted
        ref="VideoPlayer"
        preload="auto"
        class="video-js video1_1"
        style="object-fit: fill"
        autoplay="autoplay"
        loop>
<!--      src="https://clipchamp.com/static/ac24e9eb7d9634dc74379229edf954f8/Box_x_Clipchamp_step_2_____Made_with_Clipchamp__1_.mp4"-->
      <source
          src="../assets/video/222.mp4"
          type="video/mp4">
    </video>
    <div>
      <h1>所有人都能轻松编辑视频</h1>
      <p>我们的视频编辑器具备创建出色视频所需的所有功能——无需任何经验。直接在浏览器中编辑各种尺寸的片段，从而避免上传过程中的各种不便。我们甚至提供了一个快捷简便的“Facebook 视频广告制作器”，让您可以在转到视频编辑器之前处理视频。</p>
    </div>
  </div>

  <div class="video2">
    <video
        muted
        ref="VideoPlayer"
        class="video-js video1_2"
        style="object-fit: fill"
        autoplay="autoplay"
        loop="loop">
<!--      src="https://clipchamp.com/static/56f4c38802eccf6ce9283fe80fa86193/hotel_ad_for_landing_page_resized__1_.mp4"-->
      <source
          src="../assets/video/111.mp4"
          type="video/mp4">
    </video>
    <div>
      <h1>可自定义的视频模板</h1>
      <p>缺乏灵感吗？浏览我们可完全自定义的视频模板库 — 这些模板由专业人士根据您的行业量身定制。避开空白画布，只需更改文字并导出！我们涵盖每一项工作 — 从为自己的YouTube频道制作的视频到Instagram宣传视频。只需浏览我们丰富的模板库，单击您喜欢的模板即可开始！</p>
      <button>选择一个模板</button>
    </div>
  </div>

  </div>



</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      player: null
    };
  },
  mounted() {
    // 播放参数
    let options = {
      controls: true, // 是否显示底部控制栏
      preload: "auto", // 加载<video>标签后是否加载视频
      autoplay: "muted", // 静音播放
      // playbackRates: [0.5, 1, 1.5, 2],// 倍速播放
      width: "640",
      height: "247",
      controlBar: {
        // 自定义按钮的位置
        children: [
          {
            name: "playToggle"
          },
          {
            name: "progressControl"
          },
          {
            name: "currentTimeDisplay"
          },
          {
            name: "timeDivider"
          },
          {
            name: "durationDisplay"
          },

          {
            name: "volumePanel", // 音量调整方式横线条变为竖线条
            inline: false
          },
          {
            name: "pictureInPictureToggle" //画中画播放模式
          },
          {
            name: "fullscreenToggle"
          }
        ]
      }
    };
    this.player = this.$video(this.$refs.videoPlayer, options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
  methods: {}

};


</script>

<style lang="less" scoped>

.video1{
  //background: #e0d69a;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 540px;

  .video1_1{
    width: 511.59px;
    height: 287.77px;
  }

  h1{
    font-size: 2.3rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0px;
    color: rgb(33, 30, 79);
    width: 450px;
    //height: 252px;
    text-align: left;
  }

  p{
    font-size: 1.2rem;
    margin-bottom: 0px;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(33, 30, 79);
    width: 450px;
    height: 252px;
    text-align: left;
  }

  }


.video2{
  //background: #9696f1;
  display: flex;
  justify-content: space-evenly;
  height: 540px;
  align-items: center;

  .video1_2{
    width: 511.59px;
    height: 385.34px;
  }

  div {
    //background: #000;
  }

  h1{
    font-size: 2.3rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0px;
    color: rgb(33, 30, 79);
    width: 450px;
    //height: 252px;
    text-align: left;
  }

  p{
    font-size: 1.2rem;
    margin-bottom: 0px;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(33, 30, 79);
    width: 450px;
    height: 252px;
    text-align: left;
  }

  button{
    color: rgb(255, 255, 255);
    background-color: rgb(90, 76, 219);
    transition: all 200ms ease 0s;
    will-change: transform;
    border: none;
    box-shadow: rgb(90 76 219 / 20%) 0px 0px 0px;
    text-shadow: rgb(43 41 138) 0px 0px 0.25rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    font-size: 1rem;
    line-height: 1.4375rem;
    border-radius: 4rem;
    padding: 0.625rem 1.875rem;
    font-weight: 500;
    font-variation-settings: "wght" 500;
    cursor: pointer;
    opacity: 1;
  }

}

</style>
