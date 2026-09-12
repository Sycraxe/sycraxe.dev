<script setup lang="ts">
import { ref } from 'vue';
import type { ModrinthProject } from './types/ModrinthProject';
import ProjectCard from './components/ProjectCard.vue';
import SkinViewer from "@/components/SkinViewer.vue";

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
    <div id="header-description">
      <a href="#"><h1>sycraxe<span>.dev</span></h1></a>
      <div>
        <p>
          Someone who spends their spare time creating things
        </p>
        <p class="description-link">
          Currently works in
          <a class="link" href="https://github.com/Sycraxe">
            <span class="material-symbols-outlined">link</span>
            <span class="link-text">AeroSMP</span>
          </a>
          dev team
        </p>
      </div>
      <div class="contact">
        <a href="https://github.com/Sycraxe">
          <span class="material-symbols-outlined">link</span>
          <p>GitHub</p>
        </a>
        <a href="https://modrinth.com/user/Sycraxe">
          <span class="material-symbols-outlined">link</span>
          <p>Modrinth</p>
        </a>
      </div>
    </div>
    <SkinViewer id="header-model"></SkinViewer>
	</header>
	<main>
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
		<p>&copy; 2025-2026 Sycraxe</p>
	</footer>
</template>

<style scoped>
main, #header-description, #projects
{
  display: flex;
  flex-direction: column;
}

header
{
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

#header-description
{
  padding-top: 16px;
  gap: 32px;
}

h1 > span /* .dev emphasis */
{
  color: var(--color-emphasis);
}

main
{
  gap: 32px;
}

#projects
{
  gap: 24px;
}

/* User-defined elements */

.contact, .contact > a, .link, .description-link
{
  display: flex;
  gap: 8px;
}

.contact
{
  flex-direction: column;
  width: min-content;
}

.contact > a:hover, .link
{
  color: var(--sd-color-accent);
}

.contact > a:hover > p, a:hover.link > .link-text
{
  text-decoration: underline;
}

</style>