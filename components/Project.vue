<template>
	<div class="project">
		<div class="project__container-name">
			<h4 class="project__name">{{ project.name }}</h4>
		</div>
		<div class="project__container-description">
			<TextParagraph :text="project.description"/>
		</div>
		<div class="project__container-list-technologies">
			<ul class="project__list-technologies">
				<li v-for="(technologie, index) of project.technologies" :key="index" class="project__item-technologie">
					<span class="project__name-technologie">{{ technologie.name }}</span>
				</li>
			</ul>
		</div>
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
		margin-bottom: 48px;
		padding-left: 16px;

		font-family: "Roboto";

		border-left: 3px solid var(--project-border-color);

		page-break-inside: avoid;
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

		color: var(--color-additional-font);
		border: 1px solid var(--color-additional-font);

		text-transform: none;
	}
	.project__name-technologie {
	}

	@media (max-width: 680px) {
		.project__container-name {
			font-size: 16px;
		}
	}

</style>
