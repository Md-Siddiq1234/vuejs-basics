<template>
  <div class="bg-blue-500 py-4 text-2xl shadow-md">
    <router-link v-for="item in list" :key="item.to" :to="item.to" class="p-5">{{item.title}}</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {title:'Home',to:'/'},
        {title:'Heros',to:'/heros'},
        {title:'Calendar',to:'/calendar'},
        {title:'Markdown',to:'/markdown'},
        {title:'Slider',to:'/Slider'},
      ]
    }
  }
};
</script>

<style scoped></style>
