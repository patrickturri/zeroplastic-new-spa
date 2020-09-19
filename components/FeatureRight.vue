<template>
  <div class="flex flex-wrap m-12">
    <div class="w-5/6 sm:w-1/2 p-6">
      <h3 class="text-5xl text-gray-800 font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-600 b-8 mb-8">
        {{ content }}
        <br />
      </p>
    </div>
    <div class="w-full sm:w-1/2 p-6 mb-8">
      <slot name="svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureRight',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
}
</script>
