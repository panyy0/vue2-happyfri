<template>
  <div>
    <SysHeader :title="title"></SysHeader>

    <div id="container" class="container">
      <div>
        <div class="item" v-for="(item, index) in classifyList">
          <div :class="item.isNew ? 'new' : ''"></div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="title-line"></div>
          <div class="info">
            <div class="info-img"><img :src="iconNumber"/></div>
            <div class="info-txt">{{ item.episode }}集</div>
          </div>
          <div class="operate">
            <img class="share" :src="iconShare"/>
            <img class="more" :src="iconMore"/>
          </div>
          <img :src="item.img"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import SysHeader from 'components/Header';
//  import IScroll from "iscroll";
  import BScroll from "better-scroll";
  import ICON_NUMBER from 'images/common/icon_number@2x.png';
  import ICON_SHARE from 'images/common/icon_share@2x.png';
  import ICON_MORE from 'images/common/icon_more@2x.png';

  import CHRISTMAS from 'images/common/pic_christmas@2x.png';
  import MUSIC from 'images/common/pic_music@2x.png';
  import SOUNDTRACK from 'images/common/pic_soundtrack@2x.png';
  import ZOO from 'images/common/pic_zoo@2x.png';


  export default {
    name: 'theme',
    data() {

      return {
        title: '主题精选'
        , iconNumber: ICON_NUMBER
        , iconShare: ICON_SHARE
        , iconMore: ICON_MORE
        , classifyList: [
          {
            isNew: true
            , title: '和宝贝一起过圣诞节'
            , episode: 218
            , img: CHRISTMAS
          }
          , {
            isNew: true
            , title: '宫崎骏动漫音乐盒'
            , episode: 116
            , img: MUSIC
          }
          , {
            isNew: false
            , title: '欧美动画电影原声系列'
            , episode: 98
            , img: SOUNDTRACK
          }
          , {
            isNew: false
            , title: '疯狂动物园'
            , episode: 102
            , img: ZOO
          }
        ]
      }
    }
    , components: {
      SysHeader
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
//        self.containerScroll = new IScroll('#container', {
//          useTransform: true,
//          tap: true,
//          click: true,
//          disableMouse: true,
//          disableTouch: false,
//          disablePointer: true
//        });

          self.containerScroll = new BScroll('#container', {
            deceleration: 0.001,
            bounce: true,
            swipeTime: 1800,
            click: true
          })
      });

    },
    methods: {
      scrollReflesh: function () {
        let self = this;
        self.$nextTick(() => {
          self.containerScroll.refresh();
        });
      }
    }
    , created(){
      let self = this;
      setTimeout(function () {
        self.scrollReflesh();
      }, 2000);
    }
  }

</script>

<style lang="less" scoped="page">
  .container {
    background-color: #fff;
    padding: 0 0.22rem;

    .item {
      position: relative;
      margin-top: 0.22rem;
      height: 3.62rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.12rem;
      }

      .new {
        position: absolute;
        height: 0.52rem;
        width: 0.52rem;
        margin: 0.2rem 0 0 0.2rem;
        background-image: url("../../images/common/label_new@2x.png");
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -webkit-background-size: 100% 100%;
      }

      .title {
        position: absolute;
        top: 1.36rem;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: .36rem;
      }

      .title-line {
        border: 0.02rem solid #fff;
        top: 2.02rem;
        position: absolute;
        margin: 0 2.7rem;
        width: 1.6rem;
      }

      .info {
        position: absolute;
        top: 2.32rem;
        width: 100%;
        height: 0.3rem;

        .info-img {
          float: left;
          position: absolute;
          left: 43%;
          height: 100%;
          img {
            float: left;
            margin: 0.02rem;
            width: 0.3rem;
            height: 0.3rem;
          }
        }

        .info-txt {
          float: right;
          height: 100%;
          position: absolute;
          right: 43%;
          margin-left: 10px;
          color: #fff;
          font-size: 0.22rem;
          text-align: center;
        }

      }

      .operate {
        position: absolute;
        bottom: 0.17rem;
        width: 100%;
        height: 0.3rem;

        .share {
          position: absolute;
          width: 0.3rem;
          height: 0.3rem;
          right: 0.87rem;
        }

        .more {
          position: absolute;
          width: 0.3rem;
          height: 0.3rem;
          right: 0.3rem;
        }
      }
    }
  }
</style>
