import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        // props.action({ title: title, icon: icon });
        // dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
        // dispatch({ type: 'ADD_COLUMN', payload: { title, icon, id: shortid() } });
        dispatch(addColumn({ title, icon, id: shortid() }));
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.spanStyle}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.spanStyle}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;