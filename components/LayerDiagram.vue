<script setup>
import { ref, onMounted } from 'vue'

const show = ref([false, false, false, false])

onMounted(() => {
  setTimeout(() => { show.value[0] = true }, 300)
  setTimeout(() => { show.value[1] = true }, 800)
  setTimeout(() => { show.value[2] = true }, 1300)
  setTimeout(() => { show.value[3] = true }, 1800)
})
</script>

<template>
  <div class="layer-stack">
    <!-- Presentation -->
    <div class="layer-item layer-presentation" :class="{ 'opacity-0 scale-95': !show[0], 'opacity-100 scale-100': show[0] }">
      <div class="text-sm font-bold">1. Presentation Layer</div>
      <div class="text-[10px] opacity-80 mt-1">Controllers, DTOs, Middleware, Web API</div>
    </div>
    
    <!-- Infrastructure -->
    <div class="layer-item layer-infrastructure" :class="{ 'opacity-0 scale-95': !show[1], 'opacity-100 scale-100': show[1] }">
      <div class="text-sm font-bold">2. Infrastructure Layer</div>
      <div class="text-[10px] opacity-80 mt-1">PostgreSQL, Redis, Hangfire, External APIs (SePay, OpenAI)</div>
    </div>

    <!-- Application -->
    <div class="layer-item layer-application" :class="{ 'opacity-0 scale-95': !show[2], 'opacity-100 scale-100': show[2] }">
      <div class="text-sm font-bold">3. Application Layer</div>
      <div class="text-[10px] opacity-80 mt-1">Use Cases, Commands, Queries (MediatR), Interfaces</div>
    </div>

    <!-- Domain -->
    <div class="layer-item layer-domain" :class="{ 'opacity-0 scale-95': !show[3], 'opacity-100 scale-100': show[3] }">
      <div class="text-sm font-bold">4. Domain Layer (Core)</div>
      <div class="text-[10px] opacity-80 mt-1">Entities, Value Objects, Domain Services, Exceptions</div>
    </div>
    
    <div class="text-center mt-4" :class="{ 'opacity-0': !show[3], 'opacity-100': show[3] }" style="transition: opacity 1s">
      <div class="text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-1">Dependency Rule</div>
      <div class="text-[10px] text-gray-500 max-w-xs mx-auto">Tất cả dependencies chỉ hướng vào trong. Domain Layer không phụ thuộc vào bất kỳ framework hay database nào.</div>
    </div>
  </div>
</template>
