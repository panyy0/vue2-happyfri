<template>
  	<div class="home_container">
      <swiper :list="bannerList" v-model="bannerIndex" @on-index-change="onBannerIndexChange"></swiper>

      <tabbar>

        <tabbar-item v-for="item in tabBarList" link="item">
          <img slot="icon" :src="item.image">
          <span slot="label">{{ item.text }}</span>
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
</style>
