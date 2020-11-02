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
		update () {
			const string = user_key;
			const substring = 'https://www.youtube.com/channel/';
			var user = string.replace(substring,'');
			axios
				.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=' + user + '&key=AIzaSyBzK5GgF-aScjm4MNJh_Fnuugyxowouz-0')
				.then(response => (
					this.views = response.data.items[0].statistics.viewCount,
					this.subs = response.data.items[0].statistics.subscriberCount,
					this.videos = response.data.items[0].statistics.videoCount,
					this.name = response.data.items[0].snippet.title,
					this.logo = response.data.items[0].snippet.thumbnails.medium.url,
					this.url = 'https://www.youtube.com/channel/' + response.data.items[0].id
				))
		},
		change (event) {
			user_key = event.target.value;
			this.update();
		}
	},
	mounted() {
		user_key = 'UCiGm_E4ZwYSHV3bcW1pnSeQ';
		this.update();
	}
})