import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
    return (
        <article className={styles.about}>
            <PageTitle>About</PageTitle>
            {/* <h1>About</h1> */}
            <p>lorem ipsum</p>
        </article>
    )
}

export default About;