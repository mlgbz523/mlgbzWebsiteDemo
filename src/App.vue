<template>
  <div>
    <Section v-for="(background, index) in backgroundUrls" :key="index" :background-url="background" :index="index" />
  </div>
</template>

<style>
html,
body {
  overflow-y: scroll;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  margin: 0;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>

<script>
import Section from './components/Section.vue';

export default {
  components: {
    Section
  },
  data() {
    return {
      backgroundUrls: [
        'https://wtl123-1326558633.cos.ap-beijing.myqcloud.com/202405171516466.png',
        'https://wtl123-1326558633.cos.ap-beijing.myqcloud.com/202405171516793.jpg',
        'https://wtl123-1326558633.cos.ap-beijing.myqcloud.com/202405171516526.png',
        'https://wtl123-1326558633.cos.ap-beijing.myqcloud.com/202405171516633.png'
      ]
    };
  },
  mounted() {
    const smoothScroll = (targetScrollTop) => {
      const currentScrollTop = window.scrollY;
      const startTime = Date.now();
      const duration = 2000; // 滚动动画时长 (ms)

      function animateScroll(timestamp) {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const scrollTop = currentScrollTop + (targetScrollTop - currentScrollTop) * progress;
        window.scrollTo(0, scrollTop);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    };

    window.addEventListener('wheel', (event) => {
      const deltaY = event.deltaY;
      const currentScrollTop = window.scrollY;
      let targetScrollTop;

      // 获取当前 Section 的高度
      const sectionHeight = document.querySelector('.section').offsetHeight;

      // 限制每次滚动的距离，每次最多滚动一个 Section 的高度
      if (deltaY < 0) { // 向下滚动
        targetScrollTop = Math.min(currentScrollTop + sectionHeight, document.body.scrollHeight - window.innerHeight);
      } else if (deltaY > 0) { // 向上滚动
        targetScrollTop = Math.max(currentScrollTop - sectionHeight, 0);
      }

      smoothScroll(targetScrollTop);
    });
  }
};
</script>