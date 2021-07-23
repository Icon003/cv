<template>
	<div class="block-other-projects">
		<div class="block-other-projects__container-title">
			<Title :title="title"/>
		</div>
		<div class="block-other-projects__container-project">
			<Project v-for="(item, index) of items" :key="index" :project="item"/>
		</div>
	</div>
</template>

<script>
import Title from '../components/Title'
import Project from '../components/Project'

export default {
	components: {
		Title,
		Project,
	},
	props: {
		title: {
			type: String,
			require: false,
			default: "Другие проекты",
		},
		items: {
			type: Array
		}
	},
}
</script>

<style scoped>
	.block-other-projects {
		padding-top: 46px;
		padding-bottom: 46px;
	}
	.block-other-projects__container-title {
	}
	.block-other-projects__container-project {
	}

</style>
