<template>
	<span class="date-interval">{{ calcDateStart }} – {{ calcDateEnd }}</span>
</template>

<script>
export default {
	props: {
		dateStart: {
			type: String
		},
		dateEnd: {
			type: String
		}
	},
	computed: {
		calcDateStart() {
			return this.$dayjs(this.dateStart).format('MMMM YYYY')
		},
		calcDateEnd() {
			if(this.dateEnd) {
				return this.$dayjs(this.dateEnd).format('MMMM YYYY')
			} else {
				return 'Настоящее время'
			}
		},
	}
}
</script>

<style scoped>
	.date-interval {
		display: block;
		font-family: "Roboto Light";
		font-size: 14px;
		font-weight: 600;

		color: var(--color-font);
		margin-bottom: 1.4em;
	}

</style>
