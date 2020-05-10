import axios from 'axios'

const KEY = 'AIzaSyCjYV59mJIJjwPQCHFrOLqQfeW4MFyPSQ4'


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
	headers: {
		Authorization:
      'Bearer ya29.a0Ae4lvC367CVAosNA3R67nFaHrbtRdM5xzYU5EDbscDiZLMPdI3VUxEICrIqQg8gZKTN - OBUnrMeTX8JT4eAQP - Z3hL3wZ9TH0m - UtWKwdCxQc_ - P7cuQR - kf2p_0t5Q2jEdPHZF8FDA0xr3dQwLobFdylPblgeT_s_qp9KyezQ'
    
	},
})

