import styles from "./styles/service.module.css";
import { Contact, Seo } from "@/components";
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
import { Slide, Bounce, Fade } from "react-awesome-reveal";

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
      <Seo
        title="Turnkey Kinetics Services | Hardware and E-waste Management"
        description="At Turnkey Kinetics, We Take A Proactive Approach To Managing Hardware And E-Waste, Recognizing The Environmental And Security Implications Of Outdated Or Retired Equipment."
        image="/og-images/hardware-about.png"
        keywords="Turnkey, Service, IT, Manitoba, Canada, Hardware, E-waste, Management, Recycling, Resources, Electronic, Assets, Desktop, Laptop, Phone, MacOS, Windows, Linux, Data, Security, Recovery, Destruction, Repair"
      />

      <header
        className={styles.header_section}
        style={{
          backgroundImage: `url(${HeroBg.src})`,
        }}
      >
        <div className="container h-100">
          <div className={styles.text_holder}>
            <Slide direction="left">
              <h2 className={styles.title}>Hardware and E-waste Management </h2>
            </Slide>
          </div>
        </div>
      </header>

      <section className={styles.brief_section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className={styles.text_holder}>
                <Fade direction="down">
                  <p className={styles.details}>
                    At Turnkey Kinetics, we take a proactive approach to
                    managing hardware and e-waste, recognizing the environmental
                    and security implications of outdated or retired equipment.
                    Our services encompass the responsible disposal and
                    recycling of electronic assets, ensuring compliance with
                    environmental regulations while safeguarding your data. We
                    specialize in asset tracking, secure data erasure, and
                    sustainable disposal, offering you a seamless, eco-friendly
                    solution to manage your hardware and e-waste efficiently.
                    Trust us to optimize your IT resources and contribute to a
                    greener, more secure future
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6">
              <Bounce>
                <Image
                  className="img-fluid"
                  src={HardwareAboutImg}
                  alt="Hardware and E-waste Management  - Turnkey"
                />
              </Bounce>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about_section}>
        <div className="container">
          <div className={styles.text_holder}>
            <Fade direction="down">
              <h3 className={styles.title}>
                Sustainable Solutions for Hardware and E-Waste Management
              </h3>
            </Fade>
            <Fade direction="down">
              <p className={styles.details}>
                At Turnkey Kinetics, we approach these challenges
                comprehensively, ensuring a seamless and responsible solution
              </p>
            </Fade>
          </div>

          <div className="row d-flex justify-content-center">
            {subServices.map((sub_service: any, id: number) => (
              <div className="col-lg-4 col-md-6" key={id}>
                <div className={styles.ser_card}>
                  <Bounce>
                    <Image
                      src={sub_service.icon}
                      alt={sub_service.name}
                      className="img-fluid"
                      width={50}
                    />
                  </Bounce>
                  <h5 className={styles.name}> {sub_service.name} </h5>
                  <Fade direction="down">
                    <p className={styles.details}> {sub_service.value} </p>
                  </Fade>
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
                <Fade direction="down">
                  <p className={styles.details}>
                    Our team of skilled technicians specializes in diagnosing
                    and fixing a wide range of problems. Whether your desktop
                    has performance hiccups, your laptop&apos;s screen is
                    malfunctioning, or your macOS device requires
                    troubleshooting, we&apos;re here to help. We also cater to
                    mobile phone repairs, addressing everything from screen
                    replacements to battery issues.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                <Fade direction="down">
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
                      Desktop Repairs: From hardware malfunctions to software
                      issues, we diagnose and fix a wide range of desktop
                      problems.
                    </li>
                    <li>
                      <Image
                        width={20}
                        height={20}
                        src={ListTickIcon}
                        className={styles.icon}
                        alt="list tick"
                      />
                      Laptop Repairs: Whether it&apos;s a cracked screen,
                      malfunctioning keyboard, or software glitch, our experts
                      handle laptop repairs with precision.
                    </li>
                    <li>
                      <Image
                        width={20}
                        height={20}
                        src={ListTickIcon}
                        className={styles.icon}
                        alt="list tick"
                      />
                      MacOS Optimization: Trust us to fine-tune your MacOS
                      devices for optimal performance, addressing speed and
                      efficiency concerns.
                    </li>
                    <li>
                      <Image
                        width={20}
                        height={20}
                        src={ListTickIcon}
                        className={styles.icon}
                        alt="list tick"
                      />
                      Phone Repairs: From screen replacements to resolving
                      software glitches, we offer comprehensive phone repair
                      services for various brands.
                    </li>
                  </ul>
                </Fade>
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
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                <h5 className={styles.name}>Hardware Recycling and Disposal</h5>
                <Fade direction="down">
                  <p className={styles.details}>
                    At Turnkey Kinetics, we understand the critical importance
                    of responsible hardware disposal. Our dedicated team employs
                    state-of-the-art methods to ensure the safe and eco-friendly
                    recycling of electronic devices.
                    <br /> <br />
                    Whether you&apos;re a business looking to upgrade your IT
                    infrastructure or an individual seeking to dispose of
                    outdated gadgets, we offer tailored solutions that comply
                    with the highest environmental standards.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={HardwareRecyclingImg}
                alt="Hardware Recycling and Disposal - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-5 ms-lg-3`}>
                <Fade direction="down">
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
                        <strong>Secure Data Destruction:</strong> We prioritize
                        your data security through certified data destruction
                        methods, guaranteeing that sensitive information is
                        permanently erased.
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
                        <strong> Environmentally Friendly Recycling:</strong> We
                        follow stringent environmental guidelines, responsibly
                        recycling electronic components to minimize ecological
                        impact.
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
                        <strong> Asset Remarketing:</strong> Extend the life of
                        your technology assets through our remarketing services,
                        reducing waste and promoting a circular economy.
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
                        <strong> E-Waste Collection and Transport:</strong> Our
                        efficient collection and transportation services ensure
                        a hassle-free experience, allowing you to contribute to
                        sustainability effortlessly.
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
                        <strong> Compliance Assurance:</strong> Stay compliant
                        with local and international regulations governing
                        electronic waste disposal. We manage the complexities,
                        so you don&apos;t have to.
                      </div>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </section>

          <section className="row" id="data_security_and_recovery">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>Data Security and Recovery</h5>
                <Fade direction="down">
                  <p className={styles.details}>
                    Data security is the foundation of trust in technology. The
                    practice of safeguarding digital information from
                    unauthorized access, corruption, and theft throughout its
                    entire lifecycle, is a holistic concept with various
                    dimensions which our team of experts at Turnkey Kinetics
                    promises
                  </p>
                </Fade>
              </div>
            </div>

            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                <Fade direction="down">
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
                        <strong> Data Security Solutions:</strong> Protective
                        measures ensuring confidentiality, integrity, and
                        availability of data assets.
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
                        <strong> Data Discovery and Classification:</strong>
                        Identify and categorize data for enhanced security and
                        compliance.
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
                        <strong> File Activity Monitoring:</strong> Real-time
                        tracking of file interactions for security and
                        compliance monitoring.
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
                        <strong>
                          Vulnerability Assessment and Risk Analysis:
                        </strong>
                        Evaluate system weaknesses for proactive risk mitigation
                        strategies.
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
                        <strong> Automated Compliance Reporting:</strong>{" "}
                        Streamlined reporting to demonstrate adherence to
                        regulatory and industry standards.
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
                        <strong> Data Security Strategies:</strong> Customized
                        plans ensuring robust protection and management of
                        sensitive information.
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
                        <strong> Physical Security:</strong> Safeguarding data
                        through physical measures to prevent unauthorized access
                        or theft.
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
                        <strong> Access Management and Controls:</strong>{" "}
                        Regulate user access to data assets, ensuring
                        confidentiality and integrity.
                      </div>
                    </li>
                  </ul>
                </Fade>
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
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>Data Destruction</h5>
                <Fade direction="down">
                  <p className={styles.details}>
                    For businesses, the importance of data destruction cannot be
                    overstated. It prevents data breaches, ensures compliance
                    with data protection laws, and reduces security risks.
                    <br />
                    Turnkey Kinetics offers you more than IT inventory and audit
                    services;
                  </p>
                </Fade>
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
                <Fade direction="down">
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
                        to regulatory standards and industry requirements for
                        data destruction.
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
                        <strong> Asset Disposition Services:</strong>{" "}
                        Professional handling and disposal of retired or
                        obsolete technology assets.
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
                        Sustainable methods for responsible and eco-friendly
                        data destruction practices.
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
                        <strong>
                          {" "}
                          Consultation and Compliance Assessment:
                        </strong>
                        Expert guidance and evaluation of data destruction
                        procedures for regulatory compliance.
                      </div>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Contact isBanner={false} />
    </>
  );
}
