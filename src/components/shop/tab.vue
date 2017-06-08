<template>
    <div ref="wrapers" class="wrapers">
        <div class="tab">
            <span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span><span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span><span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span><span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span><span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span><span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span><span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span><span>衣服1</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服</span><span>衣服</span>
            <span>衣服</span><span>衣服7</span><span>衣服6</span><span>衣服5</span>
            <span>衣服4</span><span>衣服3</span><span>衣服2</span>
            <span>衣服1</span>
        </div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'
    export default{
        mounted:function(){
            var $this = this;
                setTimeout(function(){
                    //  $this.tabWidth();
                    $this.myIscroll();
                },1000);
                // this.$nextTick(() => {
                //     this.tabWidth();
                //     this.myIscroll();
                // })      
        },
        methods:{
           myIscroll:function(){
               console.log(1111)
               console.log(this.$refs.wrapers)
               console.log(this.$refs.wrapers.firstElementChild)
            let scroll = new BScroll(this.$refs.wrapers, {
                startX: 0,
                startY: 0,
                // scrollX: true,
                // wheel: true,
                scrollY: true,
                click:true
            })
           },
           tabWidth:function(){
               var el = this.$refs.wrapers.firstElementChild,
                   ele = el.firstElementChild,
                   marginWidth = parseInt(this.$common.getStyle(ele,'marginLeft'))*2;
                   
                el.style.width = (ele.offsetWidth + marginWidth )*el.children.length+ "px";
                console.log(el.style.width,marginWidth,ele.offsetWidth);
           }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapers{
        width:100%;
        height:10rem;
        overflow:hidden;
        .tab{
            // width:200rem;
            // height:2rem;
            // line-height:2rem;
            // white-space:nowrap;
            // overflow-x:scroll;
            // ::-webkit-scrollbar {display:none}
            span{
                font-size:.6rem;
                padding:.2rem;
                border-radius:4px;
                background-color:red;
                margin:0.2rem;
            }
        }
    }
    
</style>