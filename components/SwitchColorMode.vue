<template>
	<button class="switch-color-mode" @click.prevent="switchColorMode">
		<i :class="['switch-color-mode__icon', this.$colorMode.value === 'dark' ? 'switch-color-mode__icon--light' : 'switch-color-mode__icon--dark']"></i>
	</button>
</template>

<script>
export default {
	data() {
		return {
			colorMode: this.$colorMode.value
		}
	},
	methods: {
		switchColorMode() {
			if(this.$colorMode.value === "dark") {
				this.$colorMode.preference = "light"
			} else if(this.$colorMode.value === "light") {
				this.$colorMode.preference = "dark"
			}
		}
	},
}
</script>

<style scoped>
	.switch-color-mode {
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

	.switch-color-mode__icon {
		display: block;

		width: 22px;
		height: 22px;

		background-color: var(--color-font);

		mask-repeat: no-repeat;
		mask-position: center;
	}
	.switch-color-mode__icon--light {
		mask-image: url("/icon/light-mode.svg");
	}
	.switch-color-mode__icon--dark {
		mask-image: url("/icon/dark-mode.svg");
	}

</style>
