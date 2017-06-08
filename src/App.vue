<template>
  <div id="app">
    <transition 
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style scope>
html,body,#app{
  width:100%;
  height:100%;
}

</style>
