new Vue ({
	el: '.user',
	data: {
		views: 0,
		subs: 0,
		videos: 0,
		name: '',
		logo: '',
		url: '',
		user_key: '',
		result: 0
	},
	methods: {
		update () {
			const address = user_key;
			const pattern = /\b(UC).{22}/;
			const user = address.match(pattern);
			axios
				.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=' + user + '&key=AIzaSyAvRN9xDLUISE5jR0wr92Vmz3Hwl_SvyxM')
				.then(response => (
					this.views = response.data.items[0].statistics.viewCount,
					this.subs = response.data.items[0].statistics.subscriberCount,
					this.videos = response.data.items[0].statistics.videoCount,
					this.name = response.data.items[0].snippet.title,
					this.logo = response.data.items[0].snippet.thumbnails.medium.url,
					this.url = 'https://www.youtube.com/channel/' + response.data.items[0].id,
					this.result = response.data.pageInfo.resultsPerPage
			))
			if(true) {
				axios
					.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&forUsername=' + user_key + '&key=AIzaSyAvRN9xDLUISE5jR0wr92Vmz3Hwl_SvyxM')
					.then(response => (
						this.views = response.data.items[0].statistics.viewCount,
						this.subs = response.data.items[0].statistics.subscriberCount,
						this.videos = response.data.items[0].statistics.videoCount,
						this.name = response.data.items[0].snippet.title,
						this.logo = response.data.items[0].snippet.thumbnails.medium.url,
						this.url = 'https://www.youtube.com/channel/' + response.data.items[0].id
				))
			}
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