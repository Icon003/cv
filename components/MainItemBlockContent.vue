<template>
	<li :class="setClassLastItem">
		<div class="block-content__container-subtitle">
			<Subtitle :subtitle="title"/>
			<span class="block-content__location">{{ location }}</span>
		</div>
		<DateInterval :dateStart="dateStart" :dateEnd="dateEnd"/>
		<TextParagraph :text="text"/>
		<div v-if="projects.length" class="block-content__container-projects">
			<Project v-for="(project, index) of projects" :key="index" :project="project"/>
		</div>
	</li>
</template>

<script>
import Subtitle from '../components/Subtitle'
import DateInterval from '../components/DateInterval'
import TextParagraph from '../components/TextParagraph'
import Project from '../components/Project'
export default {
	components: {
		Subtitle,
		DateInterval,
		TextParagraph,
		Project,
	},
	props: {
		lastFlag: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
		},
		location: {
			type: String,
		},
		dateStart: {
			type: String,
		},
		dateEnd: {
			type: String,
		},
		text: {
			type: String,
		},
		projects: {
			type: Array,
		}
	},
	computed: {
		setClassLastItem() {
			return {
				'block-content__item': this.lastFlag === false,
				'block-content__item block-content__item--last': this.lastFlag === true,
			}
		},
	}
}
</script>

<style scoped>
	.block-content__item {
		margin-bottom: 1.2em;

		font-size: 28px;
	}
	.block-content__item--last {
		margin-bottom: 0;
	}
	.block-content__container-subtitle {
		display: flex;
	}
	.block-content__location {
		display: block;

		margin-bottom: 1.4em;
		margin-left: 10%;

		font-family: "Roboto Light";
		font-size: 14px;
		font-weight: 600;

		color: var(--color-font);
	}
	.block-content__container-projects {
		margin-top: 30px;
		margin-left: 30px;
	}
	.block-content__container-title-projects {
		margin-bottom: 1em;

		font-size: 22px;

		color: var(--color-font);
	}
	.block-content__title-projects {
		font-size: inherit;

		color: inherit;
	}

	@media (max-width: 680px) {
		.block-content__container-subtitle {
			flex-direction: column;
		}
		.block-content__location {
			margin-left: 0;
		}
		.block-content__container-projects {
			margin-top: 30px;
			margin-left: 16px;
		}
	}

</style>
