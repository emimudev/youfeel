export function isEmptyComment(comment) {
  return comment && comment?.snippet?.topLevelComment?.snippet?.textOriginal.length === 0
}
