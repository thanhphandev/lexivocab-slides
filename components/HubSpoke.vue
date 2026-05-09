<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  setTimeout(() => { show.value = true }, 300)
})

const clients = [
  { label: 'Web Dashboard', sub: 'Next.js', img: '/nextjs_logo.png' },
  { label: 'Chrome Extension', sub: 'Manifest V3', img: '/chrome_logo.png' },
  { label: 'Mobile App', sub: 'React Native', img: '/expo_logo.png' },
]
</script>

<template>
  <div class="arch-visual-container">
    <div class="arch-main-grid">
      
      <!-- Core Column -->
      <div class="column-left">
        <div class="glass-core-card" :class="{ active: show }">
          <div class="core-branding">
            <div class="dotnet-badge">
              <img src="/dotnet_logo.png" alt=".NET" />
            </div>
            <div class="core-text">
              <h3>Core API</h3>
              <span>Central Hub</span>
            </div>
          </div>
          <div class="core-pulse-status">
            <div class="dot-pulse"></div>
            SYSTEM ONLINE
          </div>
        </div>
      </div>

      <!-- Connection Layer -->
      <div class="column-center">
        <svg class="connect-lines-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="5%">
              <stop offset="0%" stop-color="#8B5CF6" />
              <stop offset="100%" stop-color="#FF5A00" />
            </linearGradient>
            <filter id="sparkGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g v-for="(c, i) in 3" :key="'g'+i">
            <!-- Main Solid Path (Slight vertical offset for middle line i=1 to fix SVG bug) -->
            <path :d="`M 0 50 C 40 50, 60 ${20 + i * 30 + (i === 1 ? 0.5 : 0)}, 100 ${20 + i * 30 + (i === 1 ? 0.5 : 0)}`"
                  stroke="url(#lineGrad)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  fill="none"
                  class="base-path"
            />
            
            <!-- Energy Pulse (Slight vertical offset for middle line i=1) -->
            <path :d="`M 0 50 C 40 50, 60 ${20 + i * 30 + (i === 1 ? 0.5 : 0)}, 100 ${20 + i * 30 + (i === 1 ? 0.5 : 0)}`"
                  stroke="#FF5A00"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-dasharray="1 100"
                  fill="none"
                  class="spark-path"
                  filter="url(#sparkGlow)"
                  :style="{ animationDelay: `${i * 0.6}s` }"
            />
          </g>
        </svg>
      </div>

      <!-- Clients Column -->
      <div class="column-right">
        <div v-for="(c, i) in clients" :key="i"
             class="client-compact-card"
             :class="{ active: show }"
             :style="{ transitionDelay: `${600 + i * 150}ms` }">
          <div class="client-logo-circle">
            <img :src="c.img" :alt="c.label" />
          </div>
          <div class="client-info-group">
            <strong>{{ c.label }}</strong>
            <small>{{ c.sub }}</small>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.arch-visual-container {
  @apply w-full h-[320px] flex items-center justify-center overflow-visible;
}
.arch-main-grid {
  @apply grid grid-cols-[1.2fr_180px_1fr] items-center w-full max-w-5xl;
}

/* Left Card */
.glass-core-card {
  @apply bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] opacity-0 -translate-x-10 transition-all duration-1000 flex flex-col items-center gap-4;
}
.glass-core-card.active { @apply opacity-100 translate-x-0; }
.core-branding { @apply flex items-center gap-4; }
.dotnet-badge { @apply w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center p-1 shadow-sm; }
.dotnet-badge img { @apply w-full h-full object-contain; }
.core-text h3 { @apply text-lg font-black text-gray-900 leading-tight; }
.core-text span { @apply text-[9px] text-gray-400 font-bold uppercase tracking-widest; }
.core-pulse-status { @apply bg-green-50 text-green-600 text-[8px] font-black px-3 py-1 rounded-full flex items-center gap-2; }
.dot-pulse { @apply w-1.5 h-1.5 bg-green-500 rounded-full animate-ping; }

/* SVG Connections */
.column-center { @apply h-full w-full relative; }
.connect-lines-svg { @apply w-full h-full overflow-visible; }

.base-path {
  @apply opacity-20;
}
.spark-path {
  animation: spark-flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes spark-flow {
  0% { stroke-dashoffset: 100; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { stroke-dashoffset: -100; opacity: 0; }
}

/* Right Cards */
.column-right { @apply flex flex-col gap-4; }
.client-compact-card {
  @apply bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 shadow-sm opacity-0 translate-x-10 transition-all duration-700 hover:shadow-lg hover:-translate-y-0.5;
}
.client-compact-card.active { @apply opacity-100 translate-x-0; }
.client-logo-circle { @apply w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center p-2 shadow-sm; }
.client-logo-circle img { @apply w-full h-full object-contain; }
.client-info-group { @apply flex flex-col; }
.client-info-group strong { @apply text-xs font-bold text-gray-900; }
.client-info-group small { @apply text-[8px] text-gray-400 font-bold uppercase; }
</style>
