import styles from "../styles/cards.module.css";
// import img from "../assets/macbook_air.jpg";

const Cards = ({ item }) => {
  const { product, price, img } = item;
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={img} alt="Product Image" className={styles.image} />
        <p className={styles.product}>{product}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};
export default Cards;
