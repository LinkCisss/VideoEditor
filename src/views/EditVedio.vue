<template>
  <div style="display: flex">

    <!-- -----------------------左侧tab栏--------------------- -->
    <div class="slide-content">
      <!--  <tab-bar></tab-bar>-->
      <!--  <slide-tab></slide-tab>-->
      <div class="logo">我是logo</div>
      <div class="nav">
        <div class="user-info">
          <div class="user-info_img"></div>
          <div class="user-info_p">
            <p>刘一默</p>
            <p>PERSONAL</p>
          </div>
        </div>
        <ul class="sub-menu">
          <li
              @click="jumpPage(1)"
              :class="{activeColor: 1 == currentIndex}"
          >
            <i class="el-icon-s-home"></i>
            <span>Home</span>
          </li>
          <li
              @click="jumpPage(2)"
              :class="{activeColor: 2 == currentIndex}"
          >
            <i class="el-icon-video-play"></i>
            <span>Videos</span>
          </li>
          <li
              @click="jumpPage(3)"
              :class="{activeColor: 3 == currentIndex}"
          >
            <i class="el-icon-film"></i>
            <span>Template library</span>
          </li>
        </ul>
      </div>
      <div class="creatItem" @mouseenter="creatItem">
        <i class="el-icon-circle-plus-outline"></i>
        <span>Creat a team</span>
      </div>
      <div class="footer">
        <ul class="sub-menu">
          <li @click="jumpPage(4)"
              :class="{activeColor2: 4 == currentIndex}"><span>Account</span></li>
          <li @click="jumpPage(5)"
              :class="{activeColor2: 5 == currentIndex}"><span>Help</span></li>
          <li @click="jumpPage(6)"
              :class="{activeColor2: 6 == currentIndex}"><span>Sign out</span></li>
        </ul>
      </div>
    </div>

    <!--  ----------------------右侧内容区---------------------  -->
    <!--  搜索区 -->
    <div class="right-content">

      <div class="search">
        <div>
          <input
              class="search-content"
              placeholder="Search template library"
              v-model="input"
          ></input>
          <el-button icon="el-icon-search" circle></el-button>
        </div>

        <div class="search-button">
          <el-rate
              v-model="value2"
              :colors="colors">
          </el-rate>
          <button type="primary" round>
            <i class="el-icon-plus"></i>
            <span>Create a video</span>
          </button>
        </div>

      </div>
      <!-- -->
      <div class="home-content" v-if="currentIndex==1">
        <div class="home-content_template">
          <!--  走马灯-->
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>
      <!-- -->
      <div class="videos-content" v-if="currentIndex==2 || currentIndex==1">
        <div class="videos-content_text">
          <h2 style="font-weight: bold;font-size: 20px">Your videos</h2>
          <i class="el-icon-plus"></i>
        </div>
        <div class="videos-content_upload">
          <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :drag="true"
              :on-success="clickUpload"
              :on-progress="uploading"
              :on-error="uploadErr"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
                <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                >
          <i class="el-icon-zoom-in"></i>
        </span>
                <span
                    v-if="!disabled"
                    class=""
                    @click="handleEdit(file)"
                >
          <i class="el-icon-edit"></i>
        </span>
                <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
                <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
              </span>

            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </div>

      <div
          class="template-content"
          v-if="currentIndex==3"
      ></div>

    </div>

  </div>
</template>

<script>

import tabBar from "../components/tabBar";
// import SlideTab from "../components/SlideTab";

export default {
  name: "EditVedio",
  data() {
    return {
      currentIndex: 1,
      input: 'Search template library',
      isActive: false,
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      //上传的关键字
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false

    }
  },

  components: {
    tabBar,
    // SlideTab,
  },

  methods: {
    jumpPage(index) {
      console.log(index)
      this.currentIndex = index
    },
    creatItem() {
      this.isActive = true
    },

    //上传的方法
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleEdit(file){
      this.$router.push({
        path: '/cutVideo'
      })
    },
    //点击上传
    clickUpload() {
      this.$router.push(
          {
            path: '/cutVideo'
          }
      )
    },
    uploading() {
      this.$message({
        showClose: true,
        message: '在上传啦♪(^∇^*)',
        type: 'warning'
      })
    },
    uploadErr(){
      this.$message({
        showClose: true,
        message: '上传失败，请检查网络设置 x_x ',
        type: 'error'
      })
    }

  }
}

