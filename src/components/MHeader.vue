<template>

  <div class="header">
    <div v-if="isBack" class="left" @click="goBack">
      <img :src="returnIcon" />
    </div>
    <div v-else class="left"></div>

    <div class="center">
      <span>{{ title }}</span>
    </div>

    <div class="right" @click="emitEvent('eventRight')">
      <img v-if="iconRight" :src="iconRight"/>
      <span v-if="contentRight">{{ contentRight }}</span>
    </div>

  </div>

</template>

<script>


  import ICON_RETURN from '../images/common/icon_return@2x.png';

  export default {
    name: 'MHeader'
    , data () {
      return {
          returnIcon: ICON_RETURN
      }
    }
    , props: ['isBack', 'title', 'image', 'iconRight', 'contentRight', 'eventRight']
    , computed: {}
    , components: {
    },
    created(){
    },
    mounted: function () {

    },
    methods: {
      goBack() {
          this.$router.go(-1);
      },
      emitEvent(event) {
        this.$emit(event);
      }
    }
  }
</script>

<style lang="less" scoped>

  .header {
    position: fixed;
    left: 0; top: 0;
    height: 0.88rem;
    display: flex;
    background-color: #ff7391;
    width: 100%;
    z-index: 9999;
    padding: 0 0.1rem;

    .left {
      position: relative;
      height: 100%;
      display: flex;
      width: 35%;

      img {
        width: 0.44rem;
        height: 0.44rem;
        margin: 0.22rem 0;
      }

    }

    .center {
      margin: 0 auto;
      width: 30%;
      height: 100%;
      display: flex;

      span {
        text-align: center;
        font-size: 0.34rem;
        letter-spacing: 0.05rem;
        color: #fff;
        margin: auto;
      }
    }

    .right {
      position: relative;
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: row-reverse;

      img {
        width: 0.28rem;
        height: 0.28rem;
        margin: 0.33rem 0.1rem 0.27rem 0;
      }

      span {
        color: #fff;
        font-size: 0.26rem;
        margin: auto 0.1rem auto 0;
      }
    }

  }

  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
