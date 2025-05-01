import React from 'react';
import Post from './Post';  // Assuming you already have the Post component to display individual posts

const Home = ({ posts }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
