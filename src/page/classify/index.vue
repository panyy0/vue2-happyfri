<template>
  	<div>
      <SysHeader :title="title"></SysHeader>

      <div class="container">
        <div>
          <div class="item" v-for="(item, index) in classifyList">
            <div class="new"></div>
            <div class="title">
              <span>{{ item.title }}</span>
            </div>
            <!--<div class="title-line">-->

            <!--</div>-->
            <img :src="item.img"/>
          </div>

        </div>
      </div>

    	<SysTabBar></SysTabBar>
  	</div>
</template>

<script>
import SysTabBar from '../../components/TabBar';
import SysHeader from '../../components/Header';

import CHRISTMAS from '../../images/common/pic_christmas@2x.png';

export default {
	name: 'classify',
  	data() {

	    return {
        title: '主题精选'
        , classifyList: [
          {
            isNew: true
            , title: '和宝贝一起过圣诞节'
            , episode: 218
            , img: CHRISTMAS
          }
          , {
            isNew: true
            , title: '和宝贝一起过圣诞节'
            , episode: 218
            , img: CHRISTMAS
          }
        ]
      }
    }
  	,components: {
      SysTabBar
      , SysHeader
  	},
  	created(){

  	}
}

</script>

<style lang="less" scoped="page">
  .container {
    background-color: #fff;
    padding: 0 0.22rem;

    .item {
      margin-top: 0.22rem;
      height: 3.62rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.12rem;
      }

      .new {
        position: absolute;
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

        span {
          color: #fff;
          font-size: 0.36rem;
        }
      }

      .title-line {
        width: 100%;
        border: 2px solid black;
      }
    }
  }
</style>
