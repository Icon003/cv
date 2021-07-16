<template>
	<main class="main">
		<BlockAboutMe :title="aboutMeInfo.title" :text="aboutMeInfo.info"/>
		<p class="break"></p>
		<BlockContent v-for="(item, index) of content" :key="index" :title="item.title" :items="item.items"/>
		<p class="break"></p>
		<BlockOtherProjects v-for="(itemOtherProject, index) of otherProjects" :key="index" :title="itemOtherProject.title" :items="itemOtherProject.items"/>
	</main>
</template>

<script>
import BlockAboutMe from '../components/BlockAboutMe'
import BlockContent from '../components/BlockContent'
import BlockOtherProjects from '../components/BlockOtherProjects'
export default {
	components: {
		BlockAboutMe,
		BlockContent,
		BlockOtherProjects,
	},
	computed: {
		aboutMeInfo() {
			const response = this.$store.getters['GET_ABOUT_ME']
			return response
		},
		content() {
			const response = this.$store.getters['GET_CONTENT']
			return response
		},
		otherProjects() {
			const response = this.$store.getters['GET_OTHER_PROJECTS']
			// console.log(response)
			return response
		},
	}
}
</script>

<style scoped>
	.main {
		/* width: 75%; */
		width: 72%;
		height: 100%;
		padding-left: 46px;
	}

	@media (max-width: 1024px) {
		.main {
			width: 100%;
			padding-left: 0;
		}
	}
</style>
