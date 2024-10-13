<script setup>
const props = defineProps({
	title: String,
	descAi: String,
	itemId: String,
	imgSrc: String,
});
</script>

<template>
	<article>
		<span>
			<img :src="imgSrc" alt="" v-if="imgSrc" />
			<h3 id="title">{{ title }}</h3>
		</span>
		<p v-if="descAi">{{ descAi }}</p>
		<RouterLink :to="itemId">
			<button>Read more about {{ title }}</button>
		</RouterLink>
	</article>
</template>

<style>
article {
	border: 1px solid #ccc;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
}
#title {
	margin: 0;
}
span {
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 1rem;
	margin-block-end: 1rem;
}
p {
	margin-block-start: 0;
	margin-block-end: 1rem;
}
img {
	max-width: 5rem;
	width: 100%;
	border-radius: 0.25rem;
	height: auto;
}
button{
	width: 100%;
}
</style>
