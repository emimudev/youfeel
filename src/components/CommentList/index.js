import Comment from '../Comment'

export default function CommentList({ comments }) {
  return (
    <div className='flex flex-col gap-4'>
      {comments.map((comment, index) => (
        <Comment
          index={index}
          key={comment.id}
          replies={comment.replies}
          snippet={comment.snippet}
        />
      ))}
    </div>
  )
}
