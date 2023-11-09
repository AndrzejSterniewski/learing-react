import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import shortid from 'shortid';

const ListForm = props => {

    const [title, setListTitle] = useState('');
    const [description, setListDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, id: shortid() }));
        setListTitle('');
        setListDescription('');
    };
    
    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.spanStyle}>Title:</span><TextInput value={title} onChange={e => setListTitle(e.target.value)} />
            <span className={styles.spanStyle}>Description:</span><TextInput value={description} onChange={e => setListDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
    );
};

export default ListForm;