import styles from '../styles/footer.module.css'
import img from '../assets/logo.png'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Footer() {
  return (
    <>
      <h2 className={styles.footer}>
        <div className={styles.leftFooter}>
          <img src={img} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.rightFooter}>
          <div className={styles.appDownload}>
            <div className={styles.download}>
              <IoLogoGooglePlaystore className={styles.android} />
            </div>
            <div className={styles.download}>
              <FaApple className={styles.apple} />
            </div>
          </div>
        </div>
      </h2>
    </>
  );
}

export default Footer;