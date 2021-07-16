<template>
	<div class="wrapper">
		<div class="container-switch-color-mode">
			<SwitchColorMode/>
		</div>
		<div class="container-header">
			<Header/>
		</div>
		<div class="container-aside-and-main">
			<Aside/>
					<!-- <br /> -->
			<p class="break"></p>
			<Main/>
		</div>
	</div>
</template>

<script>
import SwitchColorMode from '../components/SwitchColorMode'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Main from '../components/Main'
export default {
	components: {
		SwitchColorMode,
		Header,
		Aside,
		Main,
	},
	async asyncData({ $content }) {

	},
}
</script>

<style scoped>
	.wrapper {
		display: flex;

		flex-direction: column;

		width: 100%;
		height: 100vh;
		padding-top: 46px;
		padding-right: 46px;
		padding-bottom: 46px;
		padding-left: 46px;
	}
	.container-switch-color-mode {
		position: fixed;
		top: 46px;
		right: 46px;
		z-index: 10;
	}
	.container-header {
	}
	.container-aside-and-main {
		display: flex;

		flex-grow: 2;
	}
	@media (max-width: 1024px) {
		.container-aside-and-main {
			display: block;
		}
	}
	@media (max-width: 680px) {
		.wrapper {
			padding-top: 36px;
			padding-right: 36px;
			padding-bottom: 36px;
			padding-left: 36px;
		}
	}

	@media print {
		.container-switch-color-mode {
			display: none;
		}
	}

</style>
