<template>
    <div class="shop">
        <div class="headReg clearfix">
            <i class="iconfont fl" @click="close">&#xe83f;</i>
            <div class="middle fl clearfix">
                <div class="fl"><i class="iconfont">&#xe616;</i></div>
                <div class="fl">
                    <p>打开我连网APP购物</p>
                    <p>衣食住行有我就够</p>
                </div> 
            </div>
            <a href="javascript:;" class="reg fr ac" @click="reg">立即注册</a>
        </div>
        <shopInfo></shopInfo>
        <tab></tab>
    </div>
</template>

<script>
import shopInfo from '@/components/shop/shopInfo'
import tab from '@/components/shop/tab'
    export default{
        methods:{
            close(){
                var headReg = document.getElementsByClassName("headReg")[0];
                // this.$common.addClass(headReg,'animated fadeOutUp');
                headReg.style.display = 'none';
                // headReg.setAttribute("class","animated fadeOutUp headReg clearfix" );
            },
            reg(){
                var reg = document.getElementsByClassName("reg")[0];
                this.$router.push('reg');
            }
        },
        components:{
            shopInfo:shopInfo,
            tab:tab
        }
    }
</script>

	
<style lang="scss" scoped="" type="text/css">
    .headReg{
        height:2rem;
        background-color:#000;
        .iconfont{
            color:#fff;
            font-size:1rem;
            line-height:2rem;
            padding:0 .5rem;
            }
        .middle{
            div:nth-child(1){
                // background-color:red;
            }
             div:nth-child(2){
                 p:nth-child(1){
                    height:1rem;
                    color:#fff;
                    font-size:.6rem;
                    line-height:1.4rem;
                }
                p:nth-child(2){
                    color:#999;
                    font-size:.5rem;
                    line-height:1rem;
                }
            }
           
        }
        .reg{
            height:2rem;
            width:4.2rem;
            background-color:red;
            color:#fff;
            font-size:.8rem;
            line-height:2rem;
        }
    }
</style>