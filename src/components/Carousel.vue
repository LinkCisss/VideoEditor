<template>
  <div class="body_page1">
    <div class="body_pics">
      <el-carousel :interval="4000" type="card" height="590px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
export default {
  name: "Carousel"
}
</script>

<style scoped>

.body_page1 {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
/* background: #fac2fd;*/
  align-items: center;
  height: 800px;
}

.body_pics {
  width: 100%;
}
</style>
