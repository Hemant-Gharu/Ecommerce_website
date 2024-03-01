import styles from "../styles/cards.module.css";
<<<<<<< HEAD
// import img from "../assets/macbook_air.jpg";

const Cards = ({ item }) => {
  const { product, price, img } = item;
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={img} alt="Product Image" className={styles.image} />
=======
import img from "../assets/macbook_air.jpg";

const Cards = ({ item }) => {
  const { product, price } = item;
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={img} alt="" className={styles.image} />
>>>>>>> ea70d730c0eeac744a98985b3e7e075e7913eec5
        <p className={styles.product}>{product}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};
export default Cards;
