<script setup>
const props = defineProps({
	listName: String,
	list: Array,
	color: {
		type: String,
		default: undefined,
	},
});
</script>

<template>
	<span v-if="list.length > 0">
		<h4 id="title">{{ listName }}</h4>
		<ul>
			<li v-for="item in list">{{ item }}</li>
		</ul>
	</span>
</template>
<style scoped>
#title {
	margin: 0;
    color: v-bind(color);
}
span {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	align-items: start;
}
ul {
	margin: 0;
	padding-inline-start: 1.25rem;
    list-style-type: circle;
}
li::marker {
    color: v-bind(color);
}
</style>
