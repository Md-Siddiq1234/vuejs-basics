<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-xl my-4">Markdown App</h1>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2">
        <textarea
          class="w-full h-full focus:outline-none border focus:border-blue-900 transition duration-500 rounded"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article
        class="w-1/2 border border-gray-100"
        v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
// import marked from "marked";
import debounce from "../utilites/mixins/debounce";
export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value;
      };
      debounce(task, 3000);
    },
  },
  computed: {
    markedText() {
      return this.text.toUpperCase();
    },
  },
};
</script>
