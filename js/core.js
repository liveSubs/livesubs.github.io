new Vue ({
	el: '.user',
	data: {
		views: null,
		subs: null,
		videos: null,
		name: null,
		logo: null,
		url: null,
		user_key: null
	},
	methods: {
		update: function () {
			axios
				.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=' + user_key + '&key=AIzaSyAvRN9xDLUISE5jR0wr92Vmz3Hwl_SvyxM')
				.then(response => (
					this.views = response.data.items[0].statistics.viewCount,
					this.subs = response.data.items[0].statistics.subscriberCount,
					this.videos = response.data.items[0].statistics.videoCount,
					this.name = response.data.items[0].snippet.title,
					this.logo = response.data.items[0].snippet.thumbnails.medium.url,
					this.url = 'https://www.youtube.com/channel/' + response.data.items[0].id
				))
		},
		change: function (event) {
			user_key = event.target.value;
			this.update();
		}
	},
	mounted() {
		user_key = 'UCiGm_E4ZwYSHV3bcW1pnSeQ';
		this.update();
	}
})