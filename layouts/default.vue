<template>
  <div class="leading-normal tracking-normal text-white gradient h-full">
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
  box-sizing: border-box;
}
html, body {
    min-height: 100%;
    height: 100%;
}

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  background: linear-gradient(90deg, #3a86ff 0%, #1b4332 100%);
}
</style>
