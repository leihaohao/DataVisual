<style lang="less">
    @import './card-alone.less';
</style>

<template>
	<div class="section-alone">
      <span v-for="(item,index) in data" :key="`alone${index}`">{{item.name}}：<span>{{item.value}}</span>{{item.unit}}</span>
      <card-edit></card-edit>
    </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'cardAlone',
    components: {
        cardEdit
    },
    computed:{
    },
    props:{
        data: {
          type: Array
        }
    },
    computed:{
        
    },
    mounted(){
    },
    methods: {
      
    }
};
</script>
