<template>
  	<div>
    	<MHeader :title="headerData.title" :iconRight="headerData.iconRight" :contentRight="headerData.contentRight"></MHeader>
      <div id="wrapper">
        <div class="container">
          <div class="classify-hot">
            <div class="title">
              <span>热门分类</span>
            </div>

            <div class="func">
              <div class="left">
                <div class="content">
                  <img :src="iconFunction" />
                  <span>功能</span>
                </div>
              </div>
              <div class="right">
                <div class="row">
                  <div>性格培养</div>
                  <div>习惯养成</div>
                  <div>社交情商</div>
                </div>
                <div class="row">
                  <div>幼小衔接</div>
                  <div>情绪管理</div>
                  <div>...</div>
                </div>
              </div>
            </div>
          </div>

          <div style="margin: 0.16rem auto; background-color: #fff; border: 1px solid;"></div>
        </div>
      </div>
    	<MTabBar></MTabBar>
  	</div>
</template>

<script>
import MTabBar from 'components/MTabBar';
import MHeader from 'components/MHeader';

import ICON_RIGHT from 'images/classify/icon_screen@2x.png'
import ICON_FUNCTION from 'images/classify/icon_function@2x.png'


export default {
	name: 'classify',
  	data() {

	    return {
	      headerData: {
	        'title': '分类'
          , 'iconRight': ICON_RIGHT
          , 'contentRight': '年龄筛选'
        }
        , iconFunction: ICON_FUNCTION
      }
    }
  	,components: {
      MTabBar
    , MHeader
  	}
  	, methods: {

    }
  	, created(){

  	}
}

</script>

<style lang="less" scoped="page">
  #wrapper {
    position: absolute;
    top: 0.88rem;
    left: 0;
    width: 100%;
    bottom: 1.4rem;
    overflow-y: auto;
    .container {
      background-color: #f2f2f2;

      .classify-hot {
        padding: 0.4rem 0.22rem;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border: 1px solid;

        .title {
          display: flex; overflow: hidden; border: 1px solid;
          span {
            font-size: 0.34rem;
            color: #222;
          }
        }

        .func {
          margin-top: 0.4rem;
          border-radius: 0.1rem;
          height: 1.4rem;
          border: 1px solid #ff7391;

          .left {
            width: 1.38rem;
            height: 100%;
            background-color: #ff7391;

            .content {
              height: 100%;
              width: 0.60rem;
              display: flex;
              flex-direction: column;
              position:relative;
              margin-left: 0.4rem;
              border: 1px solid;

              img {
                width: 0.5rem;
                height: 0.5rem;
                margin: 0.12rem auto 0.1rem auto;
              }

              span {
                font-size: 0.28rem;
                color: #fff;
                margin: 0 auto;
              }
            }
          }

          .right {
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid;

            .row {
              width: 100%;
              height: 50%;
              display: flex;
              border: 1px solid;

              div {
                text-align: center;
                width: 1.80rem;
                height: 100%;
                font-size: 0.28rem;
                color: #666;
                padding: 0.05rem 0;
                border: 1px solid;
              }
            }
          }
        }
      }
    }
  }
</style>
