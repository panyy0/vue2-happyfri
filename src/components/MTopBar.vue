<template>
  <!--加个样式，方便以后修改-->

  <div class="top-bar mod">
    <img class='top-bar-user' :src='iconBaby'/>

    <div class='top-bar-search'>
      <div>
        <img :src='iconSearch'/>
        <span class='text'>今天想听什么</span>
      </div>
    </div>


    <img class="top-bar-news" :src='iconNews'/>
  </div>




</template>

<script>


  import ICON_BABY from '../images/tab/home_pic_baby@2x.png';
  import ICON_SEARCH from '../images/tab/home_icon_search@2x.png';
  import ICON_NEWS from '../images/tab/home_icon_news@2x.png';

  export default {
    name: 'MTopBar'
    ,data () {
      return {
        iconBaby: ICON_BABY
        ,iconSearch: ICON_SEARCH
        ,iconNews: ICON_NEWS
      }
    }
    ,computed: {
    }
    ,components: {},
    created(){
    },
    mounted: function() {

    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  .top-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    z-index: 500;
    top: 0;
    width: 100%;
    height: 0.6rem;
    /*background-color: #aaa;*/

    .top-bar-user {
      position: absolute;
      left: 0;
      margin-left: 0.22rem;
      width: 0.6rem;
      height: 0.6rem;
    }

    .top-bar-news {
      position: absolute;
      right: 0;
      margin: 0.06rem 0.2rem 0.06rem 0;
      width: 0.48rem;
      height: 0.48rem;
    }

    .top-bar-search {
      position: absolute;
      left: 1.3rem;
      top: 0.02rem;
      width: 5rem;
      height: 0.56rem;
      border-radius: 1rem;
      background: rgba(255, 255, 255, .3);

      img {
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        top: 0.13rem;
        left: 0.3rem;
      }

      .text {
        position: absolute;
        left: 0.85rem;
        top: 0.12rem;
        font-size: 0.26rem;
        color: #fff;
      }
    }

  }



  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
