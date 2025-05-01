import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Postlayout = () => {
    return (
        <>
            <Link to='/postpage/1'>Post1</Link>
            <br />
            <Link to='/postpage/2'>Post2</Link>
            <br />
            <Link to='/postpage/3'>Post3</Link>
            <br />
            <Link to='/postpage/newpost'>NewPost</Link>
            <Outlet/>
        </>
    )
}

export default Postlayout;