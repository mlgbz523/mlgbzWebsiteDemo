<template>
  <section :style="{ 'background-image': `url(${backgroundUrl})` }">
    <div class="text-container">
      <TextAnimation>Blend {{ index + 1 }}</TextAnimation>
    </div>
  </section>
</template>

<script>
import TextAnimation from './TextAnimation.vue';

export default {
  components: {
    TextAnimation,
  },
  props: {
    backgroundUrl: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
};
</script> 
<style scoped>

section {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}



</style>