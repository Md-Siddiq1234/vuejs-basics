<template>
  <Header />
  <div class="w-full flex">
    <router-view></router-view>
    <!-- <Calendar /> -->
  </div>
</template>

<script>
// import Calendar from "./components/Calendar.vue";

import Header from "./components/Header.vue";
import Heros from './pages/Heros.vue';
export default { 
  components: {
    // Calendar,
    Header,
    Heros,
  },
};
</script>
