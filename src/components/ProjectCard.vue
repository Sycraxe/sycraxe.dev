<script setup lang="ts">
import type { Project } from '@/types/Project';

const props = defineProps<{
	project: Project,
	search?: RegExp
}>()
</script>

<template>
	<article v-if="!search || project.title.match(search) !== null">
    <img v-if="project.icon_url" :src="project.icon_url" :alt="`${project.title} icon`">
    <div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="links">
        <a v-if="project.project_url !== null" target="_blank" :href="project.project_url">
          <span class="material-symbols-outlined">language</span>
          <p>Modrinth</p>
        </a>
        <a v-if="project.source_url !== null" target="_blank" :href="project.source_url">
          <span class="material-symbols-outlined">code</span>
          <p>Source</p>
        </a>
      </div>
    </div>
	</article>
</template>

<style scoped>
article, article > div
{
	display: flex;
}

article {
  background-color: var(--color-content-box);
  padding: 16px;
  border-radius: 8px;
  gap: 16px;
}

article > div {
  flex-direction: column;
}

img {
  width: 64px;
  height: 64px;
  border: var(--color-content-box-icon-border) solid 1px;
  border-radius: 8px;
}

.links {
  padding: 8px 0 0 0;
}
</style>