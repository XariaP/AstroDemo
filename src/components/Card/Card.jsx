import classes from './Card.module.css';

const Card = (props) => {
    const {dark = false} = props;

    return (
        <div className={`${classes.card} ${dark && classes['dark']}`}>
            {props.children}
        </div>
    );
}

export default Card;