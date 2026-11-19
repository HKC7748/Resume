<template>
  <n-divider title-placement="center" class="section-divider">
    <n-text class="section-title">{{ title }}</n-text>
  </n-divider>
</template>

<script setup lang="ts">
import { NDivider, NText } from "naive-ui";

defineProps<{
  title: string;
}>();
</script>

<style scoped>
.section-divider {
  width: 90%;
  margin: 5px auto;
}

.section-title {
  font-size: 25px;
  color: #020202;
}

@media (max-width: 600px) {
  .section-divider {
    width: 94%;
  }

  .section-title {
    font-size: 21px;
  }
}
</style>
