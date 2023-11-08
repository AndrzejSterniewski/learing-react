import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import shortid from 'shortid';

const ListForm = props => {

    const [listTitle, setListTitle] = useState('');
    const [listDescription, setListDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ listTitle, listDescription, id: shortid() }));
        setListTitle('');
        setListDescription('');

        return (
            <form className={styles.listForm} onSubmit={handleSubmit}>
                <span className={styles.spanStyle}>Title:</span><TextInput value={listTitle} onChange={e => setListTitle(e.target.value)} />
                <span className={styles.spanStyle}>Description:</span><TextInput value={listDescription} onChange={e => setListDescription(e.target.value)} />
                <Button>Add list</Button>
            </form>
        )
    }
}

export default ListForm;