import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props, state) => {

const searchString = state.searchString;

const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase())));

    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
            <ul className={cards}>
                {/* {props.cards.map(card => <Card key={card.id} title={card.title} />)} */}
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} />
        </article>
    );
}

export default Column;