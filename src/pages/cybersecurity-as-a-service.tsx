import styles from "../styles/service.module.css";
import { Contact } from "@/components";
import CybersecurityBgImg from "../assets/cybersecurity/cybersecurity-bg.jpeg";
import ITGovernanceImg from "../assets/Mitigation.png";
import SecuritySolutionImg from "../assets/Encrypted.png";
import MalwareProtectionImg from "../assets/Secure shield.png";
import PenetrationTestImg from "../assets/Unit testing.png";
import AwarenessTrainingImg from "../assets/Classroom.png";
import Image from "next/image";
import BenefitImg from "../assets/Hand.png";
import ListTickIcon from "../assets/Tick.png";
import ITGovernanceBgImg from "../assets/cybersecurity/IT-governance-bg.png";
import SecuritySolutionBgImg from "../assets/cybersecurity/Security-solution-bg.png";
import MalwareProtectionBgImg from "../assets/cybersecurity/Malware-protection-bg.png";
import PenetrationTestingBgImg from "../assets/cybersecurity/Penetration-testing-bg.png";
import AwarenessTestingBgImg from "../assets/cybersecurity/Awareness-testing-bg.png";

export default function Cybersecurity() {
  const subServices = [
    {
      icon: ITGovernanceImg,
      name: "IT governance and risk management",
      value:
        "IT governance and risk management are crucial for aligning technology with business objectives, mitigating threats, ensuring compliance, and promoting cost efficiency",
    },
    {
      icon: SecuritySolutionImg,
      name: "Managed Security Solution",
      value:
        "With 24/7 monitoring, threat detection, and incident response, it keeps your business secure, compliant, and ahead in the digital age",
    },
    {
      icon: MalwareProtectionImg,
      name: "Phishing and Malware Protection ",
      value:
        " Our comprehensive solutions shield your data, employees, and reputation from phishing attacks and malware breaches, ensuring a secure digital environment",
    },
    {
      icon: PenetrationTestImg,
      name: "Vulnerability and Penetration Testing",
      value:
        "IT governance and risk management are crucial for aligning technology with business objectives, mitigating threats, ensuring compliance, and promoting cost efficiency",
    },
    {
      icon: AwarenessTrainingImg,
      name: "Cybersecurity Awareness Training",
      value:
        "IT governance and risk management are crucial for aligning technology with business objectives, mitigating threats, ensuring compliance, and promoting cost efficiency",
    },
  ];

  return (
    <>
      <header className={styles.header_section}>
        <div className="container h-100">
          <div className={styles.text_holder}>
            <h2 className={styles.title}>Cybersecurity As A Service</h2>
          </div>
        </div>
      </header>
      <section className={styles.brief_section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className={styles.text_holder}>
                <p className={styles.details}>
                  In recent years, cyber threats to businesses have surged, with
                  a staggering 85.7% of Canadian companies experiencing at least
                  one cyberattack in 2021.
                  <br /> <br />
                  Recognizing the complexity of these risks, we offer
                  comprehensive solutions. As a Cisco Select Partner, Turnkey
                  Kinetics specializes in Cisco Meraki Cloud Managed Security,
                  addressing phishing, malware, data loss, and hacking.
                  <br /> <br />
                  We also provide IT Compliance and Security Awareness Training,
                  ensuring your business stays protected and compliant while
                  keeping your data secure. Partner with us for peace of mind in
                  an increasingly digital world.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                className="img-fluid"
                src={CybersecurityBgImg}
                alt="Cybersecurity As A Service - Turnkey"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about_section}>
        <div className="container">
          <div className={styles.text_holder}>
            <h3 className={styles.title}> Our Cybersecurity Services</h3>
            <p className={styles.details}>
              Protect your digital assets with our robust cybersecurity
              services. We offer expert vulnerability assessments, real-world
              penetration testing, and 24/7 monitoring to ensure your data
              remains secure in an evolving threat landscape. Safeguard your
              organization's digital future with our trusted cybersecurity
              solutions
            </p>
          </div>

          <div className="row d-flex justify-content-center">
            {subServices.map((sub_service: any, id: number) => (
              <div className="col-lg-4 col-md-6">
                <div className={styles.ser_card}>
                  <Image
                    src={sub_service.icon}
                    alt={sub_service.name}
                    className="img-fluid"
                    width={50}
                  />
                  <h5 className={styles.name}> {sub_service.name} </h5>
                  <p className={styles.details}> {sub_service.value} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className={styles.sub_service_desc_section}>
        <div className="container">
          <h3 className={styles.title}>Managed cybersecurity Features</h3>

          <section className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>
                  IT Governance and Risk Management
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
                </p>

                <ul className={styles.list_group}>
                  <li>
                    <Image
                      src={BenefitImg}
                      width={45}
                      height={45}
                      alt="benefit"
                    />
                    Benefits you get from us
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                className={`img-fluid ${styles.section_img}`}
                src={ITGovernanceBgImg}
                alt="IT Governance and Risk Management | Turnkey"
              />
            </div>
          </section>

          <section className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={SecuritySolutionBgImg}
                alt="Managed Security Solution - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>Managed Security Solution</h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
                </p>

                <ul className={styles.list_group}>
                  <li>
                    <Image
                      src={BenefitImg}
                      width={45}
                      height={45}
                      alt="benefit"
                    />
                    Benefits you get from us
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>Phishing and Malware Protection</h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
                </p>

                <ul className={styles.list_group}>
                  <li>
                    <Image
                      src={BenefitImg}
                      width={45}
                      height={45}
                      alt="benefit"
                    />
                    Benefits you get from us
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                src={MalwareProtectionBgImg}
                alt="Phishing and Malware Protection
                - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>
          </section>

          <section className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={PenetrationTestingBgImg}
                alt="Vulnerability and Penetration Testing - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>
                  Vulnerability and Penetration Testing
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
                </p>

                <ul className={styles.list_group}>
                  <li>
                    <Image
                      src={BenefitImg}
                      width={45}
                      height={45}
                      alt="benefit"
                    />
                    Benefits you get from us
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>
                  Cybersecurity Awareness Training
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
                </p>

                <ul className={styles.list_group}>
                  <li>
                    <Image
                      src={BenefitImg}
                      width={45}
                      height={45}
                      alt="benefit"
                    />
                    Benefits you get from us
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    Benfit 1 Lorem ipsum dolor sit amet consectetur. Orci vel
                    feugiat
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                src={AwarenessTestingBgImg}
                alt="Cybersecurity Awareness Training - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>
          </section>
        </div>
      </main>
      <Contact isBanner={false} />
    </>
  );
}
