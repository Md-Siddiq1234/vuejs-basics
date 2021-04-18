<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2">Vue Calendar</h1>
    <section class="flex justify-center">
      <h2 class="font-bold">{{ currentMonth }}</h2>
      <h2 class="font-bold pl-10">{{ currentYear }}</h2>
      <h3>{{ daysInMonth(2021, 4) }}</h3>
      <p class="p-2" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="w-1/6 m-auto flex justify-center flex-wrap">
      <p
        class="p-2"
        v-for="num in daysInMonth(currentYear, currentMonth)"
        :key="num"
      >
        {{ num }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      days: ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    startDay() {},
  },
};
</script>
