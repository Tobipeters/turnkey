import styles from "./styles.module.css";
import { TButton } from "..";
import { IService } from "@/mock-data/model";
import * as React from "react";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

interface IProps {
  service: IService;
}

export const ServiceCard: React.FC<IProps> = ({ service }) => {
  const router = useRouter();

  return (
    <div
      className={styles.card_container}
      style={{ backgroundImage: `url(${service.photo.src})` }}
    >
      <div className={styles.text_holder}>
        <Fade direction="down">
          <h4 className={styles.title}>{service.title}</h4>
          <p className={styles.details}>{service.details}</p>
        </Fade>
        <TButton
          click={() => router.push(`${service.link}`)}
          size="sm"
          text="Learn more"
        />
      </div>
    </div>
  );
};
