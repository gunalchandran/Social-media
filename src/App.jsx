import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Header from './Header';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './Newpost';
import PostPage from './Postpage';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Food Vlog",
      datetime: "April 5, 2004 11:23:13",
      body: "Veg Biryani"
    },
    {
      id: 2,
      title: "Travel Vlog",
      datetime: "April 6, 2004 09:15:00",
      body: "Trip to Ooty"
    },
    {
      id: 3,
      title: "Tech Vlog",
      datetime: "April 7, 2004 14:05:33",
      body: "React Basics"
    },
  ]);

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  // This can be used later to implement search filtering logic
  useEffect(() => {
    setSearchResult(
      posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, posts]);

  return (
    <div>
      <Header title="Social Media app" />
      <Nav 
        search={search}
        setSearch={setSearch}
      />
      <Home posts={searchResult.length > 0 ? searchResult : posts} />
    </div>
  );
}

export default App;
