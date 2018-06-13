<style lang="less">
@import './china-map.less';
    
</style>

<template>
    <div class="china-map">
        <Button class="button1" style="color:#fff;" @click.stop.prevent="smallMap()" title="缩小地图" type="ghost" shape="circle" icon="minus-round"></Button>
        <Button  style="color:#fff;" @click.stop.prevent="largeMap()" title="全屏地图" type="ghost" shape="circle" icon="plus-round"></Button>
        <div :style="{width:mapWidth+'px',height:mapHeight+'px',marginLeft:marginLeft+'px'}" class="charts" id="china-map"></div>
    </div>
</template>

<script>
import 'echarts/map/js/china'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/map'
export default {
    name: 'china-map',
    components: {
    },
    data(){
        return {
            mapWidth:1000,
            mapHeight:800,
            marginLeft:'-500',
            chinaMap:'',
            options:{
                tooltip : {
                    trigger: 'item'
                },

                geo: {
                    aspectScale:0.72,
                    map: 'china',
                    label: {
                        normal: {
                            show: false,
                            formatter: '{a}',
                            textStyle:{
                                color: '#FFF'
                            }
                        },
                        emphasis:{
                            show: true,
                            formatter: '{a}',
                            textStyle:{
                                color: '#FFF',
                                verticalAlign:'middle',
                                align:'center'
                            }
                        }
                    },
                    zoom:1,                                     //当前视角的缩放比例
                    /*scaleLimit:{                                //所属组件的z分层，z值小的图形会被z值大的图形覆盖
                        min:1,                                  //最小的缩放值
                        max:1,                                  //最大的缩放值
                    },*/
                    roam: true,                              //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    itemStyle: {
                        normal: {
                            show:true,
                            shadowColor: 'rgba(0,153,255,1)',
                            //shadowColor: 'rgba(5, 5, 0, 1)',
                            shadowBlur: 15,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            areaColor: 'rgba(16,48,114,1)',
                            //color: 'rgba(16,48,114,0.6)', //地图背景色
                            //borderColor: '#404a59',
                            borderWidth:0.5,
                            opacity:0.7,
                            borderColor: 'rgba(153,153,153,1)'  //省市边界线,
                            //borderColor: 'transparent'
                        },
                        emphasis: {
                            //areaColor: '#2a333d',
                            show:false,
                            color: 'rgba(14,120,201,0.8)'//悬浮背景
                        },

                    },
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'quinticInOut'
                },
                series: []
            },
            mapMarkData:[
            {
                name:"基地",
                icon:"image://"+require('@/assets/images/markpoint/main_icon_jidi.png'),
                notLegend:true,
                label:{normal: {show: true,position: 'bottom'}},
                data:[
                    {name:"火箭军总部",coord:[116.4551,40.2539]},
                    {name:"xx基地",coord:[91.1865,30.1465]},//拉萨
                    {name:"xx基地",coord:[103.5901,36.3043]},//兰州
                    {name:"xx基地",coord:[103.9526,30.7617]},//成都
                    {name:"xx基地",coord:[101.4038,36.8207]},//西宁
                    {name:"xx基地",coord:[127.9688,45.368]}//哈尔滨
                ],
                symbolSize:35
            },{
                name:"旅团",
                icon:"image://"+require('@/assets/images/markpoint/main_icon_lvtuan.png'),
                data:[
                    {name:"长春",coord:[125.8154,44.2584]},
                    {name:"韶关",coord:[113.7964,24.7028]},
                    {name:"苏州",coord:[120.6519,31.3989]},
                    {name:"衢州",coord:[118.6853,28.8666]}
                ],
                symbolSize:2
            },{
                name:"维修厂",
                icon:"image://"+require('@/assets/images/markpoint/main_icon_weixiu.png'),
                data:[
                    {name:"武汉",coord:[114.3896,30.6628]},
                    {name:"秦皇岛",coord:[119.2126,40.0232]},
                    {name:"重庆",coord:[107.7539,30.1904]},
                    {name:"郑州",coord:[113.4668,34.6234]}
                ],
                symbolSize:20
            },{
                name:"仓库",
                icon:"image://"+require('@/assets/images/markpoint/main_icon_cangku.png'),
                data:[
                    {name:"邢台",coord:[114.8071,37.2821]},
                    {name:"长沙",coord:[113.0823,28.2568]},
                    {name:"青岛",coord:[120.4651,36.3373]},
                    {name:"贵阳",coord:[106.6992,26.7682]}
                ],
                symbolSize:20
            },{
                name:"任务",
                icon:'',
                data:[
                    {name:"德州",coord:[116.6858,37.2107]}
                ],
                symbolSize:20
            }
            ]
        }
    },
    props: {
        width:{
            type:String,
        },
        height:{
            type:String,
        }
    },
    created() {
         this.filterMapMarkData();

    },
    computed:{
    },
    mounted(){
        this.chinaMap = this.$echarts.init(document.getElementById('china-map'));
        this.initMap(this.chinaMap);
    },
    methods: {
        largeMap(){
            this.mapWidth = 1872;
            this.mapHeight = 932;
            this.marginLeft = '-940';
            this.$nextTick(function(){
                this.chinaMap.resize();
            });
        },
        smallMap(){
            this.mapWidth = 1000;
            this.mapHeight = 800;
            this.marginLeft = '-500';
            this.$nextTick(function(){
                this.chinaMap.resize();
            });
        },
        initMap(chinaMap){
            chinaMap.setOption(this.options);
            this.setMapMark(chinaMap,this.mapMarkData,false);
        },
        buildMapMark(mapMarkData) {
            var result=[];
            for(var j = 0;j<mapMarkData.length;j++ ){
                var mapItem=mapMarkData[j];
                result.push({
                    name:  mapItem.name,
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    showEffectOn:'emphasis',
                    rippleEffect: {
                        scale:1.15,
                        brushType: 'stroke'//stroke|fill
                    },
                    label: this.deepCopy({
                        normal: {
                            show: false,
                            position: 'bottom',
                            formatter: '{b}',
                            textStyle:{fontSize :12}
                        }
                    },mapItem["label"]),
                    symbol: mapItem.icon,
                    symbolRotate: 0,
                    symbolSize: mapItem["symbolSize"]?mapItem["symbolSize"]:15,
                    symbolOffset:mapItem["symbolOffset"]?mapItem["symbolOffset"]:[0,0],
                    itemStyle: Object.assign(true,{
                        normal: {
                            color: "#FFF"
                        },
                        formatter: '{b}'
                    },mapItem["itemStyle"]),
                    data: mapItem.data.map(function(ct){
                        return {
                            name: ct["name"],
                            value: ct["coord"].concat(100)
                        };
                    })
                })
            }
            return result;
        },
        setMapMark(charts,mapMarkData,isExtend){
            var me=this;
            var BJData = [
                [{name:'拉萨',value:100},{name:'北京'}],
                [{name:'兰州',value:100},{name:'北京'}],
                [{name:'成都',value:100},{name:'北京'}],
                [{name:'西宁',value:100},{name:'北京'}],
                [{name:'哈尔滨',value:100},{name:'北京'}]
            ];
            var planePath = "image://"+require('@/assets/images/markpoint/main_icon_jidi.png');
            // var myChart = echarts.init(document.getElementById(id));
            // var tmp_option=myChart.getOption();
            
            var legendData=mapMarkData.map(function(it){return it.notLegend?{}:{name:it.name};});
            var mapMark=this.buildMapMark(mapMarkData);
            charts.setOption({
                legend: {
                    orient: 'vertical',
                    top: '8%',
                    left: '30%',
                    data:isExtend&&tmp_option.legend.length>0?tmp_option.legend[0].data.concat(legendData):legendData,
                    textStyle: {
                        color: '#FFF'
                    },
                    selectedMode: 'multiple',
                    itemHeight:15,
                    itemWidth:15,
                    show:true
                },
                series:isExtend&&tmp_option.series?tmp_option.series.concat(mapMark):mapMark
            });
        },
        filterMapMarkData(){
            this.mapMarkData= this.mapMarkData.concat(function(items){
            var result=[];
            if(items["data"]){
                for(var i =0 ; i < items["data"].length;i++){
                    var dt=items["data"][i];
                    var val=(Math.random()*100).toFixed(0);
                    result.push({
                        name:"编配率",
                        notLegend:true,
                        label:{
                            normal: {
                                show: true,
                                position: 'inside',//inside
                                formatter: '{b}',
                                textStyle:{
                                    fontSize :9,
                                    fontWeight:0,
                                    textBorderWidth:0
                                }
                            }
                        },
                        symbolOffset:[0,-28],
                        icon:"image://"+require('@/assets/images/markpoint/main_icon_process_'+(val>=90?"green":(val>=80?"orange":"red"))+".png"),
                        data:[
                            {name:val+"%",coord:dt["coord"]}//1.2
                        ],
                        symbolSize:30
                    });
                }
            }
            return result;
            }(this.mapMarkData[0]));//基地循环
        },
        deepCopy(target,obj){
            let inner = function(a,b){
                if(b == undefined) return ;
                Object.keys(b).map((item,key)=>{
                    if(typeof b[item] != 'object'){
                        a[item] = b[item];
                    }else if(b[item] != undefined){
                        inner(a[item],b[item]);
                    }
                })
            }
            inner(target,obj);
            return target;
        }    

        
}
};
</script>
