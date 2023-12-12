import styles from "./styles.module.css";
import Image from "next/image";

export const ClientCard = () => {
  return (
    <div className={styles.client_card_container}>
      <h4 className={styles.title}>Brand name</h4>
      <p className={styles.details}>
        Lorem ipsum dolor sit amet consectetur. Aliquet viverra ut varius
        posuere vitae sem mattis. Aliquam molestie nullam molestie
        pellentesque.sem mattis. Aliquam molestie nullam molestie pellentesque.
      </p>

      <div className={styles.brand_holder}>
        {/* <Image src={} width="80" height="80" /> */}
        <div className={styles.content}>
          <h6 className={styles.name}>Name of the person</h6>
          <p className={styles.position}>Position of the person</p>
        </div>
      </div>
    </div>
  );
};
