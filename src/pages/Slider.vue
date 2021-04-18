<template>
  <div class="flex flex-wrap w-full">
    <div
      v-if="currentSlide === 0"
      class="absolute w-full h-96 bg-blue-600"
    ></div>
    <div
      v-if="currentSlide === 1"
      class="absolute w-full h-96 bg-yellow-600"
    ></div>
    <div
      v-if="currentSlide === 2"
      class="absolute w-full h-96 bg-pink-600"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval:''
    };
  },
  mounted() {
    this.interval = setInterval(() => {
        this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
        // if (this.currentSlide === 2) {
        //   this.currentSlide = 0;
        // }
        // this.currentSlide++;
      }, 2000);
    },
    unmounted() {
      clearInterval(this.interval)
  },

};
</script>
