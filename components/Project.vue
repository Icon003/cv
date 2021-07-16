<template>
	<div class="project">
		<div class="project__container-name">
			<h5 class="project__name">{{ project.name }}</h5>
		</div>
		<div class="project__container-description">
			<TextParagraph :text="project.description"/>
			<!-- <p class="project__description">{{ project.description }}</p> -->
		</div>
		<div class="project__container-list-technologies">
			<ul class="project__list-technologies">
				<li v-for="(technologie, index) of project.technologies" :key="index" class="project__item-technologie">
					<span class="project__name-technologie">{{ technologie.name }}</span>
				</li>
			</ul>
		</div>
		<!-- <div class="project__container-image">
			<img class="project__image" :src="`/image/projects/${project.image}`" :alt="`Скриншот ${project.name}`">
		</div> -->
	</div>
</template>

<script>
import TextParagraph from '../components/TextParagraph'

export default {
	components: {
		TextParagraph,
	},
	props: {
		project: {
			type: Object,
		},
	},
}
</script>

<style scoped>
	.project {
		font-family: "Roboto";
		padding-left: 16px;
		border-left: 3px solid var(--project-border-color);
		margin-bottom: 48px;
		/* border-left: 3px solid var(--color-additional-font); */
	}
	.project--last {
		margin-bottom: 0;
	}
	.project__container-name {
		margin-bottom: 0.5em;

		font-size: 18px;
		color: var(--color-font);
	}
	.project__name {
		font-size: inherit;
	}
	.project__container-description {
		margin-bottom: 1em;

		font-size: 14px;

		color: var(--color-additional-font);
	}
	.project__description {
	}
	.project__container-list-technologies {
		margin-bottom: 28px;
	}
	.project__list-technologies {
		display: flex;

		flex-wrap: wrap;

		margin: -0.5em;

		font-size: 14px;

		list-style-type: none;
	}
	.project__item-technologie {
		display: flex;

		margin: 0.5em;
		padding: 0.5em;

		font-family: "Roboto Light";
		font-size: inherit;
		font-weight: 400;

		border: 1px solid var(--color-additional-font);
		color: var(--color-additional-font);

		text-transform: none;
	}
	.project__name-technologie {
	}
	.project__container-image {
		width: 70%;
	}
	.project__image {
		width: 100%;
	}

	@media (max-width: 680px) {
		.project__container-name {
			font-size: 16px;
		}
	}
</style>
