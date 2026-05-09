<script setup>
defineProps({
  section: String
})
</script>

<template>
  <div class="slide-footer">
    <div class="logo-text">LEXIVOCAB</div>
    <div><SlideCurrentNo /> <span style="opacity: 0.5">/ <SlidesTotal /></span></div>
  </div>
</template>
