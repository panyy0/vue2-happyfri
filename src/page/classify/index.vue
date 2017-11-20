<template>
  	<div>
      <SysHeader :title="title"></SysHeader>
    	<SysTabBar></SysTabBar>
  	</div>
</template>

<script>
import SysTabBar from '../../components/TabBar';
import SysHeader from '../../components/Header';

export default {
	name: 'classify',
  	data() {

	    return {
        title: '主题精选'
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

</style>
