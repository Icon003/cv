<template>
	<h3 class="subtitle">{{ subtitle }}</h3>
</template>

<script>
export default {
	props: {
		subtitle: {
			type: String,
			required: true,
		},
	}
}
</script>

<style scoped>
	.subtitle {
		margin-bottom: 0.5em;

		font-size: 22px;

		color: var(--color-font);
	}

	@media (max-width: 680px) {
		.subtitle {
			font-size: 18px;
		}
	}

</style>
