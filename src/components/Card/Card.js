import styles from './Card.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const Card = props => {

    const [isFavorite, setFavorite] = useState(false);

    return (
            <li className={styles.card}>{props.title}
            <Button onClick={setFavorite}><span className={styles.icon + ' fa fa-star-o'}></span></Button>
            </li>
    );
};

export default Card;