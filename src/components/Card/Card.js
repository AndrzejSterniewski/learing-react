import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = props => {
    
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(toggleCardFavorite(props.id))
    };

    return (
        <li className={styles.card} onSubmit={handleSubmit}>{props.title}
        <span>
            <button onClick={handleSubmit} className={clsx(styles.icon + ' fa fa-star-o', props.isFavorite && styles.isActive)}></button>
            <button className={clsx(styles.icon + ' fa fa-trash')}></button>
            </span>
        </li>
    );
};

export default Card;