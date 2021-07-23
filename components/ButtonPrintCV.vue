<template>
	<button class="button-print-cv" @click.prevent="printCV">
		<i class="button-print-cv__icon"></i>
	</button>
</template>

<script>
export default {
	methods: {
        printCV() {
            window.print()
        }
	},
}
</script>

<style scoped>
	.button-print-cv {
		display: flex;

		justify-content: center;
		align-items: center;

		width: 36px;
		height: 36px;

		border: none;
		border: 1px solid var(--color-font);
		border-radius: 100%;
		background: none;
		background-color: var(--background-color);

		cursor: pointer;
	}

	.button-print-cv__icon {
		display: block;

		width: 22px;
		height: 22px;

		background-color: var(--color-font);

		mask-image: url("/icon/print.svg");
		mask-repeat: no-repeat;
		mask-position: center;
	}

</style>
