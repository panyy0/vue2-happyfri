<template>
  <div>
    <div id="wrapper">
      <div class="container">
        <div class="info">
          <div class="info-top">

          </div>
          <div class="info-bottom">

          </div>
        </div>

        <div class="order">
          <!--<group label-width="4.5em" label-margin-right="2em" label-align="right">-->
            <!--<cell title="Cell" value="value" is-link></cell>-->
            <!--&lt;!&ndash;<cell title="Cell" value="value" is-link value-align="left"></cell>&ndash;&gt;-->
          <!--</group>-->
          <div class="group">
            <div class="cell">
              <!--<div class="cell-left">-->
                <!--<img :src="orderIcon">-->
                <!--<label>我的订单</label>-->
              <!--</div>-->
              <div class="left-child">
                <img :src="orderIcon" />
              </div>
              <div class="left-child">
                <span>我的订单</span>
              </div>
            </div>
          </div>

        </div>

        <div class="setting"></div>
      </div>
    </div>


    <SysTabBar></SysTabBar>
  </div>
</template>

<script>
  import SysTabBar from 'components/TabBar'
  import {Group, Cell} from 'vux';
  import ICON_ORDER from 'images/mine/icon_order@2x.png';

  export default {
    name: 'mine'
    , data() {
        return {
          orderIcon: ICON_ORDER
        }
    }
    , components: {
      SysTabBar
      , Group
      , Cell
    },
    created() {

    }
    , methods: {}
  }

</script>

<style lang="less">

   @images: "../../images/mine";

  #wrapper {
    .container {
      background-color: #f2f2f2;
      .info {
        height: 6.92rem;

        .info-top {
          height: 4.94rem;
          background: #fff url("@{images}/bg_banner@2x.png") no-repeat;
          background-size:100% 100%;-moz-background-size:100% 100%;;
        }

        .info-bottom {
          background-color: #fff;
          height: 1.98rem;
        }
      }

      .order {
        height: 0.92rem;
        margin-top: 0.16rem;
      }



      .group {
        border-bottom: 0.02rem solid #ededed;
        height: 100%;
        background-color: #fff;

        .cell {
          height: 100%;
          font-size: 0;
          .left-child {
            height: 100%;
            display: inline-block;
            position: relative;
            overflow: hidden;

            img {
              width: 0.44rem;
              height: 0.44rem;
              margin: 0.24rem 0.24rem 0.24rem 0.19rem
            }

            span {
              position: relative;
              top: 0.32rem;
              height: 100%;
              font-size: 0.28rem;
              color: #505050;
              line-height: 100%;
            }
          }

        }
      }
    }
  }

</style>
