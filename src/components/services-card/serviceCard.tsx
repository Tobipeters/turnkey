import styles from "./styles.module.css";
import { TButton } from "..";
import { IService } from "@/mock-data/model";
import * as React from "react";

interface IProps {
  service: IService;
}

export const ServiceCard: React.FC<IProps> = ({ service }) => {
  return (
    <div
      className={styles.card_container}
      style={{ backgroundImage: `url(${service.photo.src})` }}
    >
      <div className={styles.text_holder}>
        <h4 className={styles.title}>{service.title}</h4>
        <p className={styles.details}>{service.details}</p>

        <TButton size="sm" text="Learn more" />
      </div>
    </div>
  );
};
