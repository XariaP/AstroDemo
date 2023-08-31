import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={classes["footer"]}>
            <div className={classes["container"]}>
                <div>
                    <h3>Astro</h3>
                    <p>
                        This is a demo website to show how the Astro framework works. Visit
                        the <a href="https://astro.build">official website</a> to learn
                        more.
                    </p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/AstroDemo/">Home</a></li>
                        <li><a href="/AstroDemo/about">About</a></li>
                        <li><a href="/AstroDemo/blog">Blog</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;