import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col items-center gap-4">
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="flex items-center gap-2"
      >
        <label htmlFor="searchbox" className="text-sm">Search Post:</label>
        <input
          type="text"
          id="searchbox"
          placeholder="Search post"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          className="px-3 py-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </form>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        </li>
        <li>
          <Link to="/post" className="hover:text-blue-400 transition">Posts</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
