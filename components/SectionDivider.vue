<script setup>
defineProps({
  number: String,
  title: String,
  desc: String
})
</script>

<template>
  <div class="section-slide">
    <div class="section-number" v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }">{{ number }}</div>
    <h1 v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }">{{ title }}</h1>
    <p v-if="desc" class="mt-4 max-w-xl" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }">{{ desc }}</p>
  </div>
</template>
