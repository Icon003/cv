<template>
	<div class="controll-panel">
		<div class="controll-panel__container-item">
			<ButtonPrintCV/>
		</div>
		<div class="controll-panel__container-item">
			<SwitchColorMode/>
		</div>
	</div>
</template>

<script>
import SwitchColorMode from '../components/SwitchColorMode'
import ButtonPrintCV from '../components/ButtonPrintCV'

export default {
    components: {
        SwitchColorMode,
        ButtonPrintCV
    }
}
</script>

<style scoped>
	.controll-panel {
		display: flex;

		margin: -5px;
	}
	.controll-panel__container-item {
		margin: 5px;
	}

	@media (max-width: 680px) {
		.controll-panel {
			flex-direction: column;
		}
	}

</style>