import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchstring } from '../../redux/searchStringRedux';

const SearchForm = (props) => {

    const searchString = useSelector(state => state.searchString);

    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        // props.action({ title: title }, props.columnId);
        // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
        dispatch(updateSearchstring(e.target.value));
    };

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." action={props.action} defaultValue={searchString} onChange={handleChange} />
            {/* <Button>Search </Button> */}
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;