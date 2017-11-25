<template>
  	<div>
    	<MHeader :title="headerData.title"></MHeader>
    	<MTabBar></MTabBar>
  	</div>
</template>

<script>
import MTabBar from 'components/MTabBar';
import MHeader from 'components/MHeader';


export default {
	name: 'classify',
  	data() {

	    return {
	      headerData: {
	        title: '分类'
        }
      }
    }
  	,components: {
      MTabBar
    , MHeader
  	},
  	created(){

  	}
}

</script>

<style lang="less" scoped="page">

</style>
