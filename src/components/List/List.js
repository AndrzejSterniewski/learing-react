import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';

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
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {/* rendering all columns */}
                {columns.map(column => 
                <Column
                 key={column.id} {...column} />)}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    );
};

export default List;