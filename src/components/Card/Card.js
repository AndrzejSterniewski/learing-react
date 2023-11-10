import styles from './Card.module.scss';
import { useState } from 'react';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import clsx from 'clsx';

const Card = props => {

    const [isFavorite, setFavorite] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        // props.action({ title: title, icon: icon });
        // dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
        // dispatch({ type: 'ADD_COLUMN', payload: { title, icon, id: shortid() } });
        
        // dispatch(toggleCardFavorite({ id: shortid(), title, icon, isFavorite }));
        dispatch(toggleCardFavorite({ id: shortid(), isFavorite }));
    };

    return (
            <li className={styles.card} onSubmit={handleSubmit}>{props.title}
            {/* <button onClick={() => setFavorite(!isFavorite)}><span className={styles.icon + ' fa fa-star-o'}></span></button> */}
            <button onClick={() => setFavorite(!isFavorite)}><span className={clsx(styles.icon + ' fa fa-star-o', styles.btnFav)}></span></button>
            </li>
    );
};

export default Card;


// className={clsx(styles.body, props.className)}
// className={clsx(props.prepareColorClassName(item), item === props.currentColor && styles.active)} onClick={() => props.setColor(item)}