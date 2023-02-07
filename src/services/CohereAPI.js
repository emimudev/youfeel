import cohere from 'cohere-ai' // This is your trial API key
import { COHERE_API_KEY } from './api.config'

async function clasiffyComments({ comments }) {
  cohere.init(COHERE_API_KEY)
  const response = await cohere.classify({
    model: 'large',
    inputs: comments,
    examples
  })
  return response
}

const examples = [
  { text: 'you are hot trash', label: 'toxic' },
  { text: 'go to hell', label: 'toxic' },
  { text: 'get rekt moron', label: 'toxic' },
  { text: 'get a brain and use it', label: 'toxic' },
  { text: 'say what you mean, you jerk.', label: 'toxic' },
  { text: 'Are you really this stupid', label: 'toxic' },
  { text: 'I will honestly kill you', label: 'toxic' },
  { text: 'I love this', label: 'positive' },
  { text: 'I really enjoy this video', label: 'positive' },
  { text: "You're the best, i have learned a lot watching ur videos", label: 'positive' },
  { text: 'Thanks a lot for helping us', label: 'positive' },
  { text: 'I have found a job thanks to your videos', label: 'positive' },
  { text: 'yo how are you', label: 'neutral' },
  { text: "I'm curious, how did that happen", label: 'neutral' },
  { text: 'Try that again', label: 'neutral' },
  { text: 'Hello everyone, excited to be here', label: 'neutral' },
  { text: 'Chale y apenas me voy enterando hoy', label: 'neutral' },
  { text: 'I think I saw it first', label: 'neutral' },
  { text: '@midudev those of us who were on twitch had time to do it', label: 'neutral' },
  { text: 'How do I sign up for the hackathon?', label: 'neutral' },
  { text: '10:20', label: 'neutral' },
  { text: 'fuck you filthy black', label: 'racist' },
  { text: 'all latinos are disgusting', label: 'racist' },
  { text: 'all latinos are disgusting', label: 'racist' },
  { text: 'Chinese people should disappear, they bring the plagues', label: 'racist' },
  { text: 'Get out of here gay, nobody wants you', label: 'racist' },
  { text: 'Este video debería tener muchas mas vistas! Excelente contenido', label: 'positive' },
  { text: 'Que maravilla este video', label: 'positive' },
  { text: 'Muchas gracias', label: 'positive' },
  { text: 'Gracias x compartir tus conocimientos', label: 'positive' },
  { text: 'Muy buen video, muchas gracias!', label: 'positive' },
  { text: 'al final el principio siempre es el mismo: DEPENDE 🤣🤣', label: 'neutral' },
  { text: 'Muchas gracias por compartir, excelente como siempre. Saludos desde', label: 'positive' }
]

export const CohereAPI = {
  clasiffyComments
}
