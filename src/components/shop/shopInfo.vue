<template>
    <div class="head">
        <div class="top">
             <div class="img">
                <img src="" alt="店铺LOGO">
            </div>
            <div class="content">
                <p>潮流前线</p>
                <p>10分</p>
                <div class="clearfix">
                    <p class="fl"><i class="iconfont">&#xe614;</i>  公告：</p>
                    <p class="fl">111111111</p>
                </div>
            </div>
        </div>
        <div class="colect">
            <div class="colect-top"><i class="iconfont">&#xe7c6;</i>&nbsp;收藏</div>
            <span>粉丝:33</span>
        </div>
       <div class="bottom rel">
            <div> 山东省聊城市山东省聊城市山东</div>
            <div class="abs"><i class="iconfont">&#xe634;</i></div>
       </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss" scoped>
    .head{
        width:96%;
        padding:.6rem 2%;
        background-color:#4C3B61;
        position:relative;
        .top{
            padding-bottom:.6rem;
            display:flex;
            flex-flow:row nowrap;
            .img{
                flex:none;
                width:3rem;
                height:3rem;
                margin-right:.5rem;
                border:1px solid #fff;
                background-color:#eee;
                img{
                    width:100%;
                    height:100%;
                    border-radius:50%;
                }
            }
            .content{
                flex:none;
                font-size:.6rem;
                line-height:1rem;
                color:#fff;
                div{
                    height:1rem;
                    font-size:.5rem;
                    color:#eee;
                    p:nth-child(2){
                        width:9rem;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        overflow:hidden;
                    }
                }
            }
        }
        .colect{
            position:absolute;
            top:1rem;
            right:.6rem;
            width:3rem;
            text-align:center;
            font-size:.5rem;
             color:#fff;
            .colect-top{
                line-height:1rem;
                height:1rem;
                background-color:red;
                border-radius:.5rem;
                margin-bottom:.2rem;
            }
        }
        .bottom{
            border-top:1px dashed #fff;
            padding-top:.3rem;
            line-height:1rem;
            font-size:.6rem;
            color:#fff;
            position:relative;
            div:nth-child(1){
                padding-right:2rem;
            }
            div:nth-child(2){
                top:.5rem;
                right:0;
                width:1rem;
                padding-left:.5rem;
                line-height:.7rem;
                border-left:2px solid #fff;
            }
        }
       
    }
</style>