</script>

<style lang="less">

.slide-content {

  width: 330px;
  height: 100%;
  background: #F8F8FB;

  .logo {
    background: #F8F8FB;
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }

  .nav {
    background: #F2F2F8;

    .user-info {
      width: 100%;
      line-height: 72px;
      font-size: 18px;
      height: 72px;
      display: flex;

      .user-info_img {
        background: url("../../src/assets/img/user.png") no-repeat;
        background-size: contain;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        margin: 15px;
        display: inline-block;
      }

      .user-info_p {
        line-height: 16px;
        margin: 17px 0 0 6px;
        font-weight: bold;

        p:nth-of-type(2) {
          font-size: 5px;
          margin-top: 6px;
          color: #8D8D9C;
        }
      }
    }

    .sub-menu {
      margin-left: 56px;
      list-style: none;

      li {
        height: 62px;
        width: 274px;
        display: flex;
        align-items: center;
        //border-radius: 30px 0 0 30px;
        color: #665DC3;
        cursor: pointer;
        background: #F2F2F8;


        i {
          font-size: 24px;
          padding: 5px;
        }

        span {
          font-size: 16px;

        }
      }

      li:hover {
        color: black;
      }

    }
  }

  .creatItem {
    font-size: 17px;
    height: 80px;
    color: #8D8D9C;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    i {
      font-size: 32px;
      padding: 10px;
    }

    span {
      font-weight: bold;
    }
  }

  .creatItem:hover {
    color: rgb(102, 93, 195);
  }

}

.activeColor {
  color: #665DC3;
  border-radius: 30px 0 0 30px !important;
  background: #ffffff !important;

}

.footer {
  padding-top: 240px;

  .sub-menu {
    //margin-left: 56px;
    list-style: none;

    li {
      height: 62px;
      width: 100%;
      display: flex;
      align-items: center;
      //border-radius: 30px 0 0 30px;
      color: #9292A0;
      cursor: pointer;
      background: #F8F8FB;

      span {
        margin-left: 20px;
        font-size: 17px;
        font-weight: 30;
      }
    }

    li:hover {
      color: black;
    }

  }
}

.activeColor2 {
  color: black;
  //border-radius: 30px 0 0 30px !important;
  background: #ffffff !important;

}

//右侧内容
.right-content {
  //右侧搜索
  .search {

    //background: #c18d8d;
    background: #ffffff;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;

    position: fixed;
    top: 0;
    opacity: .9;

    .search-content {
      margin-left: 3.75rem;
      width: 400px;
      height: 45px;
      border-radius: 1.25rem;
      border: none;
      background: #F2F2F8;
      user-select: all;
    }

    .search-button {
      margin-left: 46.25rem;
      display: flex;
      align-items: center;

      button {
        text-align: inherit;
        border: none;
        font-variant: inherit;
        font-stretch: inherit;
        line-height: inherit;
        font-family: inherit;
        cursor: pointer;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: white;
        background: rgb(102, 93, 195);
        border-radius: 20px;
        display: flex;
        align-items: center;
        transition: all 100ms ease-in-out 0s;
        width: auto;
        height: 40px;
        justify-content: center;
        margin: 0px auto;
        padding: 0px 1.25rem;

        i {
          font-size: 8px;
          margin-right: 5px;
        }
      }
    }


  }

  //下面的轮播图
  .home-content {
    margin-left: 50px;
    width: 1500px;
    margin-top: 80px;
  }

  //下面的上传
  .videos-content {
    margin-top: 100px;
    margin-left: 50px;
    width: 1500px;

    //上面的文字
    .videos-content_text {
      display: flex;
      justify-content: space-between;

      i {
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #F2F2F8;
        text-align: center;
        line-height: 50px;
        color: black;
        font-size: 17px;
        font-weight: bold;
      }
    }

    //上传区
    .videos-content_upload {

      .el-upload--picture-card {
        width: 533px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

  }

}


</style>
