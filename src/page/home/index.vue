<template>
  	<div class="home_container">

      <div class="top-bar" >
        <div class="section">
          <img class='image' src='../../images/tab/home_pic_baby@2x.png'/>
        </div>

        <div class='operate'>
          <div class= 'search-icon-view'>
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

      <swiper auto height="4.4rem" dots-position="center" :list="bannerList" v-model="bannerIndex" @on-index-change="onBannerIndexChange"></swiper>

      <tabbar>
        <tabbar-item  v-for="item in tabBarList"  link="item">
          <img :style="item.style" slot="icon" :src="item.image">
          <span v-if="item.text" slot="label">{{ item.text }}</span>
        </tabbar-item>

      </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Swiper, SwiperItem} from 'vux';
import TAB_FIND_ICON from '../../images/tab/home_icon_find_unselected@2x.png';
import TAB_CLASSIFY_ICON from '../../images/tab/home_icon_classify_unselected@2x.png';
import TAB_PLAY_ICON from '../../images/tab/home_icon_play@2x.png';
import TAB_MARKET_ICON from '../../images/tab/home_icon_market_unselected@2x.png';
import TAB_MINE_ICON from '../../images/tab/home_icon_mine_unselected@2x.png';

import BANNER_1 from '../../images/banner/banner@2x.png';

export default {
	name: 'home',
  	data () {
	    return {
        bannerList: [{
          url: 'http://m.baidu.com',
          img: BANNER_1,
          title: '送你一朵fua'
        }, {
          url: 'http://m.baidu.com',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        }, {
          url: 'http://m.baidu.com',
          img: 'https://static.vux.li/demo/5.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }],
        bannerIndex: 0,

        tabBarList: [
          {
            image: TAB_FIND_ICON
            ,selectedImage: '../../images/tab/home_icon_find_selected@2x.png'
            ,text: '发现',
            url: 'item'
          }
          ,{
            image: TAB_CLASSIFY_ICON
            ,selectedImage: '../../images/tab/home_icon_classify_unselected@2x.png'
            ,text: '分类'
          }
          ,{
            image: TAB_PLAY_ICON
            , style: 'width: 40px; height: 40px;'
          }
          ,{
            image: TAB_MARKET_ICON
            ,selectedImage: '../../images/tab/home_icon_market_unselected@2x.png'
            ,text: '乐买'
          }
          ,{
            image: TAB_MINE_ICON
            ,selectedImage: '../../images/tab/home_icon_mine_unselected@2x.png'
            ,text: '我的'
          }
        ]
      }
    },
  	components: {
      Tabbar
      , TabbarItem
      , Swiper
      , SwiperItem
  	},
    created(){

    },
    methods: {
      onBannerIndexChange(index) {
        this.bannerIndex = index;
        console.log('index=' + index);
      }
    }
}
</script>

<style lang="less" scoped>
    .home_container{
      .top-bar {
        float:left;
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
          float:left;
          margin: 0.01rem 0.42rem 0.01rem 0.38rem;
          border-radius: 1rem;
          width: 5.2rem;
          height:0.54rem;
          background: rgba(255,255,255,.3);


          .search-icon-view {
            float: left;
            height: 100%;

            img {
              float: left;
              margin:0.12rem 0.25rem 0 0.3rem;
              width: 0.3rem;
              height: 0.3rem;
            }
          }

          .scan-icon-view {
            float: right;
            height: 100%;

            img {
              float: right;
              margin:0.12rem 0.29rem;
              width: 0.3rem;
              height: 0.3rem;
            }
          }

          .text-view {
            width: 66%;
          }
        }

        .news-icon-view {
          float:left;
          height:100%;
          margin: 0.06rem 0.2rem 0 0;

          img {
            float: right;
            width: 0.48rem;
            height: 0.48rem;
          }
        }
      }
    }



    .dots {

    }

</style>
