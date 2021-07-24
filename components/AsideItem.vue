<template>
	<div :class="setClassLastItem()">
		<Title :title="title"/>
		<div v-if="type === 'standart'" class="item-aside__container-list">
			<ul class="item-aside__list">
				<li v-for="(item, index) of listItems" :key="index" class="item-aside__item-list">
					<span class="item-aside__text-item">{{ item.name }}</span>
				</li>
			</ul>
		</div>
		<div v-else-if="type === 'percentage'" class="item-aside__container-list">
			<ul class="item-aside__list-percentage">
				<li v-for="(item, index) of listItems" :key="index" class="item-aside__item-list-percentage">
					<div class="item-aside__container-text-item-percentage">
						<span class="item-aside__text-item-percentage">{{ item.name }}</span>
					</div>
					<div class="item-aside__container-progress-item-percentage">
						<Progress :percentage="item.value"/>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Title from '../components/Title'
import Progress from '../components/Progress'
export default {
	components: {
		Title,
		Progress,
	},
	props: {
		lastFlag: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			required: true,
		},
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
		setClassLastItem() {
			return () => {
				return {
					'item-aside': this.lastFlag === false,
					'item-aside item-aside--last': this.lastFlag === true,
				}
			}
		}
	}
}
</script>

<style scoped>
	.item-aside {
		margin-bottom: 36px;
	}

	.item-aside--last {
		margin-bottom: 0;
	}
	.item-aside__container-list {
		width: 100%;
	}
	.item-aside__list {
		display: flex;

		flex-wrap: wrap;

		margin: -0.5em;

		list-style-type: none;
	}
	.item-aside__item-list {
		display: flex;

		margin: 0.5em;
		padding: 0.5em;

		font-family: "Roboto Light";
		font-size: 16px;
		font-weight: 400;

		border: 1px solid var(--color-font);

		text-transform: none;
	}

	.item-aside__name-item--percentage {
		font-family: "Roboto Light";
		font-weight: 400;

		text-transform: none;
	}
	.item-aside__value-item {
		font-family: "Roboto Light";

		color: var(--color-additional-font);
	}


	.item-aside__container-item {
	}
	.item-aside__text-item {
		color: var(--color-font);
	}

	.item-aside__list-percentage {
		display: flex;

		flex-direction: column;

		width: 100%;

		list-style-type: none;
	}
	.item-aside__item-list-percentage {
		width: 100%;
		margin-bottom: 0.8em;

		font-family: "Roboto Light";
		font-size: 16px;

		color: var(--color-font);
	}
	.item-aside__container-text-item-percentage {
		margin-bottom: 0.3em;
	}
	.item-aside__text-item-percentage {
	}
	.item-aside__container-progress-item-percentage {
	}

	@media (max-width: 680px) {
		.item-aside__item-list {
			font-size: 14px;
		}
		.item-aside__item-list-percentage {
			font-size: 14px;
		}
	}

</style>
