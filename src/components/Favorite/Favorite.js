import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = () => {

    // NEW CODE
    const favCards = useSelector(getFavoriteCards);

    return (
        <article className={styles.favorite}>
            <h1>Favorite</h1>
            <p>lorem ipsum</p>
            <ul className={styles.cards}>
                {favCards.map(card => <Card key={card.id} {...card} />)}
            </ul>
        </article>
    )
}

export default Favorite;