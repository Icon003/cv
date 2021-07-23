<template>
	<div class="block-contacts">
		<div class="block-contacts__container-title">
			<Title :title="title"/>
		</div>
		<div class="block-contacts__container-list">
			<ul class="block-contacts__list">
				<li v-for="(item, index) of listItems" :key="index" class="block-contacts__item">
					<div class="block-contacts__container-icon">
						<i :class="['block-contacts__icon', `block-contacts__icon--${item.icon}`]"></i>
					</div>
					<div class="block-contacts__container-value">
						<a class="block-contacts__link"
						target="_blank"
						ref="nofollow noopener"
						:href="[item.type === 'phone' ? `tel:${item.value}` : item.type === 'email' ? `mailto:${item.value}` : `${item.value}`]">
							<span class="block-contacts__value">{{ item.type === "site" ? "Ссылка" : item.value }}</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Title from '../components/Title'

export default {
	components: {
		Title,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		listItems: {
			type: Array,
			required: true,
		},
	},
	computed: {
		setTypeLink(type) {
			return () => {
				return {
					'tel:': type === "phone",
					'mail:': type === "email",
					'': type === "site",
				}
			}
		},
	}
}
</script>

<style scoped>
	.block-contacts {
		margin-bottom: 36px;
	}
	.block-contacts__container-title {
		display: flex;
	}
	.block-contacts__container-list {
		display: flex;
	}
	.block-contacts__list {
		display: flex;

		flex-direction: column;

		list-style-type: none;
	}
	.block-contacts__item {
		display: flex;

		align-items: center;

		margin-bottom: 0.6em;

		font-size: 16px;
	}
	.block-contacts__container-icon {
		display: flex;
	}
	.block-contacts__icon {
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
	.block-contacts__icon--phone {
		mask-image: url("/icon/phone.svg");
	}
	.block-contacts__icon--email {
		mask-image: url("/icon/email.svg");
	}
	.block-contacts__icon--linkedin {
		mask-image: url("/icon/linkedin.svg");
	}
	.block-contacts__container-value {
		display: flex;
	}
	.block-contacts__link {
		text-decoration: none;
	}
	.block-contacts__value {
		line-height: 1em;

		color: var(--color-font);
	}

	@media (max-width: 680px) {
		.block-contacts__icon {
			width: 26px;
			height: 26px;
		}
		.block-contacts__item {
			font-size: 14px;
		}
	}

	@media print {
		.block-contacts__icon {
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;

			color-adjust: exact;
		}
		.block-contacts__icon--phone {
			background-image: url("/icon/phone.svg");
		}
		.block-contacts__icon--email {
			background-image: url("/icon/email.svg");
		}
		.block-contacts__icon--linkedin {
			background-image: url("/icon/linkedin.svg");
		}
	}

</style>
