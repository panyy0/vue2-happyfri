<template>
  <div>
    <tabbar>
      <tabbar-item v-for="(item, index) in tabBarList" :link="item.url" @on-item-click="changePage(index, item.url)">
        <img :style="item.style || ''" slot="icon" :src="currentPath.indexOf(item.url) !== -1 ? (item.selectedImage || item.image) : item.image">
        <span :class="currentPath.indexOf(item.url) !== -1 ? 'selected' : 'unSelect'" v-if="item.text" slot="label">{{ item.text }}</span>
      </tabbar-item>
    </tabbar>
  </div>

</template>

<script>
  import {Tabbar, TabbarItem} from 'vux';
  import { mapState, mapActions, mapMutations } from 'vuex'
  import { INITIALIZE_TABBAR } from '../config/mutation-types'


  import TAB_FIND_ICON from '../images/tab/home_icon_find_unselected@2x.png';
  import TAB_FIND_SELECTED_ICON from '../images/tab/home_icon_find_selected@2x.png';
  import TAB_CLASSIFY_ICON from '../images/tab/home_icon_classify_unselected@2x.png';
  import TAB_CLASSIFY_SELECTED_ICON from '../images/tab/home_icon_classify_selected@2x.png';
  import TAB_PLAY_ICON from '../images/tab/home_icon_play@2x.png';
  import TAB_MARKET_ICON from '../images/tab/home_icon_market_unselected@2x.png';
  import TAB_MARKET_SELECTED_ICON from '../images/tab/home_icon_market_selected@2x.png';
  import TAB_MINE_ICON from '../images/tab/home_icon_mine_unselected@2x.png';
  import TAB_MINE_SELECTED_ICON from '../images/tab/home_icon_mine_selected@2x.png';

  export default {
    name: 'SysTabBar'
    ,data () {
      return {
        tabBarList: [
          {
            image: TAB_FIND_ICON
            , selectedImage: TAB_FIND_SELECTED_ICON
            , text: '发现',
            url: 'home'
          }
          , {
            image: TAB_CLASSIFY_ICON
            , selectedImage: TAB_CLASSIFY_SELECTED_ICON
            , text: '分类',
            url: 'classify'
          }
          , {
            image: TAB_PLAY_ICON
            , style: 'position: relative; top: -0.2rem; left: -0.2rem; width: 1rem; height: 1rem;'
            , url: 'play'
          }
          , {
            image: TAB_MARKET_ICON
            , selectedImage: TAB_MARKET_SELECTED_ICON
            , text: '乐买',
            url: 'market'
          }
          , {
            image: TAB_MINE_ICON
            , selectedImage: TAB_MINE_SELECTED_ICON
            , text: '我的',
            url: 'mine'
          }
        ]
      }
    }
    ,computed: {
      currentPath: function() {
        let path = this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1);
        return path || 'home';
      }
    }
    ,components: {
      Tabbar
      , TabbarItem
    },
    created(){
        this.INITIALIZE_TABBAR();
    },
    mounted: function() {

    },
    methods: {
      ...mapActions([
        INITIALIZE_TABBAR
      ])
      ,changePage(index, path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style lang="less" scoped>
  .unSelect {
    color: #666;
  }

  .selected {
    color: #ff7391;
  }

  /*底部盒子固定，元素浮动，盒子随着元素个数增加而没有撑大*/
  /*解决方法：使用clear 或者 overflow：hidden;*/
</style>
