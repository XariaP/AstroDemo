import Card from '../Card/Card';
import classes from './Features.module.css';

const Features = (props) => {
    const featuresData = [
        {title: 'Zero JavaScript Runtime', body: ' Astro renders HTML on the server and strips away any remaining, unused JavaScript.'},
        {title: 'The Power of Islands', body: ' Need interactive UI? Load individual, non-blocking component islands in parallel.'},
        {title: 'Lazy-Loading Islands', body: 'Components only hydrate when they scroll into view. If you don\'t see it, Astro won\'t load it.'}
      ];

    return (
        <section className={classes.features}>
            <div className={classes.container}>
                {featuresData.map(feature => (
                    <Card dark={false}>
                        <h3>{feature.title}</h3>
                        <p>{feature.body}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Features;