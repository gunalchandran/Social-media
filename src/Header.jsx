import React from 'react'

const Header = ({ title }) => {
  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '2rem'
  }

  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header;
