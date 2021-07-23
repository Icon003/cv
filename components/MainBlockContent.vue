<template>
	<div class="block-content">
		<Title :title="title"/>
		<ul class="block-content__list">
			<MainItemBlockContent v-for="(item, index) of items"
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
import MainItemBlockContent from '../components/MainItemBlockContent'
export default {
	components: {
		Title,
		MainItemBlockContent,
	},
	props: {
		title: {
			type: String,
		},
		items: {
			type: Array
		}
	}
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
