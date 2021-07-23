<template>
	<div class="text-paragraph" v-html="text"></div>
</template>

<script>
export default {
	props: {
		text: {
			type: String
		}
	}
}
</script>

<style scoped>
	.text-paragraph {
		font-family: "Roboto Light";
		font-size: 14px;

		line-height: 1.3em;
		color: var(--color-additional-font);
	}
	.text-paragraph p {
		font-family: inherit;
		font-size: inherit;
		

		color: inherit;
	}
	.text-paragraph > li {
		font-family: inherit;
		font-size: inherit;

		color: inherit;
	}
	.text-paragraph > ol {
		font-family: inherit;
		font-size: inherit;

		color: inherit;
	}

</style>
