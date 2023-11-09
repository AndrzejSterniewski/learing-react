import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
        <article className={styles.about}>
            <PageTitle>About</PageTitle>
            <p>lorem ipsum</p>
        </article>
    )
}

export default About;