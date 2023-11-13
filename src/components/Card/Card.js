import styles from './Card.module.scss';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = props => {
    
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(toggleCardFavorite(props.id))
    };

    const deleteCard = () => {
        dispatch(removeCard(props.id));
    }

    return (
        <li className={styles.card} onSubmit={handleSubmit}>{props.title}
        <span>
            <button onClick={handleSubmit} className={clsx(styles.icon + ' fa fa-star-o', props.isFavorite && styles.isActive)}></button>
            <button onClick={deleteCard} className={clsx(styles.icon + ' fa fa-trash', styles.deleteHover)}></button>
            </span>
        </li>
    );
};

export default Card;