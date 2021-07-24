<template>
	<main class="main">
		<p class="break"></p>
		<MainBlockAboutMe :title="aboutMeInfo.title" :text="aboutMeInfo.info"/>
		<p class="break"></p>
		<MainBlockContent v-for="(item, index) of content" :key="index" :title="item.title" :items="item.items"/>
		<p class="break"></p>
		<MainBlockOtherProjects v-for="(itemOtherProject, index) of otherProjects" :key="index" :title="itemOtherProject.title" :items="itemOtherProject.items"/>
	</main>
</template>

<script>
import MainBlockAboutMe from '../components/MainBlockAboutMe'
import MainBlockContent from '../components/MainBlockContent'
import MainBlockOtherProjects from '../components/MainBlockOtherProjects'
export default {
	components: {
		MainBlockAboutMe,
		MainBlockContent,
		MainBlockOtherProjects,
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
			return response
		},
	}
}
</script>

<style scoped>
	.main {
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
	@media print {
		.main {
			height: auto;
		}
		.break {
			page-break-before: always;
		}
	}

</style>
