<script setup lang="ts">
import type { ModrinthProject } from '@/types/ModrinthProject';

const props = defineProps<{
	project: ModrinthProject,
	search?: RegExp
}>()
</script>

<template>
	<article v-if="!search || project.title.match(search) !== null">
		<div class="badges">
			<p><span class="material-symbols-outlined">deployed_code</span>Minecraft</p>
		</div>
		<h3>{{ project.title }}</h3>
		<p>{{ project.description }}</p>
		<div class="links">
			<a target="_blank" :href="`https://modrinth.com/mod/${project.slug}`">
				<span class="material-symbols-outlined">more_horiz</span>
				<p>See more</p>
			</a>
			<a target="_blank" :href="`${project.source_url}`" v-if="project.source_url !== null">
				<span class="material-symbols-outlined">code</span>
				<p>View source</p>
			</a>
		</div>
	</article>
</template>

<style scoped>
article
{
	background-color: var(--color-content-box);
	padding: 16px;
	border-radius: 8px;
	display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>