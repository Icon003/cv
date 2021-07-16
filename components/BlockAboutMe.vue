<template>
	<div class="block-about-me">
		<Title :title="title"/>
		<TextParagraph :text="text"/>
	</div>
</template>

<script>
import Title from '../components/Title'
import TextParagraph from '../components/TextParagraph'
export default {
	components: {
		Title,
		TextParagraph,
	},
	props: {
		title: {
			type: String,
		},
		text: {
			type: String,
		}
	}
}
</script>

<style scoped>
	.block-about-me {
		padding-top: 46px;
		padding-bottom: 46px;

		border-bottom: 1px solid var(--border-color);
	}
</style>
