<script setup>
import { ref, onMounted } from 'vue'

const fill = ref(0)
const steps = [
  { label: 'Mới', time: 'Day 0', offset: 0 },
  { label: 'Ôn lần 1', time: '1-3 Day', offset: 20 },
  { label: 'Ôn lần 2', time: '1 Week', offset: 45 },
  { label: 'Nhớ dài hạn', time: '1-4 Month', offset: 90 },
]

onMounted(() => {
  setTimeout(() => { fill.value = 100 }, 1500)
})
</script>

<template>
  <div class="w-full mt-6 mb-8 px-4" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 400 } }">
    <div class="relative h-[60px]">
      <!-- Background line -->
      <div class="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded -translate-y-1/2"></div>
      
      <!-- Fill line -->
      <div class="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-[#FF6B00] to-[#FFA63D] rounded -translate-y-1/2 transition-all duration-[2000ms] ease-out" :style="{ width: `${fill}%` }"></div>
      
      <!-- Steps -->
      <div v-for="(s, i) in steps" :key="i" class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center" :style="{ left: `${s.offset}%` }">
        <div class="text-[10px] text-gray-500 mb-2 font-bold whitespace-nowrap absolute bottom-full">{{ s.label }}</div>
        <div class="w-4 h-4 rounded-full bg-white border-[3px] border-[#FF6B00] shadow-sm z-10 transition-transform duration-300 hover:scale-125"></div>
        <div class="text-[10px] text-[#FF6B00] mt-2 font-mono bg-orange-50 px-1.5 py-0.5 rounded absolute top-full">{{ s.time }}</div>
      </div>
    </div>
  </div>
</template>
