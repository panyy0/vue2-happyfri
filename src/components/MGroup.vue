<template>

  <div class="group">
    <div class="cell" v-for="item in groupList">
      <div class="left-child">
        <div class="inner">
          <img :src="item.leftIcon" />
        </div>
      </div>

      <div class="center-child">
        <span>{{ item.title }}</span>
      </div>
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
    background-color: #fff;

    .cell {
      height: 0.92rem;
      font-size: 0;
      display: flex;
      display: -webkit-flex;

      .left-child {
        height: 100%;
        width: 0.68rem;
        margin-right: 0.2rem;
        .inner {
          height: 100%;
          display: inline;
          position: relative;
          overflow: hidden;
          margin-right: 0.24rem;
          img {
            width: 0.44rem;
            height: 0.44rem;
            margin: 0.24rem;
          }


        }
      }


      .center-child {
        width: 6.42rem;
        height: 100%;
        border-top: 0.01rem solid #ededed;
        margin-top: -0.02rem;
        span {
          position: relative;
          height: 100%;
          font-size: 0.28rem;
          color: #505050;
          top: 30%;
        }
      }

      .right-child {
        width: 0.42rem;
        height: 100%;
        border-top: 0.01rem solid #ededed;
        margin-top: -0.02rem;
        img {
          position: relative;
          width: 0.26rem;
          height: 0.26rem;
          top: 35%;
        }

      }
    }
  }



  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
