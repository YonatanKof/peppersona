<script setup>
const props = defineProps({
	title: String,
	descAi: String,
	itemId: String,
});
</script>

<template>
		<article>
			<h3>{{ title }}</h3>
			<p v-if="descAi">{{ descAi }}</p>
			<RouterLink :to="itemId">
				<button>Check out {{ title }}</button>
			</RouterLink>
		</article>
</template>
