<template>
	<div class="block-content">
		<Title :title="title"/>
		<ul class="block-content__list">
			<ItemBlockContent v-for="(item, index) of items"
			:key="index"
			:lastFlag="index == items.length-1"
			:title="item.title"
			:location="item.location"
			:dateStart="item.dateStart"
			:dateEnd="item.dateEnd"
			:text="item.textContent"
			:projects="item.projects"/>
		</ul>
	</div>
</template>

<script>
import Title from '../components/Title'
import ItemBlockContent from '../components/ItemBlockContent'
export default {
	components: {
		Title,
		ItemBlockContent,
	},
	props: {
		title: {
			type: String,
		},
		items: {
			type: Array
		}
	},
	// beforeMount() {
	// 	console.log(this.items[0].projects.length)
	// }
}
</script>

<style scoped>
	.block-content {
		padding-top: 46px;
		padding-bottom: 46px;

		border-bottom: 1px solid var(--border-color);
	}
	.block-content__list {
		list-style-type: none;
	}
</style>
