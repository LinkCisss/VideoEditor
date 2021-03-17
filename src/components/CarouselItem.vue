<template>
  <!--  操作组件-->
  <div class="operation">
    <div class="textPic">

      <div class="text_nav">
        <div><h2>如何操作</h2></div>
        <div class="text_nav_item" @click="changeIndex(1)"><p>打开一个新项目并添加媒体文件以开始编辑过程。</p></div>
        <div class="text_nav_item" @click="changeIndex(2)"><p>将视频、音频、照片和标题拖到时间线中并创建视频。</p></div>
        <div class="text_nav_item" @click="changeIndex(3)"><p>当您对您的编辑感到满意后，请输出完成的文件并保存。</p></div>
      </div>

      <div class="pic-nav">
        <div class="pic-nav_item">
          <img  src="../../src/assets/img/video-editor-process-thumbnail-01.webp" alt="">
<!--          <img v-if="itemIndex==2" src="../../src/assets/img/video-editor-process-thumbnail-02.webp" alt="">-->
<!--          <img v-if="itemIndex==3" src="../../src/assets/img/video-editor-process-thumbnail-03.webp" alt="">-->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselItem",
  data:{
    itemIndex: 1,
  },
  methods:{
    changeIndex(number){
      this.itemIndex = number
      console.log(this.itemIndex)
      clearInterval()
    },
    autoChangeIndex(){
      setInterval(()=>{
        this.itemIndex++
        if(this.itemIndex>3){
          this.itemIndex = 1
        }
        console.log(this.itemIndex)
      },2000)
    }
  },
  created() {
    // this.autoChangeIndex();
  }
}
</script>

<style lang="less" scoped>

//最大的框框
.operation {
  width: 100%;
  height: 40rem;
  background-color: rgb(33, 30, 79);
  display: flex;
  justify-content: center;
  align-items: center;

  //图片和文字的框框
  .textPic {
    width: 1600px;
    height: 30rem;
    //background: #d27a7a;
    display: flex;
    justify-content: space-evenly;

    //竖排列文字
    .text_nav {
      color: white;
      text-align: left;
      width: 592px;
      height: 463px;
      padding-left: 2.5rem;

      h2 {
        //如何操作
        font-size: 1.75rem;
        margin-bottom: 2rem;
        color: white;
        font-weight: 500;
      }

      //每一行文字的div
      .text_nav_item {
        display: flex;
        flex-flow: column wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: stretch;
        align-items: stretch;
        flex-basis: 50%;
        padding-right: 2rem;
        margin-bottom: 30px;

        p {
          //每一行文字的p
          cursor: pointer;
          color: white;
          font-size: 1.25rem;
          opacity: 0.6;
          transition: opacity 200ms ease 0s;
          margin: 0.5rem 0px 0px;
        }
        p:hover {
          //不用多说了吧
          opacity: 1;
        }
      }

    }

    .pic-nav {
      width: 531px;
      height: 356px;
    }
  }




}

</style>
