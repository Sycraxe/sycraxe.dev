<script setup lang="ts">
	import { ref } from 'vue';
	import type { ModrinthProject } from './types/ModrinthProject';
	import ProjectCard from './components/ProjectCard.vue';

	const projects = ref<ModrinthProject[]>([]);
	const search = ref('');

	(async () => {
		const response = await fetch('https://api.modrinth.com/v2/user/sycraxe/projects');
		if (!response.ok) return;
		projects.value = await response.json() as ModrinthProject[];
	})()
</script>

<template>
	<header>
		<a href="#"><h1>sycraxe<span>.dev</span></h1></a>
	</header>
	<main>
		<section id="description">
			<p>
				A developer who create utilities and mods in his spare-time.
			</p>
			<div class="links">
				<a href="https://github.com/Sycraxe">
					<span class="material-symbols-outlined">link</span>
					<p>GitHub</p>
				</a>
				<a href="https://modrinth.com/user/Sycraxe">
					<span class="material-symbols-outlined">link</span>
					<p>Modrinth</p>
				</a>
			</div>
		</section>
		<section id="projects">
			<h2>Projects</h2>
			<div>
				<input v-model="search" placeholder="Search project...">
			</div>
			<ProjectCard v-for="project in projects" :project :search="new RegExp(search, 'gi')"></ProjectCard>
			<p v-if="projects.filter((project) => project.title.match(new RegExp(search, 'gi'))).length == 0">No corresponding projects found.</p>
		</section>
	</main>
	<footer>
		<p>&copy; 2025 Sycraxe</p>
	</footer>
</template>
