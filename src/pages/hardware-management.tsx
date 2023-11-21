import styles from "./styles/service.module.css";
import { Contact } from "@/components";
import Image from "next/image";
import BenefitImg from "../assets/Hand.png";
import ListTickIcon from "../assets/Tick.png";
import HeroBg from "../assets/hardwaree-bg.png";
import HardwareAboutImg from "../assets/hardware/hardware-about.png";
import ToolIcon from "../assets/hardware/Tools.png";
import RecyclingIcon from "../assets/hardware/Recycling.png";
import DataIcon from "../assets/hardware/Data synchronization.png";
import SecureIcon from "../assets/hardware/Secure shield (1).png";
import SystemRepairImg from "../assets/hardware/system-repair-img.png";
import HardwareRecyclingImg from "../assets/hardware/hardwaree-recycling-img.png";
import DataRecoveryImg from "../assets/hardware/data-recovery-img.png";
import DataDestructionImg from "../assets/hardware/data-destruction-img.png";

export default function HardwareMgt() {
  const subServices = [
    {
      icon: ToolIcon,
      name: "Desktop, Laptops, MacOS, Phones - Repairs",
      value:
        "Fast, reliable fixes for all your devices. Get back to work and stay connected with our expert repair services",
    },
    {
      icon: RecyclingIcon,
      name: "Hardware Recycling and Disposal",
      value:
        "Eco-friendly, secure solutions for retiring your hardware assets while protecting your sensitive data.",
    },
    {
      icon: DataIcon,
      name: "Data Security and Recovery",
      value:
        "Your data's safety is our priority. We protect and recover your information for seamless operations and peace of mind",
    },
    {
      icon: SecureIcon,
      name: "Data Destruction ",
      value:
        "Secure and thorough data erasure to protect your sensitive information and maintain compliance",
    },
  ];

  return (
    <>
      <header
        className={styles.header_section}
        style={{
          backgroundImage: `url(${HeroBg.src})`,
        }}
      >
        <div className="container h-100">
          <div className={styles.text_holder}>
            <h2 className={styles.title}>Hardware and E-waste Management </h2>
          </div>
        </div>
      </header>

      <section className={styles.brief_section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className={styles.text_holder}>
                <p className={styles.details}>
                  At Turnkey Kinetics, we take a proactive approach to managing
                  hardware and e-waste, recognizing the environmental and
                  security implications of outdated or retired equipment. Our
                  services encompass the responsible disposal and recycling of
                  electronic assets, ensuring compliance with environmental
                  regulations while safeguarding your data. We specialize in
                  asset tracking, secure data erasure, and sustainable disposal,
                  offering you a seamless, eco-friendly solution to manage your
                  hardware and e-waste efficiently. Trust us to optimize your IT
                  resources and contribute to a greener, more secure future
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                className="img-fluid"
                src={HardwareAboutImg}
                alt="Hardware and E-waste Management  - Turnkey"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about_section}>
        <div className="container">
          <div className={styles.text_holder}>
            <h3 className={styles.title}>
              Sustainable Solutions for Hardware and E-Waste Management
            </h3>
            <p className={styles.details}>
              At Turnkey Kinetics, we approach these challenges comprehensively,
              ensuring a seamless and responsible solution
            </p>
          </div>

          <div className="row d-flex justify-content-center">
            {subServices.map((sub_service: any, id: number) => (
              <div className="col-lg-4 col-md-6" key={id}>
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
          <h3 className={styles.title}>
            Managed E-Waste Management Key Features
          </h3>

          <section className="row" id="repairs">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                <h5 className={styles.name}>
                  Desktop, Laptops, MacOS, Phones - Repairs
                </h5>
                <p className={styles.details}>
                  We specialize in diagnosing and fixing a wide range of
                  problems. Whether your desktop has performance hiccups, your
                  laptop&apos;s screen is malfunctioning, or your macOS device
                  requires troubleshooting, we&apos;re here to help. We also cater to
                  mobile phone repairs, addressing everything from screen
                  replacements to battery issues.
                  <br />
                  With our eco-friendly hardware recycling and disposal, the
                  need to responsibly dispose of outdated hardware becomes
                  increasingly important. Turnkey Kinetics takes a proactive
                  approach by providing eco-friendly hardware recycling and
                  disposal services. We understand the environmental impact of
                  electronic waste and are dedicated to managing it responsibly.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>
                  Desktop, Laptops, MacOS, Phones - Repairs
                </h5>
                <p className={styles.details}>
                  We specialize in diagnosing and fixing a wide range of
                  problems. Whether your desktop has performance hiccups, your
                  laptop's screen is malfunctioning, or your macOS device
                  requires troubleshooting, we're here to help. We also cater to
                  mobile phone repairs, addressing everything from screen
                  replacements to battery issues.
                  <br />
                  With our eco-friendly hardware recycling and disposal, the
                  need to responsibly dispose of outdated hardware becomes
                  increasingly important. Turnkey Kinetics takes a proactive
                  approach by providing eco-friendly hardware recycling and
                  disposal services. We understand the environmental impact of
                  electronic waste and are dedicated to managing it responsibly.
                </p> */}

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
                    We will do component-level motherboard repair without the
                    high cost of a full motherboard replacement.
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    We will ultrasonically clean the liquid damage so the
                    corrosion does not cause further short circuits and damage
                    to components.
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    We have a no fix, no pay policy and we give free estimates.
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    We practice safe and eco-friendly recycling.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                className={`img-fluid ${styles.section_img}`}
                src={SystemRepairImg}
                alt="Desktop, Laptops, MacOS, Phones - Repairs - Turnkey"
              />
            </div>
          </section>

          <section className="row" id="hardware_recycling">
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={HardwareRecyclingImg}
                alt="Hardware Recycling and Disposal - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-5 ms-lg-3`}>
                <h5 className={styles.name}>Hardware Recycling and Disposal</h5>
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

          <section className="row" id="data_security_and_recovery">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                <h5 className={styles.name}>Data Security and Recovery</h5>
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
                src={DataRecoveryImg}
                alt="Data Security and Recovery - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>
          </section>

          <section className="row" id="data_destruction">
            <div className="col-12 mb-0">
            <div className={`${styles.text_holder} ms-xl-5 ms-lg-3`}>
                <h5 className={styles.name}>Data Destruction</h5>
                <p className={styles.details}>
                  For businesses, the importance of data destruction cannot be
                  overstated. It prevents data breaches, ensures compliance with
                  data protection laws, and reduces security risks.
                  <br />
                  Turnkey Kinetics offers you more than IT inventory and audit services;
                </p>
                </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={DataDestructionImg}
                alt="Data Destruction - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-5 ms-lg-3`}>
                {/* <h5 className={styles.name}>Data Destruction</h5>
                <p className={styles.details}>
                  For businesses, the importance of data destruction cannot be
                  overstated. It prevents data breaches, ensures compliance with
                  data protection laws, and reduces security risks.
                </p> */}

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
                    <div>
                      <strong>Certified Data Destruction:</strong> Verified
                      processes ensuring secure and thorough data erasure.
                    </div>
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    <div>
                      <strong> On-Site and Off-Site Data Destruction:</strong>
                      Flexible options for secure data disposal in various
                      locations.
                    </div>
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    <div>
                      <strong> Data Destruction Compliance:</strong> Adherence
                      to regulatory standards and industry requirements for data
                      destruction.
                    </div>
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    <div>
                      <strong> Asset Disposition Services:</strong> Professional
                      handling and disposal of retired or obsolete technology
                      assets.
                    </div>
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    <div>
                      <strong> Secure Chain of Custody:</strong> Ensured
                      security and accountability throughout the data
                      destruction process.
                    </div>
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    <div>
                      <strong> Environmentally Friendly Disposal:</strong>
                      Sustainable methods for responsible and eco-friendly data
                      destruction practices.
                    </div>
                  </li>
                  <li>
                    <Image
                      width={20}
                      height={20}
                      src={ListTickIcon}
                      className={styles.icon}
                      alt="list tick"
                    />
                    <div>
                      <strong> Consultation and Compliance Assessment:</strong>
                      Expert guidance and evaluation of data destruction
                      procedures for regulatory compliance.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Contact isBanner={false} />
    </>
  );
}
