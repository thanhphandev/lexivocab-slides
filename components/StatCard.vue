<script setup>
defineProps({
  value: String,
  label: String,
  icon: String,
  delay: { type: String, default: '0' }
})
</script>

<template>
  <div class="stat-card" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: parseInt(delay) } }">
    <div class="icon-circle icon-circle-orange mx-auto">
      <div v-if="icon && icon.startsWith('i-')" :class="icon"></div>
      <template v-else>{{ icon }}</template>
    </div>
    <div class="stat-value">{{ value }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>
