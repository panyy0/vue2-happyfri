<template>
  <div id="home">
      <div class="home-container"  id="homeContainer">
        <div>
          <div>
            <MTopBar></MTopBar>

            <swiper auto  height="4.4rem" dots-position="center" dots-class="custom-bottom" v-model="bannerIndex"
                    @on-index-change="onBannerIndexChange">
              <swiper-item v-for="(item, index) in bannerList" :key="index"><img :src="item.img" style="height: 4.4rem; width: 100%;"></swiper-item>
            </swiper>
          </div>

          <div class='items'>
            <div class='item' v-for="item in itemList">
              <router-link :to="item.to" tag="div" class="item-content" v-if="item.to">
                <img :src="item.url"/>
                <span>{{ item.name }}</span>
              </router-link>

              <div v-else class="item-content">
                <img :src="item.url"/>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>



          <div class="recommendation">
            <div class="title">
              <div class="content">
                <img src='../../images/tab/home_icon_grass_right@2x.png'/>
                <span>每日推荐</span>
                <img src='../../images/tab/home_icon_grass_right@2x.png'/>
              </div>
              <div class="more">
                <span>更多</span>
              </div>


            </div>

            <div class="books">
              <div class="book" v-for="item in recommendList">
                <div>
                  <img :src="item.url"/>
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    <MTabBar></MTabBar>
  </div>


</template>

<script>
  import {Swiper, SwiperItem} from 'vux';
  import MTabBar from '../../components/MTabBar'
  import MTopBar from '../../components/MTopBar'
//  import BScroll from "better-scroll";
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
            , 'to': 'theme'
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
      MTabBar
      , MTopBar
      , Swiper
      , SwiperItem
    },
    created(){

    },
    mounted: function() {

    },
    methods: {
      onBannerIndexChange(index) {
        this.bannerIndex = index;
      }


    }
  }
</script>

<style lang="less" scoped>
  .home-container {

    background: #f4f4f4;
    position: absolute;
    bottom: 1.1rem;
    top:0;
    overflow-y: auto;

    .mod {
      top: 0.2rem;
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

    .recommendation {
      position: relative;
      width: 100%;
      padding: 0.5rem 0.2rem;
      margin-top: 0.16rem;
      background-color: #fff;

      .title {
        position: relative;
        width: 100%;
        display: flex;

        .content {
          overflow: hidden;
          display: flex;
          position: relative;
          margin: 0 auto;

          img {
            width: 0.3rem;
            height: 0.3rem;
            margin: auto 0;
          }

          span {
            color: #222;
            font-size: 0.34rem;
            margin: auto 0.2rem;
          }
        }

        .more {
          overflow: hidden;
          display: flex;
          position: absolute;
          right: 0;
          top: 0.05rem;

          span {
            color: #666;
            font-size: 0.24rem;
          }
        }

      }

      .books {
        margin-top: 0.5rem;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .book {
          display: flex;
          display: -webkit-flex;
          flex-wrap: wrap;
          justify-content: space-between;

          div {
            img {
              display: block;
              width: 2.1rem;
              height: 2.1rem;
            }

            span {
              display: block;
              text-align: center;
              color: #222;
              font-size: 0.26rem;
              margin-top: 0.26rem;
            }
          }
        }
      }
    }


    .vux-indicator.custom-bottom {
      bottom: -0.16rem;
    }
  }




  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
