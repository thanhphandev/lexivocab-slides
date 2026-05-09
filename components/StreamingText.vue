<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: { type: String, default: '"Serendipity" — nghĩa là sự tình cờ may mắn, khi bạn tìm thấy điều giá trị mà không hề chủ đích tìm kiếm. Từ này có nguồn gốc từ câu chuyện cổ tích Ba Hoàng Tử xứ Serendip...' },
  speed: { type: Number, default: 35 },
  startDelay: { type: Number, default: 800 }
})

const displayed = ref('')
const cursor = ref(true)
const started = ref(false)

onMounted(() => {
  setTimeout(() => {
    started.value = true
    let i = 0
    const interval = setInterval(() => {
      if (i < props.text.length) {
        displayed.value += props.text[i]
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => { cursor.value = false }, 2000)
      }
    }, props.speed)
  }, props.startDelay)
})
</script>

<template>
  <div class="streaming-container">
    <div class="streaming-header">
      <div class="streaming-dot" :class="{ active: started }"></div>
      <span class="streaming-label">{{ started ? 'AI đang phản hồi...' : 'Đang kết nối...' }}</span>
      <span class="streaming-badge">SSE Stream</span>
    </div>
    <div class="streaming-body">
      <span class="streaming-text">{{ displayed }}</span>
      <span v-if="cursor" class="streaming-cursor">|</span>
    </div>
  </div>
</template>

<style scoped>
.streaming-container {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  overflow: hidden;
  max-width: 520px;
}
.streaming-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-bottom: 1px solid #F3F4F6;
  background: #FAFAFA;
}
.streaming-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #D1D5DB;
  transition: background 0.3s;
}
.streaming-dot.active {
  background: #10B981;
  animation: pulse-dot 1.5s ease-in-out infinite;
}
.streaming-label {
  font-size: 0.75rem;
  color: #6B7280;
  font-weight: 500;
}
.streaming-badge {
  margin-left: auto;
  font-size: 0.65rem;
  font-weight: 600;
  color: #FF6B00;
  background: rgba(255, 107, 0, 0.08);
  padding: 3px 10px;
  border-radius: 12px;
  letter-spacing: 0.03em;
}
.streaming-body {
  padding: 20px;
  font-size: 0.88rem;
  line-height: 1.7;
  color: #1D2235;
  min-height: 80px;
}
.streaming-cursor {
  color: #FF6B00;
  font-weight: 300;
  animation: blink 0.6s step-end infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.3); }
  50% { opacity: 0.8; box-shadow: 0 0 0 4px rgba(16,185,129,0); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
