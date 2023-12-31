import React from 'react';
import classes from './Header.module.css';
import logo from '../../../public/logo.svg?url';
// https://github.com/withastro/astro/issues/5924
// https://blog.logrocket.com/how-to-use-svgs-react/
// import image from "../images/deploy-logos-small.png";

const Header = () => {
    console.log('l');

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className="logo">
                    <a href="/AstroDemo/">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/AstroDemo/">Home</a></li>
                        <li><a href="/AstroDemo/about">About</a></li>
                        <li><a href="/AstroDemo/blog">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;