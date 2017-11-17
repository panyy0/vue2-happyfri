<template>
  <div id="home">
      <div class="home_container"  id="homeContainer">
        <div>
          <div>
            <div class="top-bar">
              <div class="section">
                <img class='image' src='../../images/tab/home_pic_baby@2x.png'/>
              </div>

              <div class='operate'>
                <div class='search-icon-view'>
                  <img src='../../images/tab/home_icon_search@2x.png'/>
                </div>
                <div class="section text-view">
                  <div class='text'>今天想听什么</div>
                </div>
                <div class='scan-icon-view'>
                  <img src='../../images/tab/home_icon_scan@2x.png'/>
                </div>
              </div>

              <div class='news-icon-view'>
                <img src='../../images/tab/home_icon_news@2x.png'/>
              </div>

            </div>

            <swiper auto  height="4.4rem" dots-position="center" dots-class="custom-bottom" v-model="bannerIndex"
                    @on-index-change="onBannerIndexChange">
              <swiper-item v-for="(item, index) in bannerList" :key="index"><img :src="item.img" style="height: 4.4rem; width: 100%;"></swiper-item>
            </swiper>
          </div>

          <div class='items'>
            <div class='item' v-for="item in itemList">
              <div class="item-content">
                <img :src="item.url"/>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>

          <div class='recommendation-items' >
            <div class='recommendation-item-title'>
              <div class='title-text'>
                <img class='left' src='../../images/tab/home_icon_grass_right@2x.png'/>
                <span class='text'>今日推荐</span>
                <img class='right' src='../../images/tab/home_icon_grass_right@2x.png'/>
              </div>

              <div class='more'>
                <span>更多</span>
              </div>

            </div>

            <div>
              <div class='recommendation-item-content' v-for="item in recommendList" >
                <div >
                  <img :src="item.url"/>
                  <span class='text'>{{ item.name }}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


    <SysTabBar></SysTabBar>


  </div>


</template>

