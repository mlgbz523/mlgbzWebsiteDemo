<!-- App.vue -->
<template>
  <div>
    <Section 
      v-for="(background, index) in backgroundUrls" 
      :key="index"
      :background-url="background" 
      :index="index" 
    />
  </div>
</template>

<style>
html, body {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
  margin: 0;
}

html::-webkit-scrollbar, 
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>

<script>
import Section from './Section.vue';

export default {
  components: {
    Section
  },
  data() {
    return {
      backgroundUrls: [
        'https://jsd.cdn.zzko.cn/gh/mlgbz523/imgURL/src/wallhaven-gplwxe_1920x1080.png',
        'https://jsd.cdn.zzko.cn/gh/mlgbz523/imgURL/src/__sparkle_honkai_and_1_more_drawn_by_heitian_keji__41b9593309e46a1d253a9bb83c9f1e6a.jpg',
        'https://jsd.cdn.zzko.cn/gh/mlgbz523/imgURL/src/wallhaven-jxoeqp_1920x1080.png',
        'https://jsd.cdn.zzko.cn/gh/mlgbz523/imgURL/src/wallhaven-l87yvp_1920x1080%20hh.png'
      ]
    };
  }
};
</script>