<template>

  <div class="group">
    <div class="cell" v-for="item in groupList">
      <div class="left-child">
        <div class="inner">
          <img :src="item.leftIcon" />
        </div>
        <div class="inner">
          <span>{{ item.title }}</span>
        </div>
      </div>

      <div class="center-child"></div>
      <div class="right-child">
        <img :src="item.rightIcon" />
      </div>
    </div>
  </div>




</template>

<script>


  import ICON_BABY from '../images/tab/home_pic_baby@2x.png';
  import ICON_SEARCH from '../images/tab/home_icon_search@2x.png';
  import ICON_NEWS from '../images/tab/home_icon_news@2x.png';

  export default {
    name: 'MGroup'
    ,data () {
      return {
        iconBaby: ICON_BABY
        ,iconSearch: ICON_SEARCH
        ,iconNews: ICON_NEWS
      }
    }
    , props: ['groupList']
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
  .group {
    border-bottom: 0.02rem solid #ededed;
    background-color: #fff;

    .cell {
      height: 0.92rem;
      font-size: 0;
      padding: 0.24rem 0.16rem 0.24rem 0.19rem;
      .left-child {
        height: 100%;
        width: 2.89rem;
        display: inline-block;

        .inner {
          height: 100%;
          display: inline;
          position: relative;
          overflow: hidden;
          margin-right: 0.24rem;
          img {
            width: 0.44rem;
            height: 0.44rem;
          }

          span {
            position: relative;
            bottom: 0.12rem;
            height: 100%;
            font-size: 0.28rem;
            color: #505050;
          }
        }
      }


      .center-child {
        display: inline-block;
        width: 4rem;
      }

      .right-child {
        display: inline-block;
        width: 0.26rem;
        height: 100%;
        img {
          position: relative;
          width: 0.26rem;
          height: 0.26rem;
          bottom: 0.08rem;
        }

      }
    }
  }



  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
