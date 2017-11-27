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

            <div class="scene">
              <div class="left">
                <div class="content">
                  <img :src="iconScene" />
                  <span>场景</span>
                </div>
              </div>
              <div class="right">
                <div class="row">
                  <div>哄睡</div>
                  <div>叫醒</div>
                  <div>哭闹</div>
                </div>
                <div class="row">
                  <div>吃饭</div>
                  <div>磨耳朵</div>
                  <div>玩耍</div>
                </div>
                <div class="row">
                  <div>伴舞</div>
                  <div>晨读</div>
                  <div>...</div>
                </div>
              </div>
            </div>

            <div class="btn">查看全部分类</div>
          </div>

          <div class="classify-selected">
            <div class="title">
              <span>精选分类</span>
            </div>

            <div class="content">
              <div class="item" v-for="item in selectedList">
                <div class="image">
                  <img :src="item.image" />
                </div>
                <div class="txt">
                  {{ item.title }}
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
import MTabBar from 'components/MTabBar';
import MHeader from 'components/MHeader';

import ICON_RIGHT from 'images/classify/icon_screen@2x.png'
import ICON_FUNCTION from 'images/classify/icon_function@2x.png'
import ICON_SCENE from 'images/classify/icon_scene@2x.png'
import ICON_ANTENATAL_TRAIN from 'images/classify/pic_taijiao@2x.png'
import ICON_EARLY_EDUCATION from 'images/classify/pic_youjiao@2x.png'
import ICON_CHILDREN_SONGS from 'images/classify/pic_erge@2x.png'
import ICON_CHINESE_ENLIGHTEN from 'images/classify/pic_shuiqian@2x.png'
import ICON_SLEEPING_STORY from 'images/classify/pic_guoxue@2x.png'
import ICON_ENGLISH from 'images/classify/pic_english@2x.png'


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
        , iconScene: ICON_SCENE

        , selectedList: [
          {
              'title': '胎教'
              , 'image': ICON_ANTENATAL_TRAIN
          } ,{
            'title': '幼教'
            , 'image': ICON_EARLY_EDUCATION
          } ,{
            'title': '儿童歌谣'
            , 'image': ICON_CHILDREN_SONGS
          } ,{
            'title': '睡前故事'
            , 'image': ICON_SLEEPING_STORY
          } ,{
            'title': '国学启蒙'
            , 'image': ICON_CHINESE_ENLIGHTEN
          } ,{
            'title': '英语'
            , 'image': ICON_ENGLISH
          }
        ]
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

        .title {
          display: flex;
          overflow: hidden;
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

            .row:first-child {
              border-bottom: 0.02rem solid #ff7391;
            }

            .row {
              width: 100%;
              height: 50%;
              display: flex;

              div {
                text-align: center;
                width: 1.87rem;
                height: 100%;
                font-size: 0.28rem;
                color: #666;
                padding: 0.12rem 0;
                border-left: 0.02rem solid #ff7391;

              }
            }
          }
        }

        .scene {
          margin-top: 0.4rem;
          border-radius: 0.1rem;
          height: 2.08rem;
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

              img {
                width: 0.5rem;
                height: 0.5rem;
                margin: 0.46rem auto 0.18rem auto;
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

            .row:last-child {
              border: 0;
            }
            .row {
              width: 100%;
              height: 0.68rem;
              display: flex;
              border-bottom: 0.02rem solid #ff7391;

              div {
                text-align: center;
                width: 1.87rem;
                height: 100%;
                font-size: 0.28rem;
                color: #666;
                padding: 0.12rem 0;
                border-left: 0.02rem solid #ff7391;
              }
            }
          }
        }

        .btn {
          margin: 0.28rem auto 0 auto;
          width: 4rem;
          height: 0.5rem;
          border: 0.02rem solid #ff7391;
          border-radius: 0.1rem;
          padding: 0.05rem 0;
          text-align: center;
          font-size: 0.24rem;
          color: #666;
        }
      }

      .classify-selected {
        margin-top: 0.16rem;
        background-color: #fff;
        padding: 0.4rem 0.22rem;

        .title {
          display: flex;
          overflow: hidden;
          span {
            font-size: 0.34rem;
            color: #222;
          }
        }

        .content {
          margin-top: 0.16rem;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .item {
            width: 3.4rem;
            height: 3.4rem;
            box-shadow:0.05rem 0.05rem 0.2rem 0 #ddd;
            border-radius: 0.12rem;
            margin: 0.16rem 0;


            .image {
              width: 100%;
              height: 2.6rem;
              border-top-left-radius: 0.12rem;
              border-top-right-radius: 0.12rem;
              img {
                width: 100%;
                height: 100%;
                margin: 0 auto;
              }
            }

            .txt {
              width: 100%;
              height: 0.8rem;
              background-color: #fff;
              text-align: center;
              font-size: 0.3rem;
              color: #666;
              padding: 0.26rem;
              border-bottom-left-radius: 0.12rem;
              border-bottom-right-radius: 0.12rem;
            }
          }
        }
      }
    }
  }
</style>
