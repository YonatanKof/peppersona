<script setup>
const props = defineProps({
	title: String,
	subTitle: String,
	descAi: String,
	itemId: String,
	imgSrc: String,
	painPoints: Array,
	unmetNeeds: Array,
	goals: Array,
	roles: Array,
});
import List from '../components/List.vue';
</script>

<template>
	<article>
		<span class="card-title">
			<img :src="imgSrc" :alt="`Picture of ${title} the ${subTitle}`" v-if="imgSrc" />
			<div class="titles">
				<h2 id="title" v-if="title">{{ title }}</h2>
				<h3 id="sub-title" v-if="subTitle">{{ subTitle }}</h3>
			</div>
		</span>
		<span class="card-role">
			<p>Role:</p>
			<p class="role" v-if="roles" v-for="role in roles">{{ role }}</p>
		</span>
		<p v-if="descAi">{{ descAi }}</p>
		<List color="orangered" darkColor="orange" listName="Unmet Needs" :list="unmetNeeds" />
		<List color="crimson" darkColor="red" listName="Pain Points" :list="painPoints" />
		<List color="darkgreen" darkColor="lightgreen" listName="Goals" :list="goals" />
		<RouterLink :to="itemId">
			<button>Read more about {{ title }}</button>
		</RouterLink>
	</article>
</template>

<style>
#title,
h3 {
	margin: 0;
}
.titles {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}
.card-title {
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 1rem;
	margin-block-end: 1rem;
}
.card-role {
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 0.5em;
	margin-block-end: 0.5rem;
}
p {
	margin-block-start: 0;
	margin-block-end: 1rem;
}
.role {
	background-color: var(--color-system-invert-80);
	border-radius: 0.25rem;
	padding: 0.2rem 0.4rem;
	font-size: 75%;
	margin: unset;
	color: var(--color-system-100);
}
.card-role > p:first-child {
	margin: 0;
	font-size: 75%;
	color: var(--color-system-60);
}

img {
	height: 5rem;
	width: 5rem;
	border-radius: 0.25rem;
	object-fit: cover;
}
a > button {
	width: 100%;
	margin-block-start: 0.5rem;
}
</style>
