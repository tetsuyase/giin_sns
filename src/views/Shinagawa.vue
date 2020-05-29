<template>
    <div>
        <v-card>{{items['wards_name']}}</v-card>
        <v-row>
            <v-col cols=3 v-for="(item,key) in items['data']" :key="key">
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
    </div>
</template>

<script>
	export default {
		name: 'Shinagawa',

		data: () => ({
			wards_name: '',
			items: '',
		}),
		methods: {},

		created: function () {

			let item = {
				wards_name: '品川区',
				data: {
					0: {
						giin_name: '松本ときひろ',
						twitter_url: 'https://twitter.com/matsumoto_toki'
					},
					1: {
						giin_name: 'あべ祐美子',
						twitter_url: 'https://twitter.com/abe_shinagawa'
					},
					2: {
						giin_name: 'あくつ広王',
						twitter_url: 'https://twitter.com/a_hiroo'
					},
					4: {
						giin_name: '安藤たい作',
						twitter_url: 'https://twitter.com/andotaisaku'
					},
					5: {
						giin_name: '石田ちひろ',
						twitter_url: 'https://twitter.com/koumetokoharu'
					},
					6: {
						giin_name: '石田秀男',
						twitter_url: 'https://twitter.com/ishida_hideo'
					},
					7: {
						giin_name: '大倉たかひろ',
						twitter_url: 'https://twitter.com/okura_takahiro'
					},
					8: {
						giin_name: '大沢真一',
						twitter_url: 'https://twitter.com/okura_takahiro'
					},
					9: {
						giin_name: 'おくの晋治',
						twitter_url: 'https://twitter.com/shinozma'
					}
				}
			}

			// TODD ここでAPIを実行する
			this.items = item;
		}
	};
</script>