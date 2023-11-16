import styles from "./styles.module.css";
import { TButton } from "..";
import { services } from "@/mock-data";
import { FbIcon, IGIcon, LinkedInIcon, TwitterIcon } from "@/assets/svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.text_holder}>
          <div className={styles.title}>
            Let’s build your IT space and Get you started today
          </div>

          <div className="d-flex justify-content-center">
            <TButton text="Get started" />
          </div>

          <div className="row mt-5 pt-4 d-flex justify-content-center">
            <div className="col-lg-2 col-5 order-1">
              <ul className={styles.link_group}>
                <li className={styles.link}>Navigation</li>
                <li className={styles.link}>Home</li>
                <li className={styles.link}>About us</li>
                <li className={styles.link}>Contact us</li>
              </ul>
            </div>

            <div className="col-lg-3 col-7 order-2">
              <ul className={styles.link_group}>
                <li className={styles.link}>Services</li>
                {services.map((service, index) => (
                  <li className={styles.link} key={index}>{service.title}</li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-5 col-7 order-md-3 order-4">
              <ul className={styles.link_group}>
                <li className={styles.link}>Company Info</li>
                <li className={styles.link}>tel. +1 204 952 3913</li>
                <li className={styles.link}>Info@turnkeyunified.com</li>
                <li className={styles.link}>www.turnkeyunified.com</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-7 col-5 order-md-4 order-3">
              <ul className={styles.link_group}>
                <li className={styles.link}>Find us at</li>
                <li className={styles.link}>Winnipeg Office</li>
                <li className={styles.link}>1515, Warde Avenue, </li>
                <li className={styles.link}>Winnipeg</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom_notes}>
          <div className={styles.copy_right}>
            Copyright Turnkey@{new Date().getFullYear()} all right reserved
          </div>

          <div className={styles.icon_container}>
            <div className={styles.icon_holder}>
              <FbIcon />
            </div>
            <div className={styles.icon_holder}>
              <LinkedInIcon />
            </div>
            <div className={styles.icon_holder}>
              <IGIcon />
            </div>
            <div className={styles.icon_holder}>
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
