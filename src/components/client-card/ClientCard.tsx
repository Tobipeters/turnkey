import styles from "./styles.module.css";

export const ClientCard = () => {
  return (
    <div className={styles.client_card_container}>
      <h4 className={styles.title}>Brand name</h4>
      <p className={styles.details}>
        Lorem ipsum dolor sit amet consectetur. Aliquet viverra ut varius
        posuere vitae sem mattis. Aliquam molestie nullam molestie
        pellentesque.sem mattis. Aliquam molestie nullam molestie pellentesque.
      </p>
    </div>
  );
};
