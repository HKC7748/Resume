<template>
  <n-card :title="project.title" class="project-card" hoverable>
    <template #header-extra>
      <n-tag
        v-if="project.note"
        size="small"
        :bordered="false"
        class="project-note-tag"
      >
        {{ project.note }}
      </n-tag>
    </template>

    <n-text depth="3" class="project-subtitle">{{ project.subtitle }}</n-text>

    <n-flex :size="6" wrap class="project-tech-tags">
      <n-tag
        v-for="tech in project.tech"
        :key="tech"
        size="small"
        :bordered="false"
        class="project-tech-tag"
      >
        {{ tech }}
      </n-tag>
    </n-flex>

    <ul class="project-bullets">
      <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
    </ul>

    <n-flex v-if="project.links.length" :size="14" class="project-links">
      <a
        v-for="link in project.links"
        :key="link.href"
        :href="link.href"
        :aria-label="`${project.title} ${link.label}`"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        {{ link.label }} ↗
      </a>
    </n-flex>

    <n-text
      v-else-if="project.linkNote"
      depth="3"
      class="project-link-note"
    >
      {{ project.linkNote }}
    </n-text>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NFlex, NTag, NText } from "naive-ui";
import type { ProjectItem } from "../resume";

defineProps<{
  project: ProjectItem;
}>();
</script>

<style scoped>
.project-card {
  background-color: #f5f5f5;
  margin: 0 auto;
}

.project-subtitle {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  overflow-wrap: anywhere;
}

.project-tech-tags {
  width: 100%;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.project-tech-tag {
  background-color: #e7eef6;
  color: #1f3850;
  font-weight: 500;
}

.project-note-tag {
  background-color: #1f3850;
  color: #ffffff;
}

.project-bullets {
  margin: 0;
  padding-left: 1.25em;
  color: #1a1a1a;
  font-size: 14px;
  line-height: 1.75;
  overflow-wrap: anywhere;
}

.project-bullets li {
  margin-bottom: 5px;
}

.project-bullets li:last-child {
  margin-bottom: 0;
}

.project-links {
  margin-top: 12px;
}

.project-link {
  color: #1f3850;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}

.project-link-note {
  display: block;
  margin-top: 10px;
  font-size: 13px;
}

@media (max-width: 600px) {
  .project-subtitle,
  .project-bullets,
  .project-link {
    font-size: 13px;
  }
}
</style>
