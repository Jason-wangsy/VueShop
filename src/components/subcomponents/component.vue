<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postContent">发表评论</mt-button>
        
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
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            pageIndex: 1,
            commentList:[],
            msg:""
        }
    },
    headers:{
        'Content-Type':'application/json'
    },
    created(){
        this.getCommentList()
    },
    methods:{
        getCommentList(){
            this.$http.get('../../../static/commentData.json').then(result=>{
                for(var item in result.body.message){
                    if(result.body.message[item].id == this.newsId && result.body.message[item].pageIndex == this.pageIndex){
                        this.commentList = this.commentList.concat(result.body.message[item])
                    }
                }
            })
        },
        getMore(){
            this.pageIndex++
            this.getCommentList()
        },
        postContent(){
            if(this.msg.trim().length === 0){
                return Toast("评论内容不能为空")
            }

            var obj = {add_time: Date.now(),content:this.msg}
            this.commentList.unshift(obj)
            this.msg = ""
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
