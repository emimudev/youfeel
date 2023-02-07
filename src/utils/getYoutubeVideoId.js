export default function getYoutubeVideoId(url) {
  const youtubeRegex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(youtubeRegex)
  return match && match[2].length === 11 ? match[2] : null
}
