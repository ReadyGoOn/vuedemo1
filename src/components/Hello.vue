<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button @click='taptest'>点击</button>
    <button @click='taptest1'>点击</button>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    this.dosome();
  },
  methods: {
    taptest:function(){
      this.$ajax.get('/app/aa').then(function(data){
        console.log(11);
        console.log(data);
      })
    },
    dosome:function(){
      console.log(12121);
      this.msg = "1111111111111111111111";
    },
    taptest1:function(){
      console.log(11);
      var  headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      // this.$ajax.get('/api/pc_gateway/goods/detail?gid=341372708',{
      //   headers:headers,
      //   method:'get'
      // }).then(function(data){
      //   console.log(data);
      // })
    //   this.$http.get('api/pc_gateway/goods/detail?gid=341372708', data => {
    //   console.log(data)
    // });
     var dvt = 2,
		    ver = 1.0,
        goodsid = 18799,
        userid = '',
        key = 'sdl#^kfj83*&(247D*()!@KutePaoebw',
        headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
        goodsDetailKey = md5(dvt + '' + goodsid + '' + userid + ''+ ver + '' + key);
          
      var post_data = {
          'goodsid': goodsid,
          'userid':userid,
          'ver': ver,
          'dvt': dvt,
          'key': goodsDetailKey
      };
      var config = {
           method:'post',
            url: '/api/v2/index.php/home/Product/getGoodsDetail',
            data:post_data,
            headers: headers,
            requestHeader:{'Content-Type':'application/json'},
            responseType: '',
            timeout: 30000
      }
      console.log(post_data);
      this.$ajax(config).then(function (result) {
          console.log(result)
          // res.send(result)
      }).catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
body{
  width:100%;
  height:100$;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
