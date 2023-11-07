import styles from './TextInput.module.scss';

const TextInput = props => {
    return <input className={styles.input} defaultValue={props.defaultValue} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
};

export default TextInput;