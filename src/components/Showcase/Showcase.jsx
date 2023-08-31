import classes from './Showcase.module.css';
import logos from '../../../public/images/framework-logos.png?url';
import logosSmall from '../../../public/images/framework-logos-small.png?url';

const Showcase = (props) => {
    const {
        heading = "Welcome To The Astro Crash Course!",
        text = "Build super fast HTML-first websites using your favorite JavaScript frameworks",
        showExtra = false,
    } = props;

    return (
        <section className={classes["showcase"]}>
            <div className={classes["showcase-text"]}>
                <h1>{heading}</h1>
                <p>
                    {text}
                </p>
            </div>

            {showExtra && <>
                <div className={classes["showcase-img"]}>
                    <img className="logos" src={logos} alt="" />
                    <img className="logos-small" src={logosSmall} alt="" />
                </div>

                <p className={classes["showcase-demo"]}>
                    <small>This is a demo website used for the YouTube crash course</small>
                </p>
            </>}
        </section>
    );
}

export default Showcase;