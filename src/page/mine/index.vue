<template>
  <div id="wrapper">
    <div class="container">
      <div class="info">
        <div class="info-top">

        </div>
        <div class="info-bottom">
          <div class="item" v-for="item in funcList">
            <img :src="item.img" />
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>

      <div class="order">
        <MGroup :groupList="orderGroupList"></MGroup>

      </div>

      <div class="setting">
        <MGroup :groupList="settingGroupList"></MGroup>

      </div>
    </div>
    <MTabBar></MTabBar>
  </div>
</template>

<script>
  import MTabBar from 'components/MTabBar'
  import MGroup from 'components/MGroup'
  import {Group, Cell} from 'vux';
  import ICON_ARROW from 'images/mine/icon_arrow@2x.png';
  import ICON_DOWNLOAD from 'images/mine/icon_download@2x.png';
  import ICON_ANCHOR from 'images/mine/icon_anchor@2x.png';
  import ICON_COURSE from 'images/mine/icon_course@2x.png';
  import BScroll from "better-scroll";
  import ICON_HISTORY from "images/mine/icon_history@2x.png";
  import ICON_ORDER from 'images/mine/icon_order@2x.png';
  import ICON_FAVORITE from 'images/mine/icon_collection@2x.png';
  import ICON_VIP from 'images/mine/icon_vip@2x.png';
  import ICON_TASK from 'images/mine/icon_task@2x.png';
  import ICON_INVITATION from 'images/mine/icon_Invitation@2x.png';
  import ICON_OPTION from 'images/mine/icon_opinion@2x.png';


  export default {
    name: 'mine'
    , data() {
        return {

          funcList: [
            {
                'title': '最近播放'
                , 'img': ICON_HISTORY
            }, {
              'title': '我的下载'
              , 'img': ICON_DOWNLOAD
            }, {
              'title': '我的主播'
              , 'img': ICON_ANCHOR
            }, {
              'title': '最近课程'
              , 'img': ICON_COURSE
            }
          ]
          , orderGroupList: [{
            'leftIcon': ICON_ORDER
            , 'title': '我的订单'
            , 'rightIcon': ICON_ARROW
          }]

          , settingGroupList: [
            {
              'leftIcon': ICON_FAVORITE
              , 'title': '我的收藏'
              , 'rightIcon': ICON_ARROW
            }, {
              'leftIcon': ICON_VIP
              , 'title': '加入VIP'
              , 'rightIcon': ICON_ARROW
            }, {
              'leftIcon': ICON_TASK
              , 'title': '任务中心'
              , 'rightIcon': ICON_ARROW
            }, {
              'leftIcon': ICON_INVITATION
              , 'title': '邀请朋友'
              , 'rightIcon': ICON_ARROW
            }, {
              'leftIcon': ICON_OPTION
              , 'title': '意见反馈'
              , 'rightIcon': ICON_ARROW
            }
          ]
        }
    }
    , components: {
      MTabBar
      , MGroup
      , Group
      , Cell
    },
    created() {

    }
    , mounted: function() {
      let self = this;
      self.$nextTick(function() {
        self.homeScroll = new BScroll('#wrapper', {
          deceleration: 0.001,
          bounce: true,
          swipeTime: 1800,
          click: true
        });
      })

    }
    , methods: {

    }
  }

</script>

<style lang="less">

   @images: "../../images/mine";

  #wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .container {
      background-color: #f2f2f2;
      .info {
        height: 6.92rem;

        .info-top {
          height: 4.94rem;
          background: #fff url("@{images}/bg_banner@2x.png") no-repeat;
          background-size:100% 100%;-moz-background-size:100% 100%;
        }
        .info-bottom {
          background-color: #fff;
          width: 100%;
          height: 1.98rem;
          margin: 0 auto;
          overflow: hidden;

          .item {
            float: left;
            width: 25%;
            height: 100%;
            padding: 0.3rem;

            img {
              display: block;
              width: 0.72rem;
              height: 0.72rem;
              margin: 0 auto;
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 0.28rem;
              color: #222;
              margin-top: 0.28rem;
            }
          }
        }

      }

      .order {
        margin-top: 0.16rem;
      }

      .setting {
        margin-top: 0.16rem;
        overflow: hidden;
      }
    }
  }

</style>
