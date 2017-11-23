<template>
  <div id="wrapper">
    <div class="container">
      <div class="info">
        <div class="info-top">

        </div>
        <div class="info-bottom">

        </div>
      </div>

      <div class="order">
        <div class="group">
          <div class="cell" v-for="item in orderGroupList">
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
      </div>

      <div class="setting">
        <div class="group">
          <div class="cell" v-for="item in settingGroupList">
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
      </div>
    </div>

    <SysTabBar></SysTabBar>
  </div>
</template>

<script>
  import SysTabBar from 'components/TabBar'
  import {Group, Cell} from 'vux';
  import ICON_ARROW from 'images/mine/icon_arrow@2x.png';
  import BScroll from "better-scroll";
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

          orderGroupList: [{
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
      SysTabBar
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
          height: 1.98rem;
        }
      }

      .order {
        margin-top: 0.16rem;
      }

      .setting {
        margin-top: 0.16rem;
        overflow: hidden;
      }



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
    }
  }

</style>
