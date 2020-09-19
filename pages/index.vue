<template>
  <div>
    <hero />
    <abstract/>
    <features />
    <faq/>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Abstract from '@/components/Abstract'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import Faq from '@/components/Faq'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    abstract: Abstract,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    'faq': Faq
  }
}
</script>
