<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8" id="how_works">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Hard problems require great <b>features</b>
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-128 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <feature-left
        headline="Transparent, distributed and reliable."
        content="Know where the plastic comes from. The differential checks provided by istantaneous GPS data during the plastic picking, and the anomaly detection system discover failure in the process."
      >
        <video autoplay loop alt slot="svg">
          <source src="~assets/video/Maps.mp4" type="video/mp4">
        </video>
      </feature-left>
        <!--
      <feature-right
        headline="Your impact matter."
        content="As a brand, your environmental impact cares to customers. Take a step to fight plastic pollution and contribute to the project. The amount you will help to collect will be visible to everyone. You can contribute both by giving discounts to people picking plastic waste, or financing these operations."
      >
        <img src="~assets/img/connected-world.svg?inline" alt slot="svg" />
      </feature-right>
      -->
      <!--
      <feature-left
        headline="People, it is now or never."
        content="Collecting plastic and bringing them to the apposite spots, you will help the future generations. Moreover, you will earn from your work. If you do not have a bank account, you will be given virtual credits to spend in our partner shops."
      >
        <img src="~assets/img/travel-booking.svg?inline" alt slot="svg" />
      </feature-left>
      -->
      <!--
      <feature-right
        headline="Know your enemy."
        content="Cooperating, we will all get better insights on plastic wastes. Nowadays, 150 million of tons of plastic per year are used only once. Fortunately, LafargeHolcim and Geocycle have developed an innovative approach to this problem. Joining this platform, you will take a step against pollution."
      >
        <img src="~assets/img/connected-world.svg?inline" alt slot="svg" />
      </feature-right>
      -->
      <feature-right
        headline="Machine Learning for improved waste classification."
        content="We designed a crowdsourcing system to gather knowledge of the different kinds of wastes through the help of our users. This way, our learning algorithm will improve to the point where wastes will be optimally categorized and handled. This will set a new state of the art for waste management."
      >
        <img src="~assets/img/waste_detection.gif" alt slot="svg" />
      </feature-right>
      <feature-left
        headline="Creating aware communities through gamification and rewards for actions."
        content="The platform engages and motivates users to collect and report plastic garbage in the environment, through a layer of gamification and a system of economic rewards. The objective is to create an aware community with environment-oriented habits."
      >
      <img src="~assets/img/recognition.jpeg" style="height: 500px" alt slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from "@/components/FeatureRight";
import FeatureLeft from "@/components/FeatureLeft";

export default {
  name: "Features",
  components: {
    "feature-right": FeatureRight,
    "feature-left": FeatureLeft
  }
};
</script>