<script>
  import {Swiper, SwiperItem} from 'vux';
  import SysTabBar from '../../components/TabBar'
  import IScroll from "iscroll";

  import BANNER_1 from '../../images/banner/banner@2x.png';


  import ITEM_RANKING from '../../images/tab/home_icon_ranking@2x.png';
  import ITEM_THEME from '../../images/tab/home_icon_theme@2x.png';
  import ITEM_ANCHOR from '../../images/tab/home_icon_anchor@2x.png';
  import ITEM_COURSE from '../../images/tab/home_icon_course@2x.png';
  import ITEM_PICTURE from '../../images/tab/home_icon_Picture@2x.png';
  import ITEM_MUSIC from '../../images/tab/home_icon_music@2x.png';
  import ITEM_RHYME from '../../images/tab/home_icon_rhyme@2x.png';
  import ITEM_CLASSIC from '../../images/tab/home_icon_classic@2x.png';

  import RECOMMEND_CHENGCHENG from '../../images/tab/home_pic_chengcheng@2x.png';
  import RECOMMEND_KAISHU from '../../images/tab/home_pic_kaishu@2x.png';
  import RECOMMEND_NUANNUAN from '../../images/tab/home_pic_nuannuan@2x.png';

  export default {
    name: 'home',
    data () {
      return {
        bannerList: [{
          url: 'http://m.baidu.com',
          img: BANNER_1,
        }, {
          url: 'http://m.baidu.com',
          img: BANNER_1,
        }, {
          url: 'http://m.baidu.com',
          img: BANNER_1,
        }]
        ,bannerIndex: 0

        , itemList: [
          {
            'url': ITEM_RANKING
            , 'name': '排行榜'
          }
          , {
            'url': ITEM_THEME
            , 'name': '主题精选'
          }
          , {
            'url': ITEM_ANCHOR
            , 'name': '优质主播'
          }
          , {
            'url': ITEM_COURSE
            , 'name': '启蒙课程'
          }
          , {
            'url': ITEM_PICTURE
            , 'name': '绘本故事'
          }
          , {
            'url': ITEM_MUSIC
            , 'name': '胎教音乐'
          }
          , {
            'url': ITEM_RHYME
            , 'name': '儿童歌谣'
          }
          , {
            'url': ITEM_CLASSIC
            , 'name': '国学经典'
          }
        ]

        , recommendList: [
          {
            'url': RECOMMEND_CHENGCHENG
            , 'name': '橙橙讲故事'
          }
          , {
            'url': RECOMMEND_KAISHU
            , 'name': '凯叔西游记'
          }
          , {
            'url': RECOMMEND_NUANNUAN
            , 'name': '暖暖心绘本'
          }
        ]
      }
    },
    components: {
      SysTabBar
      , Swiper
      , SwiperItem
    },
    created(){
      let self = this;
      setTimeout(function () {
        self.scrollReflesh();
      }, 2000);
    },
    mounted: function() {
      let self = this;
      self.$nextTick(function() {
        self.homeScroll = new IScroll('#homeContainer', {
          useTransform: true,
          // scrollbars: true,
          tap : true,
          disableMouse: true,
          disableTouch:false,
          disablePointer: true
        });



      })

    },
    methods: {
      onBannerIndexChange(index) {
        this.bannerIndex = index;
      }
      /**
       * 刷新滚条
       */
      ,scrollReflesh: function() {
        let self = this;
        self.$nextTick(() => {
          self.homeScroll.refresh();
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .home_container {

    background: #f4f4f4;
    position: absolute;
    bottom: 1.1rem;
    top:0;

    .top-bar {
      float: left;
      position: absolute;
      z-index: 999;
      margin: 0.56rem 0 0 0.2rem;
      height: 0.6rem;

      .section {
        float: left;
        position: relative;
        height: 100%;

        .image {
          float: left;
          width: 0.6rem;
          height: 100%;
          border-radius: 0.6rem;
        }

        .text {
          height: 100%;
          width: 100%;
          font-size: 0.26rem;
          padding: 0.11rem 0;
          color: #fff;
        }
      }

      .operate {
        float: left;
        margin: 0.01rem 0.42rem 0.01rem 0.38rem;
        border-radius: 1rem;
        width: 5.2rem;
        height: 0.54rem;
        background: rgba(255, 255, 255, .3);

        .search-icon-view {
          float: left;
          height: 100%;

          img {
            float: left;
            margin: 0.12rem 0.25rem 0 0.3rem;
            width: 0.3rem;
            height: 0.3rem;
          }
        }

        .scan-icon-view {
          float: right;
          height: 100%;

          img {
            float: right;
            margin: 0.12rem 0.29rem;
            width: 0.3rem;
            height: 0.3rem;
          }
        }

        .text-view {
          width: 66%;
        }
      }

      .news-icon-view {
        float: left;
        height: 100%;
        margin: 0.06rem 0.2rem 0 0;

        img {
          float: right;
          width: 0.48rem;
          height: 0.48rem;
        }
      }
    }

    .items {
      margin: 0 auto;
      padding: 0.5rem 0.46rem;
      width: 100%;
      background: #fff;
      overflow: hidden;

      .item {
        float: left;
        width: 0.94rem;
        margin-right: 0.94rem;
        margin-bottom: 0.4rem;

        .item-content {
          width: 1rem;

          img {
            display: block;
            width: 0.84rem;
            height: 0.84rem;
            margin: 0 auto;
          }

          span {
            display: block;
            font-size: 0.24rem;
            color: #5f5f5f;
            text-align: center;
            margin-top: 0.18rem;
          }
        }

      }

      .item:nth-child(4n + 0) {
        margin-right: 0;
      }

      .item:first-child {
        margin-left: 0;
      }

      .item:nth-child(4n + 1) {
        margin-left: 0;
      }

      .item:nth-last-child(1) {
        margin-bottom: 0;
      }

      .item:nth-last-child(2) {
        margin-bottom: 0;
      }

      .item:nth-last-child(3) {
        margin-bottom: 0;
      }

      .item:nth-last-child(4) {
        margin-bottom: 0;
      }
    }


    .recommendation-items {
      margin: 0.16rem 0 0.14rem 0;
      padding: 0.5rem 0.22rem;
      width: 100%;
      background: #fff;
      overflow: hidden;

      .recommendation-item-title {
        /* text-align: center;  */
        margin-bottom: 0.5rem;
        overflow: hidden;

        .title-text {
          float: left;
          margin-left: 2.3rem;

          img {
            width: 0.3rem;
            height: 0.3rem;
          }

          .left {
            margin-right: 0.22rem;
            margin-top: 0.08rem;
          }

          .right {
            margin-left: 0.22rem;
            margin-top: 0.08rem;
          }

          span {
            float: left;
            color:#222222;
            font-size: 0.34rem;
          }
        }

        .more {
          float: right;
          margin: 0.05rem 0.46rem 0 0;

          span {
            float: right;
            margin-top: 0.05rem;
            color: #666;
            font-size: 0.24rem;
          }
        }
      }

      .recommendation-item-content {
        float: left;
        text-align: center;
        margin-right: 0.38rem;

        img {
          width: 2.1rem;
          height: 2.1rem;
          display: block;
          margin-bottom: 0.26rem;
        }

        .text {
          color:#222222;
          font-size: 0.26rem;
          position: relative;
          top: -0.84rem;
        }
      }

      .recommendation-item-content:nth-child(3n + 0) {
        margin-right: 0;
      }
    }

    .vux-indicator.custom-bottom {
      bottom: -0.16rem;
    }
  }




  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
