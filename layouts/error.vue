<template>
    <div class="error-page">
        <div class="error-page__wrapper">
            <div class="error-page__container-image">
                <span class="error-page__code-error">{{ error.statusCode }}</span>
                <img src="/image/error.svg" alt="" class="error-page__image">
            </div>
            <div class="error-page__container-content">
                <div class="error-page__container-title">
                    <h1 v-if="error.statusCode === 404" class="error-page__title">Страница не найдена</h1>
                    <h1 v-else-if="error.statusCode === 408" class="error-page__title">Превышено время ожидания</h1>
                    <h1 v-else-if="error.statusCode === 429" class="error-page__title">Пожалуйста хватит дудосить</h1>
                    <h1 v-else-if="error.statusCode === 500" class="error-page__title">Что-то пошло не так</h1>
                    <h1 v-else class="error-page__title">Что-то пошло не так</h1>
                </div>
                <div class="error-page__container-message">
                    <p v-if="error.statusCode === 404" class="error-page__message">Пожалуйста вернитесь на главную</p>
                    <p v-else-if="error.statusCode === 408" class="error-page__message">Похоже фиксик отвечающий за это уснул</p>
                    <p v-else-if="error.statusCode === 429" class="error-page__message">Я вас умоляю не убивайте сервер</p>
                    <p v-else-if="error.statusCode === 500" class="error-page__message">Похоже что-то сломалось, пожалуйста попробуйте снова или свяжитесь со мной удобным вам способом</p>
                    <p v-else class="error-page__message">Похоже что-то сломалось, пожалуйста попробуйте снова или свяжитесь со мной удобным вам способом</p>
                </div>
                <div class="error-page__container-contact">
                    <ul class="error-page__list-contact">
                        <li class="error-page__item-list-contact">
                            <div class="error-page__container-icon-contact">
                                <i class="error-page__icon-contact error-page__icon-contact--phone"></i>
                            </div>
                            <div class="error-page__container-value-contact">
                                <a class="error-page__link-contact"
                                target="_blank"
                                rel="nofollow noopener"
                                href="">
                                    <span class="block-contacts__value">{{ phone }}</span>
                                </a>
                            </div>
                        </li>
                        <li class="error-page__item-list-contact">
                            <div class="error-page__container-icon-contact">
                                <i class="error-page__icon-contact error-page__icon-contact--email"></i>
                            </div>
                            <div class="error-page__container-value-contact">
                                <a class="error-page__link-contact"
                                target="_blank"
                                rel="nofollow noopener"
                                href="">
                                    <span class="block-contacts__value">{{ email }}</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="error-page__container-button">
                <button v-if="error.statusCode === 404" class="error-page__button" @click="backHome">Вернуться на главную</button>
                <button v-else-if="error.statusCode === 408" class="error-page__button" @click="backHome">Постучать по серверу</button>
                <button v-else-if="error.statusCode === 429" class="error-page__button" @click="closeSite">Закрыть сайт</button>
                <button v-else-if="error.statusCode === 500" class="error-page__button" @click="backHome">Попробовать снова</button>
                <button v-else class="error-page__button" @click="backHome">Попробовать снова</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["error"],
    layout: "error",
	data() {
		return {
			phone: process.env.APP_PHONE,
			email: process.env.APP_EMAIL,
        }
    },
    methods: {
        backHome() {
            this.$router.push('/')
        },
        closeSite() {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    },
}
</script>

<style scoped>
    .error-page {
    	width: 100%;
    	height: 100vh;

    	font-family: "Roboto";
    }
    .error-page__wrapper {
    	display: flex;

    	flex-direction: column;
    	justify-content: center;
    	align-items: center;

    	width: 100%;
    	height: 100%;
    }
    .error-page__container-image {
    	width: 100%;
    	max-width: 380px;

    	position: relative;
    }
    .error-page__code-error {
    	display: flex;

    	justify-content: center;

    	width: 100%;
    	padding-right: calc(31%);
    	padding-left: calc(25%);

    	position: absolute;
    	top: 1.6em;

    	font-size: 54px;
    	font-weight: 800;
    	line-height: 1em;
    	/* left: 130px; */

    	color: var(--color-font);
    }
    .error-page__image {
    	width: 100%;
    }
    .error-page__container-content {
    	display: flex;

    	flex-direction: column;
    	justify-content: center;
    	align-items: center;

    	width: 100%;
    }
    .error-page__container-title {
    	margin-top: 0.5em;
    	margin-bottom: 0.5em;

    	font-size: 42px;

    	text-align: center;
    }
    .error-page__title {
    	font-size: inherit;

    	text-align: inherit;
    }
    .error-page__container-message {
    	margin-bottom: 2em;

    	font-size: 16px;

    	text-align: center;
    }
    .error-page__message {
    	font-size: inherit;

    	text-align: inherit;
    }
    .error-page__container-contact {
    	margin-bottom: 30px;
    }
    .error-page__list-contact {
    	display: flex;

    	flex-direction: column;

    	list-style-type: none;
    }
    .error-page__item-list-contact {
    	display: flex;

    	justify-content: center;
    	align-items: center;

    	margin-bottom: 0.6em;

    	font-size: 16px;
    }
    .error-page__container-icon-contact {
    	display: flex;
    }
    .error-page__icon-contact {
    	display: block;

    	width: 32px;
    	height: 32px;
    	margin-right: 0.5em;

    	font-size: inherit;

    	background-color: var(--color-font);

    	mask-repeat: no-repeat;
    	mask-position: center;
    	mask-size: contain;
    }
    .error-page__icon-contact--phone {
    	mask-image: url("/icon/phone.svg");
    }
    .error-page__icon-contact--email {
    	mask-image: url("/icon/email.svg");
    }
    .error-page__container-value-contact {
    	display: flex;
    }
    .error-page__link-contact {
    	text-decoration: none;
    }
    .block-contacts__value {
    	line-height: 1em;

    	color: var(--color-font);
    }
    .error-page__container-button {
    }
    .error-page__button {
    	padding-top: 18px;
    	padding-right: 32px;
    	padding-bottom: 18px;
    	padding-left: 32px;

    	font-size: 18px;

    	border: none;
    	border: 1px solid var(--color-font);
    	background: none;

    	cursor: pointer;
    }

</style>