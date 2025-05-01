import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <article className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-500 text-sm mb-2">Post Date: {post.datetime}</p>
      <p className="text-gray-700">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
      <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline mt-2 block">Read More</Link>
    </article>
  );
};

export default Post;
