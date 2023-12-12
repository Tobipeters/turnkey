import styles from "./styles.module.css";
import { TButton } from "..";
import { services } from "@/mock-data";
import { FbIcon, IGIcon, LinkedInIcon, TwitterIcon } from "@/assets/svg";
import { useRouter } from "next/router";
import Link from "next/link";

export const Footer = () => {
  const router = useRouter();

  const goToServiceSection = () => router.push("/#service_section");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.text_holder}>
          <div className={styles.title}>
            Let’s build your IT space and Get you started today
          </div>

          <div className="d-flex justify-content-center">
            <TButton click={goToServiceSection} text="Get started" />
          </div>

          <div className="row mt-5 pt-4 d-flex justify-content-center">
            <div className="col-lg-2 col-5 order-1">
              <ul className={styles.link_group}>
                <li className={styles.link}>Navigation</li>
                <li className={styles.link}>
                  <Link href="/">Home </Link>
                </li>
                <li className={styles.link}>
                  <Link href="/#about_section"> About us </Link>
                </li>
                <li className={styles.link}>
                  <Link href={`${router.pathname}#contact_section`}>
                    {" "}
                    Contact us{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-7 order-2">
              <ul className={styles.link_group}>
                <li className={styles.link}>Services</li>
                {services.map((service, index) => (
                  <li className={styles.link} key={index}>
                    <Link href={service.link}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-5 col-7 order-md-3 order-4">
              <ul className={styles.link_group}>
                <li className={styles.link}>Company Info</li>
                <li className={styles.link}>
                  <Link href="tel:+12048917615">Tel. +1 204 891 7615</Link>
                </li>
                <li className={styles.link}>
                  <Link href="mailto:info@turnkeykinetics.com" target="_blank">
                    Info@turnkeykinetics.ca
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link href="https://www.turnkeykinetics.ca">
                    www.turnkeykinetics.ca
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-7 col-5 order-md-4 order-3">
              <ul className={styles.link_group}>
                <li className={styles.link}>Find us at</li>
                <li className={styles.link}>Winnipeg Office</li>
                <li className={styles.link}>50 Sage Creek Boulevard, </li>
                <li className={styles.link}>Winnipeg, MB, R3X 0J6, Canada</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom_notes}>
          <div className={styles.copy_right}>
            Copyright Turnkey Kinetics@{new Date().getFullYear()} all right reserved
          </div>

          <div className={styles.icon_container}>
            <a href="https://www.facebook.com/Turnkeykinetics" target="_blank" className={styles.icon_holder}>
              <FbIcon />
            </a>
            <a href="https://www.linkedin.com/company/turnkeykinetics" target="_blank" className={styles.icon_holder}>
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/turnkeykinetics" target="_blank" className={styles.icon_holder}>
              <IGIcon />
            </a>
            <a href="https://twitter.com/TurnkeyKinetics" target="_blank" className={styles.icon_holder}>
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
