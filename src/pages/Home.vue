<script setup>
import Card from '../components/Card.vue';
import { onMounted, ref } from 'vue';
const itemData = ref([]);
const dbData = ref([]);

const getData = async () => {
	return fetch('/api/fetchNotion').then((res) => res.json());
};

onMounted(() => {
	getData().then((data) => {
		itemData.value = data.response.results;
		dbData.value = data?.responseDbInfo;
	});
});
</script>

<template>
	<main>
		<h1 v-if="dbData.title">{{ dbData.title[0]?.plain_text }}</h1>
		<p v-if="dbData.description">{{ dbData.description[0]?.text.content }}</p>
		<section>
			<Card
				v-if="itemData"
				v-for="item in itemData"
				:title="item.properties.Name.title[0].plain_text"
				:imgSrc="item.properties.Image.files[0]?.file.url ?? ''"
				:descAi="item.properties['Auto Description']?.rich_text[0]?.plain_text ?? ''"
				:painPoints="item.properties['Pain Points (RU)'].rollup.array.map((item) => item.title[0].text.content)"
				:unmetNeeds="item.properties['Unmet Needs (RU)'].rollup.array.map((item) => item.title[0].text.content)"
				:goals="item.properties['Goals (RU)'].rollup.array.map((item) => item.title[0].text.content)"
				:itemId="`/persona/${item.id}`"
			/>
		</section>
	</main>
</template>
<style scoped>
h1, p {
	margin: 0;
	margin-block-end: 0.5rem;
	text-wrap: balance;
	max-width: 65ch;
}

section {
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
