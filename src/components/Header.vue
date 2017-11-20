<template>

  <div class="sys-header">
    <div class="sys-header-left" @click="goBack">
      <a class="sys-header-back">
        <img :src="returnIcon"/>
      </a>
      <!--<div class="left-arrow"></div>-->
    </div>
    <h1 class="sys-header-title">{{ title }}</h1>
    <!--<div class="sys-header-right"></div>-->
  </div>


</template>

<script>


  import ICON_RETURN from '../images/common/icon_return@2x.png';

  import {XHeader} from 'vux';

  export default {
    name: 'SysHeader'
    , data () {
      return {
          returnIcon: ICON_RETURN
      }
    }
    , props: ['title']
    , computed: {}
    , components: {
      XHeader
    },
    created(){
    },
    mounted: function () {

    },
    methods: {
      goBack() {
          this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less" scoped>

  .sys-header {
    position: relative;
    padding: 0.03rem 0;
    box-sizing: border-box;
    background-color: #ff7391;
    width: 100%;
    height: 0.88rem;

    .sys-header-left {
      left: 0.18rem;

      .sys-header-back {

        img {
          position: absolute;
          width: 0.44rem;
          height: 0.44rem;
          top: 0.22rem;
          left: 0.1rem;
        }
      }

    }

    .sys-header-title {
      height: 100%;
      width: auto;
      text-align: center;
      padding: .2rem;
      font-size: 0.34rem;
      font-family: 'Microsoft YaHei',serif;
      color: #fff;
    }

    .sys-header-right {
      right: 0.15rem;
    }
  }

  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
