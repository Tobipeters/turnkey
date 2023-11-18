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
                  <Link href="tel:+12049523913">tel. +1 204 952 3913</Link>
                </li>
                <li className={styles.link}>
                  <Link href="mailto:info@turnkeyunified.com" target="_blank">
                    Info@turnkeyunified.com
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link href="https://www.turnkeyunified.com">
                    www.turnkeyunified.com
                  </Link>
                </li>
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
