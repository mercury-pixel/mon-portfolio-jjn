import styles from './Tags.module.css';

const Tag = ({ children }) => {
  return (
        <span className={styles.tag}>
            {children}
        </span>
    );
};

export default Tag;