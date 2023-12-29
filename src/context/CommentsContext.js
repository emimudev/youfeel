import { createContext, useContext, useState } from 'react'

const CommentsContext = createContext()

export default function CommentsContextProvider({ children }) {
  const [classifiedComments, setClassifiedComments] = useState([])

  const getCommentByIndex = ({ index }) => {
    // console.log({ [`comment-${index}`]: classifiedComments[index] })
    // console.log({ classifiedComments })
    return (classifiedComments && classifiedComments?.[index]) || {}
  }

  return (
    <CommentsContext.Provider value={{ getCommentByIndex, setClassifiedComments, classifiedComments }}>
      {children}
    </CommentsContext.Provider>
  )
}

export const useCommentsContext = () => useContext(CommentsContext)
