<script setup lang="ts">
import { useRoute } from 'vue-router';
import { NotionRenderer, useGetPageBlocks } from 'vue3-notion';

const route = useRoute();

const { data: blockMap } = useGetPageBlocks(route.params.id?.toString());
</script>

<template>
	<main>
		<router-link to="/">
			<button>Back to homepage</button>
		</router-link>
		<div v-if="blockMap">
			<NotionRenderer :blockMap="blockMap" fullPage />
		</div>
	</main>
</template>

<style>
@import 'vue3-notion/dist/style.css'; /* optional Notion-like styles */
@import 'prismjs/themes/prism.css';
@import 'katex/dist/katex.min.css';
.notion-page-icon-cover {
	display: none;
}
</style>
