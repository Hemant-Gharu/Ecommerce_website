import styles from "../styles/cards.module.css";

const Cards = ({ item }) => {
  const { product, price, img } = item;
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={img} alt="" className={styles.image} />
        <p className={styles.product}>{product}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};
export default Cards;
