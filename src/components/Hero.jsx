import styles from "../styles/hero.module.css"
import data from "../data.js"
import Cards from "./Cards.jsx";

function Hero() {
  console.log(data);
  return (
    <>
      {data.map((item, index)=> <Cards item={item} key={index}/> )}
      
    </>
  );
}

export default Hero;
