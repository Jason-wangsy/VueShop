<template>
  <div class="photoinfo-container">
    <div class="head">
      <h1>狗（拉丁文Canis lupus familiaris）属于脊索动物门</h1>
      <div class="head-container">
        <p>发表时间：2019-04-11 19:39：40</p>
        <p>点击：112222次</p>
      </div>
    </div>
    <hr>
    <!-- <div class="thumbs">
        <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100"
            @click="$preview.open(index, list)" :key="item.src">
    </div> -->
    <div>
    <vue-preview
        :list="list"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
        :previewBoxStyle="{border: '1px solid #eee'}"
        :tapToClose="true"
        @close="closeHandler"
        @destroy="destroyHandler"
      />
    </div>

    <div class="text-container">
      在远古时期，人们根据对动物的认知以及自身生活的需要，选择了马、牛、羊、鸡、狗、猪进行饲养驯化，逐渐成为了人们生活中不可或缺的家畜，这六种动物就称为“六畜”。《三字经·训诂》云：“马牛羊，鸡犬豕。此六畜，人所饲”，“牛能耕田，马能负重致远，羊能供备祭器，鸡能司晨报晓，犬能守夜防患，猪能宴飨速宾。”在中国古代农业社会时期，六畜的驯养为人们的生活提供了基本保障，“五谷丰登，六畜兴旺”应该是农耕文明时期的人们对美好生活的极致向往。在六畜中，狗是最早被驯养的，它不仅能够看家护院，也用来祭祀以及食用。
    </div>
    <comment-box :newsId="id"></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/component.vue'
export default {
  data(){
    return {
      id: this.$route.params.id,
      list:[]
    }
  },
  created(){
    this.getPhotoInfo()
  },
  methods:{
    getPhotoInfo(){
      this.$http.get('../../../static/sPhoto.json').then(result=>{
        this.list= result.body.message
      })
    },
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  },
  components:{
    "comment-box":comment
  }
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
  .head{
    h1{
      color:blue;
      font-size: 15px;
      text-align: center;
      text-align: 40px;
      margin-top:20px;
    }
    .head-container{
      display: flex;
      justify-content: space-between;
      padding-top:20px;
      padding-left:10px;
      padding-right: 10px;
    }
  }
  .text-container{

  }
}
</style>
