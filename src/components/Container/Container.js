import styles from './Container.module.scss';
import clsx from 'clsx';

const Container = props => {
    return (
        <div className={clsx(styles.body, props.className)}>
            {props.children}
        </div>
    );
}

export default Container;