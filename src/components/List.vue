<script setup>
const props = defineProps({
	listName: String,
	list: Array,
	color: {
		type: String,
		default: undefined,
	},
	darkColor: {
		type: String,
		default: undefined,
	},
});
</script>

<template>
	<span class="list-main" v-if="list.length > 0">
		<h4 id="list-title">{{ listName }}</h4>
		<ul class="list-ul">
			<li v-for="item in list">{{ item }}</li>
		</ul>
	</span>
</template>
<style>
#list-title {
	margin: 0;
	color: v-bind(color);
	padding-block-end: 0.5rem;
}
.list-main {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	align-items: start;
	margin-block-end: 0.5rem;
}
.list-ul {
	margin: 0;
	padding-inline-start: 1.25rem;
	list-style-type: circle;
}
.list-ul > li {
	text-wrap: balance;
}
.list-ul > li::marker {
	color: v-bind(color);
}
@media (prefers-color-scheme: dark) {
	#list-title {
		color: v-bind(darkColor);
	}
	.list-ul > li::marker {
		color: v-bind(darkColor);
	}
}
</style>
