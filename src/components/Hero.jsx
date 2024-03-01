<<<<<<< HEAD
import styles from "../styles/hero.module.css"
import data from "../data.js"
import Cards from "./Cards.jsx";
=======
import data from "../data";
import styles from "../styles/hero.module.css";
import Cards from "./Cards";
>>>>>>> ea70d730c0eeac744a98985b3e7e075e7913eec5

function Hero() {
  console.log(data);
  return (
<<<<<<< HEAD
    <>
      {data.map((item, index)=> <Cards item={item} key={index}/> )}
      
    </>
=======
    <div className={styles.hero}>
      {data.map((item, index) => (
        <Cards item={item} key={index} />
      ))}
    </div>
>>>>>>> ea70d730c0eeac744a98985b3e7e075e7913eec5
  );
}

export default Hero;
