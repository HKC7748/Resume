<template>
  <n-card :title="title" class="info-card">
    <n-flex vertical :size="6">
      <n-text
        v-for="content in contents"
        :key="content"
        class="info-text"
      >
        {{ content }}
      </n-text>
    </n-flex>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NFlex, NText } from "naive-ui";

defineProps<{
  title?: string;
  contents: string[];
}>();
</script>

<style scoped>
.info-card {
  background-color: #f5f5f5;
  margin: 0 auto;
}

.info-text {
  font-size: 15px;
  color: #000000;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

@media (max-width: 600px) {
  .info-text {
    font-size: 14px;
  }
}
</style>
