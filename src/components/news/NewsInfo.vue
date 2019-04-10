<template>
  <div class="newsInfo-container">
    <h3>{{ newsInfo.title }}</h3>
    <p>
      <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsInfo.click }}次</span>
    </p>
    <hr>
    <div class="textArea">{{ newsInfo.zhaiyao }}</div>
    <comment-box :newsId="this.id"></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/component.vue'
export default {
    data(){
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    created(){
      this.getNewsInfo()
    },
    methods:{
      getNewsInfo(){
          this.$http.get('../../../static/newsList.json').then(result=>{
            result.body.message.some((item,index)=>{
              if(index+1 == this.id){
                this.newsInfo = item
                return true
              }
            })
          })
      }
    },
    components:{
      "comment-box":comment
    }
}
</script>

<style lang="scss" scoped>
.newsInfo-container{
  h3{
    text-align: center;
    line-height: 40px;
    color: red;
  }
  p{
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    color:blue;
    font-size: 14px;
  }
}
</style>
