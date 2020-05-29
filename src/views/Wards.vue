<template>
    <div class="about">
        <component :is="currentPage"></component>

    </div>
</template>
<script>
	import Shinagawa from './Shinagawa.vue';
	export default {
		name: 'wards',

		data: () => ({
			currentPage: Shinagawa
		}),
		components: {
			Shinagawa
		},
		methods: {
			// TODO ページ切り替え予定なので
			// parentsMethod(value) {
			// 	this.currentPage = value
			// }
		},

		created: function () {
			this.currentPage = Shinagawa
		}
	};
</script>