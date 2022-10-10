import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'
import './layout.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className='layout prose mx-auto py-4 min-h-screen'>
            <nav className='nav flex justify-between items-center'>
                <h1 className='font-mono text-3xl'><Link className="no-underline" to="/">Blog</Link></h1>
                <ul className='category flex list-none'>
                    <li><Link to="/life">生活</Link></li>
                    <li><Link to="/tech">技术</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className='font-mono text-4xl text-center mb-4 font-extrabold'>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout