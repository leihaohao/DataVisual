<style lang="less">
    @import './card-jhzx.less';
</style>

<template>
	<card :title="'计划执行'" type="jhzx">
      <card-list :data="datas1" :top="top1" :vertical="true"></card-list>
      <card-list :data="datas1" :top="top1" :vertical="true"></card-list>
      <card-list :data="datas1" :top="top1" :vertical="true"></card-list>
  </card>
</template>

<script>
import card from '@/views/components/card/card.vue';
import cardList from '@/views/components/card-list/card-list.vue';
export default {
    name: 'cardJhzx',
    components: {
      card,cardList
    },
    data(){
        return {
            top1:[{name:'订购执行计划',value:123}],
            datas1:[
              {name:'计划项目',value:123},
              {name:'计划金额',value:123},
              {name:'执行率',value:123},
              {name:'经费计算',value:123},
              {name:'经费结算率',value:123},
            ],
        }
    },
    props:{
        hideProps:{
          type:String,
        }
    },
    computed:{
    },
    mounted(){
    },
    methods: {
      deleteEle(){}
    }
};
</script>
