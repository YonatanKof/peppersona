<script setup>
import Card from '../components/Card.vue';
import Loader from '../components/Loader.vue';
import { onMounted, ref } from 'vue';
const itemData = ref([]);
const dbData = ref([]);
const isLoading = ref(true);

const getData = async () => {
	return fetch('/api/fetchNotion').then((res) => res.json());
};

onMounted(() => {
	getData().then((data) => {
		itemData.value = data.response.results;
		dbData.value = data?.responseDbInfo;
		isLoading.value = false;
	});
});
</script>

<template>
	<main>
		<h1 v-if="dbData.title">{{ dbData.title[0]?.plain_text ?? 'What the hay?!' }}</h1>
		<p v-if="dbData.description">{{ dbData.description[0]?.text.content }}</p>
		<section v-if="isLoading === false">
			<Card
				v-if="itemData"
				v-for="item in itemData"
				:title="item.properties.Name.title[0].plain_text"
				:subTitle="item.properties.Position.select.name"
				:imgSrc="item.properties?.Image.files[0].file?.url"
				:descAi="item.properties['Auto Description']?.rich_text[0]?.plain_text ?? ''"
				:painPoints="item.properties['Pain Points (RU)'].rollup.array.map((item) => item.title[0].text.content)"
				:unmetNeeds="item.properties['Unmet Needs (RU)'].rollup.array.map((item) => item.title[0].text.content)"
				:roles="item.properties.Role.multi_select.map((item) => item.name)"
				:goals="item.properties['Goals (RU)'].rollup.array.map((item) => item.title[0].text.content)"
				:itemId="`/persona/${item.id}`"
			/>
		</section>
		<Loader v-else />
	</main>
</template>
<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
h1 {
	color: var(--color-brand-100);
}
h1,
p {
	margin: 0;
	margin-block-end: 0.5rem;
	max-width: 65ch;
}

section {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}
@media (width <= 960px) {
	section {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (width <= 640px) {
	section {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
