<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        
        <div class="newsInfoList">
            <div class="newsInfoItem" v-for="(item, index) in commentList" :key="index">
                <div class="cmt-head">
                    第{{ index+1 }}楼&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }} 
                </div>
                <div class="cmt-body">
                    {{ item.content == "" ? "没有评论内容" : item.content}}
                </div>
             </div>   
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载评论</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageIndex: 1,
            commentList:[]
        }
    },
    created(){
        this.getCommentList()
    },
    methods:{
        getCommentList(){
            this.$http.get('../../../static/commentData.json').then(result=>{
                // var arry = []
                for(var item in result.body.message){
                    if(result.body.message[item].id == this.newsId && result.body.message[item].pageIndex == this.pageIndex){
                        //  arry.push(result.body.message[item]) 
                        this.commentList = this.commentList.concat(result.body.message[item])
                    }
                }
                // this.commentList = arry
            })
        },
        getMore(){
            this.pageIndex++
            this.getCommentList()
        }
    },
    props:["newsId"]
}
</script>

<style lang="scss" scoped>
.comment-container{
    padding-bottom:50px;
    textarea{
        margin-bottom:0px;
    }
    .newsInfoList{
        margin-top:10px;
        .newsInfoItem{

            .cmt-head{
                background-color: #ccc;
                font-size: 14px;
                line-height: 40px;
                font-weight: bold;
            }
            .cmt-body{
                line-height: 40px;
                padding: 0 10px;
            }
        }
    }
}
</style>
