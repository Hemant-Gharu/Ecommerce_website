import styles from "../styles/hero.module.css"
import data from "../data.js"
import Cards from "./Cards.jsx";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {data.map((item, index) => (
        <Cards item={item} key={index} />
      ))}
    </div>
  );
};

export default Hero;
