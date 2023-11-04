import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import updateSearchstring from '../../redux/store';

const SearchForm = (props, state) => {

    const searchString = state.searchString;

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        // props.action({ title: title }, props.columnId);
        // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
        dispatch(updateSearchstring({searchString}));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." action={props.action} value={searchString}/>
            {/* <Button>Search </Button> */}
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;