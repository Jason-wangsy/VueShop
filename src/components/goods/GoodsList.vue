<template>
  <div class="goods-container">


    <div class="goodsItem">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=889404254,2343594033&fm=27&gp=0.jpg" alt="">
      <h1>苹果苹果7Plus 128G 双网通</h1>
      <div class="goodsInfo">
        <div class="price">
          <span class="nowPrice">￥4999</span>
          <span class="oldPrice">￥5399</span>
        </div>
        <div class="content">
          <span>热卖中</span>
          <span>剩60件</span>
        </div>
      </div>
    </div>


    <div class="goodsItem">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=889404254,2343594033&fm=27&gp=0.jpg" alt="">
      <h1>苹果苹果7Plus 128G 双网通</h1>
      <div class="goodsInfo">
        <div class="price">
          <span class="nowPrice">￥4999</span>
          <span class="oldPrice">￥5399</span>
        </div>
        <div class="content">
          <span>热卖中</span>
          <span>剩60件</span>
        </div>
      </div>
    </div>
    <div class="goodsItem">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=889404254,2343594033&fm=27&gp=0.jpg" alt="">
      <h1>苹果苹果7Plus 128G 双网通</h1>
      <div class="goodsInfo">
        <div class="price">
          <span class="nowPrice">￥4999</span>
          <span class="oldPrice">￥5399</span>
        </div>
        <div class="content">
          <span>热卖中</span>
          <span>剩60件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.goods-container{
  display: flex;
  flex-wrap: wrap;
  padding:0 5px;
  justify-content: space-between;
  .goodsItem{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    margin:4px 0;
    width:49%;
    border:1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    img{
      width:100%;
      }
    h1{
      font-size: 15px;
    }
    .goodsInfo{
      line-height: 30px;
      color:#bbb;
      background-color: #eee;
      font-size: 13px;
      .price{
        .nowPrice{
          color:red;
          margin:0 5px;
        }
        .oldPrice{
          text-decoration: line-through;
        }
      }
      .content{
        display: flex;
        justify-content: space-between;
        padding:0 5px;
      }
    }

  }
}
</style>
