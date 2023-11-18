import Image from "next/image";
import { Outfit } from "next/font/google";
import styles from "./styles/home.module.css";
import {
  TButton,
  ServiceCard,
  GoalCard,
  Contact,
  ClientCard,
} from "@/components";
import { MicrosoftLogo, AmazonLogo, OracleLogo } from "@/assets/svg";
import VmwareLogo from "../assets/vmware-logo.svg";
import AboutBg from "../assets/turnkey-about-bg.png";
import { services, goals } from "@/mock-data";
import { IService, IGoal } from "@/mock-data/model";
import { useRouter } from "next/router";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const goToServiceSection = () => router.push("/#service_section");

  return (
    <main className={`${styles.main} ${outfit.className}`}>
      <header className={styles.header_bg}>
        <div className="container">
          <div className={styles.text_holder}>
            <div className={styles.tag}>Secure. Support. Elevate.</div>
            <h2 className={styles.title}>
              Elevate Your Business with Expert <span>IT Advisory</span>,
              Unparalleled <span>IT Services</span> and{" "}
              <span>Cybersecurity</span>
            </h2>
            <p className={styles.details}>
              Your Trusted Partners in Cloud Security and IT Support. Ensuring
              Business Resilience with Expertise, Innovation, and Cutting-Edge
              Solutions for a Secure and Thriving Digital Future
            </p>

            <TButton click={goToServiceSection} text="Get started" />
          </div>
        </div>
      </header>

      <section className={styles.partner_section}>
        <div className="container">
          <h4 className={styles.sub_title}>We Have Partnered with</h4>

          <div className={styles.partners_container}>
            <MicrosoftLogo /> <AmazonLogo /> <OracleLogo />
            <Image src={VmwareLogo} alt="vmware" />
          </div>
        </div>
      </section>

      <section className={styles.about_section} id="about_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 d-flex align-items-center">
              <div className={styles.text_holder}>
                <h3 className={styles.title}>
                  About <span>Turnkey</span>
                </h3>
                <div className={styles.details}>
                  Turnkey Kinetics Service LLC is a Manitoba based managed
                  service provider determined to redefine the delivery of IT
                  services to all our clientele. We believe in generating
                  success collaboratively, developing long-term strategic
                  success, and building trust for the next challenge With you as
                  our partner, let’s solve challenges, think innovatively, and
                  maximize impact.
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <Image src={AboutBg} className="img-fluid" alt="About Turnkey" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.service_section} id="service_section">
        <div className="container">
          <h3 className={styles.title}>Our Exceptional Services</h3>

          <div className="row">
            {services.map((service: IService, id: number) => (
              <div className="col-lg-6 col-md-6" key={id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.goal_section}>
        <div className="container">
          <h3 className={styles.title}>We are here to help you be secure</h3>

          <div className="row d-flex justify-content-center">
            {goals.map((goal: IGoal, index: number) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <GoalCard goal={goal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.client_section}>
        <div className="container">
          <h3 className={styles.title}>Our clients</h3>

          <div className="row">
            {[1, 2, 3].map((id: number) => (
              <div className="col-md-4" key={id}>
                <ClientCard />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
