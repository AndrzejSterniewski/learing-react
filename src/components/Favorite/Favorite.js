import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';

const Favorite = (props) => {

    // NEW CODE
    const favCards = useSelector(state => getFavoriteCards(state, props.isFavorite));
    console.log('favorite cards', favCards);

    return (
        <article className={styles.columns}>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.column}>
                {favCards.map(card => <Card key={card.id} {...card} />)}
            </ul>
        </article>
    )
}

export default Favorite;