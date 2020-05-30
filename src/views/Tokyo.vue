<template>
    <div>
        <v-container>
            <v-card>{{items['wards_name']}}</v-card>
            <v-row>
                <v-col sm=3 cols=12 v-for="(item,key) in items['data']" :key="key">
                    <v-card elevation="2" outlined tile height=150>
                        <v-card-title>{{ item.giin_name }}</v-card-title>

                        <v-card-actions>
                            <a target="_blank" :href="item.twitter_url">
                                <v-btn color="primary">
                                    Twitter
                                </v-btn>
                            </a>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
	export default {
		name: 'tokyo',

		data: () => ({
			wards_name: '',
			items: '',
		}),
		methods: {},

		created: function () {

			let item = {
				wards_name: '東京都',
				data: {
					0: {
						giin_name: '鈴木 邦和',
						twitter_url: 'https://twitter.com/kunikazu_suzuki'
					}
				}
			}

			// apiを実行する
			this.items = item;

		}
	};
</script>