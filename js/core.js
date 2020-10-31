new Vue ({
	el: '.user',
	data: {
		views: null,
		subs: null,
		videos: null,
		name: null,
		logo: null,
		user_key: ''
	},
	methods: {
		update: function () {
			axios
				.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=' + user_key + '&key=AIzaSyBzK5GgF-aScjm4MNJh_Fnuugyxowouz-0')
				.then(response => (
					this.views = response.data.items[0].statistics.viewCount,
					this.subs = response.data.items[0].statistics.subscriberCount,
					this.videos = response.data.items[0].statistics.videoCount,
					this.name = response.data.items[0].snippet.title,
					this.logo = response.data.items[0].snippet.thumbnails.medium.url
				))
		},
		change: function (event) {
			user_key = event.target.value;
			this.update();
		}
	}
})