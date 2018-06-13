<style lang="less">
    @import './foot-carousel.less';
</style>

<template>
	<div class="hjj-carouselbtns" v-drag="{callback:bindPos,unactive:!config || elementStatus}" 
         v-show="status.isShow !== 0 || config "
         :style="{position:position,left:`${status.x}px`,top:`${status.y}px`,opacity:status.isShow === 0?'0.4':'1',cursor:config?'move':'point','user-select':config?'none':''}"
         >
        <h3 :class="{'f-dn':!data.top}"><span v-text="data.top"></span></h3>
        <div class="f-pr carousel-warp">
            <div class="pre"><a @click.stop.prevent="pre"></a></div>
                <div class="carousel-list-wrap">
                    <ul class="f-cb" :style="{ width: ulWidth + 'px' }">
                        <li :style="{ left: liOffset + 'px'}" class="btn f-pr" v-for="item in data.bottom">
                            <router-link :to="'/task'">{{item.name}}</router-link>
                        </li>
                    </ul>
                </div>
            <div class="last"><a @click.stop.prevent="last"></a></div>
        </div>
        <card-edit @show="show" @hide="hide" @del="del"></card-edit>
    </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'footCarousel',
    components: {
        cardEdit
    },
    data(){
        return {
            position:'absolute',
            liDom:'',
            liOffset:0,
            config:(this.$route.query.name === 'config'),
        }
    },
    props: {
        index:{
          type:Number
        },
        parents:{
          type:Array
        },
        status:{
          type:Object
        },
        elementStatus:{
            type:Boolean,
            default:false
        },
        data:{
            type:Object
        }
    },
    mounted(){
       this.liDom = document.querySelector('.btn');
    },
    updated(){

    },
    computed:{
        ulWidth(){
            return Number(147* this.data.bottom.length);
        }
    },
    methods: {
        bindPos ({x,y}) {
            this.status.x = x;
            this.status.y = y;
        },
        pre(){
            if(Math.abs(this.liOffset)>=this.liDom.clientWidth){
                this.liOffset = this.liOffset + this.liDom.clientWidth;
            }else if(this.liOffset<0){
                this.liOffset = 0;
            }
        },
        last(){
            if(Math.abs(this.liOffset)< (this.ulWidth-this.liDom.clientWidth)){
                this.liOffset = this.liOffset - this.liDom.clientWidth;
            }else if(Math.abs(this.liOffset)>this.ulWidth){
                this.liOffset = -this.ulWidth;
            }
        },
        show(){
            this.status.isShow = 1;
        },
        hide(){
            this.status.isShow = 0;
        },
        del(){
            this.parents.splice(this.index,1);
        },
    }
};
</script>
