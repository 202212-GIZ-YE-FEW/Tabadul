import styles from "../../styles/hero.module.css";

const IntroductionImage = () => {
    return (
        <img
            className={styles.image}
            src='/images/hero1.png'
            alt='Introduction'
            width='450'
            height='350'
        />
    );
};

export default IntroductionImage;
