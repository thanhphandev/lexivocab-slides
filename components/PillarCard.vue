<script setup>
defineProps({
  number: String,
  title: String,
  enTitle: String,
  desc: String,
  icon: String,
  delay: { type: String, default: '0' }
})
</script>

<template>
  <div class="pillar-section animate-fade-up" :style="{ animationDelay: `${delay}ms` }">
    <!-- Icon -->
    <div class="mb-6 flex">
      <div :class="icon" class="text-4xl text-[var(--lv-primary)] opacity-90"></div>
    </div>

    <!-- Content -->
    <div class="space-y-4">
      <div>
        <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Step {{ number }}</div>
        <h3 class="text-2xl font-bold text-gray-900 tracking-tight">{{ title }}</h3>
      </div>
      
      <p class="text-sm text-gray-500 leading-relaxed font-medium">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.pillar-section {
  @apply relative p-2 text-left transition-all duration-500;
}
</style>
