<template>
	<h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		}
	}
}
</script>

<style scoped>
	.title {
		margin-bottom: 1.2em;

		position: relative;

		font-size: 28px;

		color: var(--color-font);

		text-transform: uppercase;
	}
	.title::before {
		width: 1.4em;
		height: 3px;

		position: absolute;
		bottom: -0.3em;

		background-color: var(--color-font);

		content: "";
	}

	@media (max-width: 680px) {
		.title {
			font-size: 22px;
		}
	}

</style>
