<template>
	<header class="header">
		<!-- <div class="header__wrapper-photo">
			<img class="header__photo" src="/photo/photo.jpg" :alt="`Фото ${ personInfo.name }`">
		</div> -->
		<div class="header__wrapper-text-info">
			<div class="header__container-fio-title">
				<h1 class="header__name">{{ personInfo.name }}</h1>
				<h1 class="header__surname">{{ personInfo.surname }}</h1>
			</div>
			<div class="header__container-specialization">
				<h2 class="header__specialization">{{ personInfo.specialization }}</h2>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		personInfo() {
			const response = this.$store.getters['GET_PERSON_INFO']
			return response
		}
	}
}
</script>

<style scoped>
	.header {
		display: flex;

		width: 100%;
		padding-bottom: 46px;

		border-bottom: 1px solid var(--border-color);
	}
	.header__wrapper-photo {
		width: 160px;
		height: 100%;
		margin-right: 30px;
	}
	.header__photo {
		width: 100%;
		height: 100%;
	}
	.header__wrapper-text-info {
	}
	.header__container-fio-title {
		margin-bottom: 0.5em;

		/* font-size: 72px; */
		font-size: 36px;

		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-font);
	}
	.header__fio {
		/* font-size: inherit; */
		line-height: 1.1em;
	}
	.header__name {
		/* font-size: inherit; */
		line-height: 1.1em;
	}
	.header__surname {
		/* font-size: inherit; */
		line-height: 1.1em;
	}
	.header__patronymic {
	}
	.header__container-specialization {
	}
	.header__specialization {
		font-family: "Roboto Light";
		font-size: 18px;
		line-height: 1em;

		color: var(--color-additional-font);
	}

	@media (max-width: 680px) {
		.header__container-fio-title {
			font-size: 28px;
		}
	}
	@media (max-width: 380px) {
		.header__container-fio-title {
			font-size: 24px;
		}
	}
</style>
