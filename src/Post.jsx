import React from 'react'
import { Link, useParams } from 'react-router-dom';
const Post = () => {
    const {id} = useParams()
  return (
    <div>post {id}</div>
  )
}

export default Post;