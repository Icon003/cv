<template>
	<aside class="aside">
		<BlockContacts v-for="(contact, index) of contacts"
		:key="index"
		:title="contact.title"
		:listItems="contact.items"/>
		<ItemAside v-for="(skill, index) of skills"
		:key="index"
		:lastFlag="index == skills.length-1"
		:type="skill.type"
		:title="skill.title"
		:listItems="skill.items"/>
	</aside>
</template>

<script>
import ItemAside from '../components/ItemAside'
import BlockContacts from '../components/BlockContacts'
export default {
	components: {
		ItemAside,
		BlockContacts,
	},
	computed: {
		contacts() {
			const result = this.$store.getters['GET_CONTACTS']
			return result
		},
		skills() {
			const result = this.$store.getters['GET_SKILLS']
			return result
		},
	}
}
</script>

<style scoped>
	.aside {
		width: 25%;
		width: 28%;
		height: 100%;
		padding-top: 46px;
		padding-right: 46px;

		border-right: 1px solid var(--border-color);
	}

	@media (max-width: 1024px) {
		.aside {
			width: 100%;
			height: auto;
			padding-right: 0;
			padding-bottom: 46px;

			border-right: none;
			border-bottom: 1px solid var(--border-color);
		}
	}
</style>
