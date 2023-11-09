import styles from './Card.module.scss';
import Button from '../Button/Button';

const Card = props => {
    return (
            <li className={styles.card}>{props.title}<Button><span className={styles.icon + ' fa fa-star-o'}></span></Button></li>
    );
};

export default Card;