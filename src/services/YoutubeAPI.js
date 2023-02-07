import axios from 'axios'
import {
  YT_BASE_URL,
  YT_KEY_SEARCH,
  YT_KEY_VIDEO,
  YT_KEY_COMMENTS
} from './api.config'

const MAX_RESULTS = 20

function search({ type = 'video', maxResults = MAX_RESULTS, query }) {
  const url = `${YT_BASE_URL}/search?part=snippet&q=${query}&key=${YT_KEY_SEARCH}&maxResults=${maxResults}&type=${type}`
  return axios.get(url)
    .then(res => res.data)
}

function video({ videoId }) {
  const url = `${YT_BASE_URL}/videos?part=snippet&part=statistics&id=${videoId}&key=${YT_KEY_VIDEO}`
  return axios.get(url)
    .then(res => res.data)
}

function dislikes({ videoId }) {
  const url = `https://returnyoutubedislikeapi.com/Votes?videoId=${videoId}`
  return axios.get(url)
    .then(res => res.data)
}

function relatedVideos({ videoId, maxResults = MAX_RESULTS }) {
  const url = `${YT_BASE_URL}/search?part=snippet&relatedToVideoId=${videoId}&key=${YT_KEY_VIDEO}&maxResults=${maxResults}&type=video`
  return axios.get(url)
    .then(res => res.data)
}

function comments({ videoId, maxResults = 100 }) {
  const url = `${YT_BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&maxResults=${maxResults}&key=${YT_KEY_COMMENTS}`
  return axios.get(url)
    .then(res => res.data)
}

const YoutubeAPI = {
  search,
  video,
  dislikes,
  relatedVideos,
  comments
}

export default YoutubeAPI
