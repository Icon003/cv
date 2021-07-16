<template>
	<div class="progress">
		<div class="progress__fill-line" :style="{ 'width': `${percentage}%` }"></div>
	</div>
</template>

<script>
export default {
	props: {
		percentage: {
			type: Number,
			required: true
		}
	}
}
</script>

<style scoped>
	.progress {
		width: 100%;
		height: 6px;
		background-color: var(--background-color-progress);
	}
	.progress__fill-line {
		height: 100%;
		background-color: var(--background-color-progress-fill-line);
	}
</style>
