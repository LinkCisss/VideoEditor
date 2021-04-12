<template>

  <div class="cut-video_content">
    <!--侧边工具栏-->
    <div class="slide-edit_bar">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <!--      <el-radio-button :label="false">展开</el-radio-button>-->
        <!--      <el-radio-button :label="true">收起</el-radio-button>-->
      </el-radio-group>
      <el-menu default-active="1-4-1"
               class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">5555</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">6666</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">7777</span>
        </el-menu-item>
        
      </el-menu>
    </div>
    <!--操作区-->
    <div class="cut-video_operate">
      <!--      加一个tab栏-->
      <div class="nav">
        <el-rate
            style="margin: 10px 20px"
            v-model="value"
            :colors="colors">
        </el-rate>

        <button class="nav-export"><i class=""></i><span>→ Export</span></button>

      </div>

      <div class="operate-up">
        <!--      上传区-->
        <div class="operate_upload"></div>
        <!--      预览区-->
        <div class="operate_preview"></div>
      </div>
      <!--      剪辑区-->
      <div class="operate_cut"></div>
    </div>

  </div>

</template>

<script>
export default {
  name: "CutVideo",
  data() {
    return {
      isCollapse: true,
      value: null,
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

}
</script>

<style lang="less">
//大div
.cut-video_content {
  display: flex;


  //右侧的大div
  .cut-video_operate {
    width: 100%;
    height: 100%;

    .nav {
      background: #1C1C26;
      padding: 24px 24px 0px;
      display: flex;
      justify-content: flex-end;
      user-select: none;

      .nav-export {
        border: none;
        outline: none;
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
        padding: 9px 16px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 100ms ease-in-out 0s;
      }
    }

    //上半部分
    .operate-up {
      display: flex;
      //margin-left: 63px;


      //上传区
      .operate_upload {
        height: 429.5px;
        flex: 1;
        background: #1C1C26;
      }

      //预览区
      .operate_preview {
        height: 429.5px;
        flex: 1;
        background: #1C1C26;
      }
    }

    //剪辑区
    .operate_cut {
      background: #17171E;
      height: 347px;
    }

  }


}

</style>
