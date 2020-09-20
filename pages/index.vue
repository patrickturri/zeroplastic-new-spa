<template>
  <div>
    <hero />
    <carousel/>
    <features />
    <mobilestores />
    <faq />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Abstract from "@/components/Abstract";
import Features from "@/components/Features";
import Teasers from "@/components/Teasers";
import Prices from "@/components/Prices";
import Faq from "@/components/Faq";
import Carousel from '@/components/Carousel';
import MobileStores from '@/components/MobileStores';

export default {
  name: "LandingPage",
  components: {
    hero: Hero,
    abstract: Abstract,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    faq: Faq,
    mobilestores: MobileStores,
    carousel: Carousel
  }
};
</script>
