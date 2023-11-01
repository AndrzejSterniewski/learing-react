import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const CardForm = props => {

    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        // props.action({ title: title }, props.columnId);
        // dispatch({ type: 'ADD_CARD', payload: { title, id: shortid() } });
        dispatch({ type: 'ADD_CARD', payload: { id: shortid(), title } });
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput action={props.action} value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;