import axios from 'axios'
import { YT_BASE_URL, YT_API_KEY } from './api.config'

const MAX_RESULTS = 2

function search({ type = 'video', maxResults = MAX_RESULTS, query }) {
  const url = `${YT_BASE_URL}/search?part=snippet&q=${query}&key=${YT_API_KEY}&maxResults=${maxResults}&type=${type}`
  return axios.get(url)
    .then(res => res.data)
}

const YoutubeAPI = {
  search
}

export default YoutubeAPI
