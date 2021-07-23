<template>
	<div class="wrapper">
		<div class="container-controll-panel">
			<ControllPanel/>
		</div>
		<div>
			<div class="container-header">
				<Header/>
			</div>
			<div class="container-aside-and-main">
				<Aside/>
				<Main/>
			</div>
		</div>
	</div>
</template>

<script>
import ControllPanel from '../components/ControllPanel'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Main from '../components/Main'

export default {
	components: {
		ControllPanel,
		Header,
		Aside,
		Main,
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
	.container-controll-panel {
		position: fixed;
		z-index: 10;
		top: 46px;
		right: 46px;
	}
	.container-header {
		display: flex;
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
		.container-controll-panel {
			display: none;
		}
	}

</style>
