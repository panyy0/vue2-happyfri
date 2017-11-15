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
          <div class="section .text-view">
            <div class='text' bindtap='toSearchPage'>今天想听什么</div>
          </div>
          <div class='scan-icon-view' bindtap='scanCode'>
            <img src='../../images/tab/home_icon_scan@2x.png'/>
          </div>
        </div>
        <div class='news-icon-view'>
          <img src='../../images/tab/home_icon_news@2x.png'/>
        </div>

      </div>

      <swiper auto="true" height="225px" dots-position="center" :list="bannerList" v-model="bannerIndex" @on-index-change="onBannerIndexChange"></swiper>
      <tabbar>
        <tabbar-item  v-for="item in tabBarList" link="item">
          <img :style="item.style" slot="icon" :src="item.image">
          <span v-if="item.text" slot="label">{{ item.text }}</span>
        </tabbar-item>

        <!--<tabbar-item link="item">-->
          <!--<img slot="icon" src="../../images/tab/home_icon_find_unselected@2x.png">-->
          <!--<span slot="label">首页</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item link="home">-->
          <!--<span slot="icon" class="iconfont icon-store"></span>-->
          <!--<span slot="label">门店</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item link="home">-->
          <!--<span slot="icon" class="iconfont icon-search"></span>-->
          <!--<span slot="label">发现</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item show-dot link="home">-->
          <!--<span slot="icon" class="iconfont icon-wode"></span>-->
          <!--<span slot="label">我的</span>-->
        <!--</tabbar-item>-->
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

export default {
	name: 'home',
  	data () {
	    return {
        bannerList: [{
          url: 'http://m.baidu.com',
          img: 'https://static.vux.li/demo/1.jpg',
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
            ,text: '发现'
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

    }


    .top-bar {
      float:left;
      position: absolute;
      z-index: 99998;
      margin: 14px 0 0 22px;
      width: 100%;
      height: 30px;
    }

    .top-bar .operate {
      float:left;
      margin: 2px 42px 2px 38px;
      border-radius: 30px;
      width: 260px;
      height: 28px;
      background: rgba(255,255,255,.3);
    }

    .top-bar .operate .search-icon-view {
      float: left;
      height: 100%;
    }

    .top-bar .operate .search-icon-view image {
      margin:13px 25px 0 30px;
      width: 15px;
      height: 15px;
    }

    .top-bar .operate .scan-icon-view {
      float: right;
      height: 100%;
    }

    .top-bar .operate .scan-icon-view image {
      margin:13px 29px;
      width: 15px;
      height: 15px;
    }

    .top-bar .section {
      float: left;
      position: relative;
      height: 100%;
    }


    .top-bar .section .image {
      width: 30px;
      height: 100%;
      border-radius: 30px;
    }

    .top-bar .text-view {
      width: 66%;
    }

    .top-bar .section  .text {
      height: 80%;
      width: 100%;
      font-size: 13px;
      padding: 5px;
      color: #fff;
    }

    .top-bar .news-icon-view {
      float:left;
      height:100%;
      margin: 6px 20px 0 0;
    }

    .top-bar .news-icon-view image {
      width: 24px;
      height: 24px;
    }
</style>
