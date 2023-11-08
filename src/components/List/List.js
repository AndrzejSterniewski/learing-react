import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById, getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {

    const { listId } = useParams();
    
    const listData = useSelector(state => getListById(state, listId));
    // const columns = useSelector(getAllColumns);
    const columns = useSelector(state => getColumnsByList(state, listId));

    // const addColumn = newColumn => {
    //     setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
    // };

    // const addCard = (newCard, columnId) => {
    //     const columnsUpdated = columns.map(column => {
    //         if(column.id === columnId)
    //             return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
    //         else
    //             return column
    //     })
    //     setColumns(columnsUpdated);
    // };

    return (
        <div className={styles.list}>
            {/* <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p> */}
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {/* rendering all columns */}
                {/* {columns.map(column => 
                <Column
                 key={column.id} {...column} />)} */}
                {columns.map(column => 
                <Column
                 key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;