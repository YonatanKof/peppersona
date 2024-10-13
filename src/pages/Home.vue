<script setup>
import Card from '../components/Card.vue';
import { onMounted, ref } from 'vue';
const itemData = ref([]);

const getData = async () => {
	return fetch('/api/fetchNotion').then((res) => res.json());
};

onMounted(() => {
	getData().then((data) => {
		itemData.value = data.response.results;
	});
});
</script>

<template>
	<main>
		<Card
			v-if="itemData"
			v-for="item in itemData"
			:title="item.properties.Name.title[0].plain_text"
			:imgSrc="item.properties.Image.files[0]?.file.url ?? ''"
			:descAi="item.properties['Auto Description']?.rich_text[0]?.plain_text ?? ''"
			:itemId="`/persona/${item.id}`"
		/>
	</main>
</template>
<style scoped>
main {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}
@media (width <= 960px) {
	main {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (width <= 640px) {
	main {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
