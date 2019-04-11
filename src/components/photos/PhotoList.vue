<template>
  <div>
      <!-- 导航栏 -->
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in photoMsg" :key="item.id" @click="getPhotListById(item.id)">
                    {{ item.content }}
                </a>
            </div>
        </div>
    </div>

            <!-- 列表 -->
    <ul class="imgList">
        <router-link v-for="item in list" :key="item.title" :to="'/home/photoInfo/'+item.id" tag="li">
            <img v-lazy="item.url">
            <div class="imginfo">
                <h4>{{ item.title }}</h4>
                <p>{{ item.zhaiyao }}</p>
            </div>
        </router-link>
    </ul>
  </div>
    
</template>

<script>
import mui from '././../../lib/mui/js/mui.js'



export default {
    data(){
        return {
            photoMsg:[],
            list:[]
        }
    },
    created(){
        this.getNavList()
        this.getPhotListById(0)
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getNavList(){
            this.$http.get('../../../static/photoMsg.json').then(result=>{
                result.body.message.unshift({id:0,content:"全部"})
                this.photoMsg = result.body.message
            })
        },
        getPhotListById(nid){
            this.$http.get('../../../static/imgInfo.json').then(result=>{
                this.list = []
                for(var i=0;i<=result.body.message.length;i++){
                    if(result.body.message[i].id == nid){
                        
                        this.list.push(result.body.message[i])
                    }
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        touch-action: none;
    }

    .photoList {
        list-style: none;
        margin:0;
        padding:10px;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            margin-bottom: 10px;
            text-align: center;
            box-shadow: 0 0 10px #999;
            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            img{
                zoom:0.5;
                width:100%;
                vertical-align: middle;
            }
            position: relative;
        }

        .photoInfo{
            position: absolute;
            bottom:0;
            color:white;
            text-align: left;
            background-color:rgba(0,0,0,0.4);
            width:100%;
            max-height: 84px;
            .info-title{
                font-size: 16px;
            }
            .info-content{
                font-size: 14px;
            }   
        }
    }
    .imgList{
        list-style: none;
        padding:0 10px;
        
        li{
            position: relative;
            .imginfo{
                position: absolute;
                bottom:0px;
                color:white;
                background-color: rgba(0,0,0,0.4);
                width:100%;
                line-height: 30px;
                text-align: left;
                h4{
                    font-size: 14px;
                }
                p{
                    font-size: 13px;
                    color:white;
                }
            }
        }
        img{
            width:100%;
            margin-bottom: 10px;
            background-color: #eee;
            display: block;
        }
        img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    }
    
</style>
