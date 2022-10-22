import styles from "./Card.module.css";

// ClassName is imported from <Card className={styles.input}>
const Card = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
