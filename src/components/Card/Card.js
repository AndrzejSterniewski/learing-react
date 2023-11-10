import styles from './Card.module.scss';
import { useState } from 'react';
import { getFavoriteCards, toggleCardFavorite } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import clsx from 'clsx';

const Card = props => {

    const [isFavorite, setFavorite] = useState(false);
    
    const dispatch = useDispatch();

    const favCards = useSelector(() => getFavoriteCards);
    console.log(isFavorite);

    const handleSubmit = e => {
        e.preventDefault();
        // props.action({ title: title, icon: icon });
        // dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
        // dispatch({ type: 'ADD_COLUMN', payload: { title, icon, id: shortid() } });
        
        // dispatch(toggleCardFavorite({ id: shortid(), title, icon, isFavorite }));
        dispatch(toggleCardFavorite({ id: shortid(), isFavorite, title: props.title }));
    };

    return (
            <li className={styles.card} onSubmit={handleSubmit}>{props.title}
            <button onClick={() => setFavorite(!isFavorite)} className={clsx(styles.icon + ' fa fa-star-o', isFavorite && styles.isActive)}></button>
            </li>
    );
};

export default Card;