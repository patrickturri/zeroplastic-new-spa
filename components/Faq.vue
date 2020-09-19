<template>
  <div id="faqs">
    <img src="~assets/img/wave-top.svg?inline" alt />
    <faq-content />
  </div>
</template>

<script>
import FaqContent from '@/components/FaqContent'

export default {
  name: 'Faq',
  components: {
    'faq-content': FaqContent
  }
}
</script>
