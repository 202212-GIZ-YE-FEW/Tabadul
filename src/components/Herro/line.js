import styles from "../../styles/hero.module.css";

const Line = () => {
    return (
        <img
            className={styles.image}
            src='/images/line.png'
            alt='line'
            width='98%'
            height='10px'
        />
    );
};

export default Line;
