<script setup>
import { ref, onMounted } from 'vue'

const animated = ref(false)

onMounted(() => {
  setTimeout(() => { animated.value = true }, 600)
})

const points = [
  { time: '0', memory: 100, label: 'Vừa học' },
  { time: '20m', memory: 58, label: '20 phút' },
  { time: '1h', memory: 44, label: '1 giờ' },
  { time: '9h', memory: 36, label: '9 giờ' },
  { time: '1d', memory: 33, label: '1 ngày' },
  { time: '2d', memory: 28, label: '2 ngày' },
  { time: '6d', memory: 25, label: '6 ngày' },
  { time: '31d', memory: 21, label: '31 ngày' },
]

const width = 800
const height = 240
const padX = 40
const padY = 20
const chartW = width - padX * 2
const chartH = height - padY * 2

function x(i) {
  return padX + (i / (points.length - 1)) * chartW
}
function y(val) {
  return padY + (1 - val / 100) * chartH
}

const pathD = points.map((p, i) => {
  const px = x(i)
  const py = y(p.memory)
  if (i === 0) return `M ${px} ${py}`
  const prevX = x(i - 1)
  const prevY = y(points[i - 1].memory)
  const cpx1 = prevX + (px - prevX) * 0.5
  const cpx2 = prevX + (px - prevX) * 0.5
  return `C ${cpx1} ${prevY} ${cpx2} ${py} ${px} ${py}`
}).join(' ')

const areaD = pathD + ` L ${x(points.length - 1)} ${height - padY} L ${padX} ${height - padY} Z`
</script>

<template>
  <div class="forget-curve-container">
    <svg :viewBox="`0 0 ${width} ${height}`" class="forget-curve-svg" :class="{ animated }">
      <defs>
        <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FF5A00" />
          <stop offset="100%" stop-color="#FF884D" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,90,0,0.15)" />
          <stop offset="100%" stop-color="rgba(255,90,0,0)" />
        </linearGradient>
      </defs>

      <!-- Grid lines -->
      <line v-for="i in 5" :key="'g'+i"
        :x1="padX" :x2="width - padX"
        :y1="padY + (i-1) * chartH / 4" :y2="padY + (i-1) * chartH / 4"
        stroke="#E4E4E7" stroke-width="1" stroke-dasharray="4 4" />

      <!-- Y axis labels -->
      <text v-for="(v, i) in [100, 75, 50, 25, 0]" :key="'y'+i"
        :x="padX - 8" :y="padY + i * chartH / 4 + 4"
        text-anchor="end" fill="#A1A1AA" style="font-size: 11px; font-family: 'Inter', sans-serif;">
        {{ v }}%
      </text>

      <!-- Area fill -->
      <path :d="areaD" fill="url(#areaGrad)" class="curve-area" />

      <!-- Curve line -->
      <path :d="pathD" fill="none" stroke="url(#curveGrad)" stroke-width="3"
            stroke-linecap="round" class="curve-line" />

      <!-- Data points -->
      <g v-for="(p, i) in points" :key="i" class="data-point" :style="{ animationDelay: `${0.8 + i * 0.12}s` }">
        <circle :cx="x(i)" :cy="y(p.memory)" r="5" fill="white"
                stroke="#FF5A00" stroke-width="2.5" />
        <text :x="x(i)" :y="height - 4" text-anchor="middle"
              fill="#A1A1AA" style="font-size: 11px; font-weight: 500; font-family: 'Inter', sans-serif;">
          {{ p.label }}
        </text>
        <text :x="x(i)" :y="y(p.memory) - 12" text-anchor="middle"
              fill="#FF5A00" style="font-size: 12px; font-weight: 700; font-family: 'Inter', sans-serif;"
              :opacity="p.memory < 50 ? 1 : 0.7">
          {{ p.memory }}%
        </text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.forget-curve-container {
  width: 100%;
  max-width: 100%;
}
.forget-curve-svg {
  width: 100%;
  height: auto;
}
.curve-line {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  transition: stroke-dashoffset 2.5s ease-out;
}
.curve-area {
  opacity: 0;
  transition: opacity 1.5s ease-out 0.8s;
}
.animated .curve-line {
  stroke-dashoffset: 0;
}
.animated .curve-area {
  opacity: 1;
}
.data-point {
  opacity: 0;
  animation: fade-point 0.4s ease-out forwards;
  animation-play-state: paused;
}
.animated .data-point {
  animation-play-state: running;
}
@keyframes fade-point {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
