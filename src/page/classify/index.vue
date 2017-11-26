<template>
  	<div>
    	<MHeader :title="headerData.title" :iconRight="headerData.iconRight" :contentRight="headerData.contentRight"></MHeader>
    	<MTabBar></MTabBar>
  	</div>
</template>

<script>
import MTabBar from 'components/MTabBar';
import MHeader from 'components/MHeader';

import ICON_RIGHT from 'images/classify/icon_screen@2x.png'


export default {
	name: 'classify',
  	data() {

	    return {
	      headerData: {
	        'title': '分类'
          , 'iconRight': ICON_RIGHT
          , 'contentRight': '年龄筛选'
        }
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

</style>
