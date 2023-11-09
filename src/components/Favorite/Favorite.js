import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';

const Favorite = () => {

    // NEW CODE
    const favCards = useSelector(getFavoriteCards);

    return (
        <article className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <p>lorem ipsum</p>
            <ul className={styles.cards}>
                {favCards.map(card => <Card key={card.id} {...card} />)}
            </ul>
        </article>
    )
}

export default Favorite;