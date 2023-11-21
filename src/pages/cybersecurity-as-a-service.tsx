import styles from "./styles/service.module.css";
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
              organization&apos;s digital future with our trusted cybersecurity
              solutions
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
          <h3 className={styles.title}>Managed cybersecurity Features</h3>

          <section className="row" id="IT_governance">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>
                  IT Governance and Risk Management
                </h5>
                <p className={styles.details}>
                  At Turnkey Kinetics, we are dedicated to enhancing your
                  business&apos;s competitive edge through excellence in IT
                  Governance and Risk Management. Our track record has earned
                  the trust of companies navigating the complexities of
                  governance, risk, and compliance. Our comprehensive suite of
                  services is designed to align your IT operations with your
                  business goals, ensuring compliance, data security, and
                  business continuity.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>
                  IT Governance and Risk Management
                </h5>
                <p className={styles.details}>
                  At Turnkey Kinetics, we are dedicated to enhancing your
                  business&apos;s competitive edge through excellence in IT
                  Governance and Risk Management. Our track record has earned
                  the trust of companies navigating the complexities of
                  governance, risk, and compliance. Our comprehensive suite of
                  services is designed to align your IT operations with your
                  business goals, ensuring compliance, data security, and
                  business continuity.
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
                      <strong>Compliance Management and Reporting:</strong> We
                      help you navigate complex regulatory landscapes and ensure
                      that your IT practices align with compliance requirements.
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
                      <strong>Risk Assessment:</strong> Our in-depth risk
                      assessments enable you to make informed decisions and
                      implement effective risk mitigation strategies.
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
                      <strong>Business Continuity Planning:</strong> We assist
                      you in creating robust business continuity plans to ensure
                      that your operations can continue even in the face of
                      disruptions.
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
                      <strong>Security Audits and Assessment:</strong> Our
                      thorough security audits and assessments uncover
                      vulnerabilities in your IT environment,
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
                      <strong>Vendor Risk Management:</strong> We help you
                      manage the risks associated with third-party vendors,
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
                      <strong>Security Awareness and Training:</strong> Our
                      training programs empower your workforce to recognize and
                      respond to security threats effectively.
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
                      <strong>Data Protection and Privacy:</strong> We implement
                      robust data protection measures and ensure compliance with
                      privacy regulations
                    </div>
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

          <section className="row" id="security_solution">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>Managed Security Solution</h5>
                <p className={styles.details}>
                  Data is king, and securing your organization against cyber
                  threats is not just a priority but a necessity that Turnkey
                  Kinetics are committed to supply. Managed Security Solutions
                  are your digital proactive protection and expert guidance to
                  fortify your business against relentless threats, and Turnkey
                  Kinetics is your strategic ally in the ever-escalating battle
                  against cyber adversaries. Our Managed Security Solutions are
                  crafted to keep pace with the ever-changing cybersecurity
                  landscape, ensuring that your organization remains protected.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={SecuritySolutionBgImg}
                alt="Managed Security Solution - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-4 ms-lg-2`}>
                {/* <h5 className={styles.name}>Managed Security Solution</h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                      <strong>Threat Detection and Response:</strong> Identify
                      and mitigate potential security risks swiftly.
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
                      <strong>Firewall and Intrusion Prevention:</strong>
                      Safeguard networks by blocking unauthorized access and
                      potential breaches.
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
                      <strong>Vulnerability Management:</strong> Identify and
                      address system weaknesses to prevent exploitation.
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
                      <strong>Data Encryption and Protection:</strong> Secure
                      sensitive information through encryption and robust
                      protective measures.
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
                      <strong>Cloud Security Solutions:</strong> Ensure secure
                      cloud operations and data protection.
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
                      <strong>Security Awareness Training:</strong> Educate
                      personnel to recognize and prevent security threats
                      effectively.
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
                      <strong>Compliance and Governance:</strong> Align
                      operations with regulations and enforce governance
                      standards.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="row" id="malware_protection">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>Phishing and Malware Protection</h5>
                <p className={styles.details}>
                  At Turnkey Kinetics we transformed safeguarding digital assets
                  into an art form; with comprehensive Phishing and Malware
                  Protection services that are meticulously designed to
                  counteract evolving cyber threats, making us your trusted
                  partner in a shifting digital landscape.
                  <br />
                  As cyber adversaries grow more sophisticated, your
                  organization&apos;s safety hinges on robust Phishing and
                  Malware Protection. But what does this protection entail, and
                  how does Turnkey Kinetics lead the charge in securing your
                  digital fortress?
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>Phishing and Malware Protection</h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                      <strong> Real-Time Threat Analysis:</strong> Instant
                      identification and response to emerging security threats.
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
                      <strong> Advanced Email Filtering:</strong> Robust
                      filtering to prevent sophisticated email-based security
                      threats.
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
                      <strong> Endpoint Protection:</strong> Safeguard
                      individual devices from cybersecurity threats.
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
                      <strong> Behavior-Based Threat Detection:</strong>{" "}
                      Identify anomalies in behavior for early threat detection.
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
                      <strong> Vulnerability Assessment:</strong> Identify and
                      address weaknesses to fortify overall cybersecurity
                      defenses.
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
                      <strong> Secure Web Browsing:</strong> Ensure safe
                      internet usage through protective web browsing measures.
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
                      <strong> Employee Training:</strong> Educate personnel for
                      enhanced awareness and proactive cybersecurity measures.
                    </div>
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

          <section className="row" id="penetration_testing">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>
                  Vulnerability and Penetration Testing
                </h5>
                <p className={styles.details}>
                  At Turnkey Kinetics, our Vulnerability and Penetration Testing
                  (VAPT) services are designed to help you not only combat
                  threats but also chart a course for a secure digital future.
                  There are always risks online, but with our services, you will
                  always be ahead of the game.
                  <br />
                  Our team has harnessed the power of VAPT to safeguard your
                  digital empire. We offer a spectrum of services designed to
                  fortify your defenses, proactively identify vulnerabilities,
                  and empower your organization in a digital world fraught with
                  threats.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={PenetrationTestingBgImg}
                alt="Vulnerability and Penetration Testing - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-4 ms-lg-2`}>
                {/* <h5 className={styles.name}>
                  Vulnerability and Penetration Testing
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                      <strong> Vulnerability Assessment:</strong> Identify and
                      evaluate weaknesses in software and network infrastructure
                      for proactive security.
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
                      <strong> Penetration Testing:</strong> Simulate
                      cyberattacks to discover vulnerabilities and weaknesses,
                      ensuring robust security measures.
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
                      <strong> Risk Measurement:</strong> Assess and quantify
                      potential security risks to inform strategic
                      decision-making for risk mitigation.
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
                      <strong>Dynamic and Static Code Analysis:</strong> Examine
                      software code in motion and at rest for security
                      vulnerabilities and flaws.
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
                      <strong>Compliance Safeguarding:</strong> Ensure adherence
                      to regulatory standards and industry compliance,
                      minimizing legal and financial risks.
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
                      <strong>Automated Solution:</strong> Employ automated
                      tools and processes to enhance efficiency and
                      effectiveness in security measures.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="row" id="awareness_training">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>
                  Cybersecurity Awareness Training
                </h5>
                <p className={styles.details}>
                  At Turnkey Kinetics, we help in equipping your employees with
                  the right knowledge and skills through awareness training. It
                  serves as the firewall against the loss of sensitive data,
                  intellectual property, and financial assets, and safeguarding
                  your brand reputation. This training from our experts directly
                  addresses the common mistakes employees may make in their
                  daily digital interactions, making it a cornerstone of your
                  cybersecurity strategy.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>
                  Cybersecurity Awareness Training
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                      <strong> Phishing Tests:</strong> Recognizing phishing
                      threats is critical. Turnkey Kinetics conducts phishing
                      email tests, reflecting real-life scenarios, to elevate
                      your employees&apos; vigilance.
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
                      <strong>Comprehensive Modules:</strong> Our training
                      comprises 3 to 5 modules that are not just informative but
                      engaging, delivered regularly to make cybersecurity
                      education a seamless part of your employees&apos;
                      responsibilities.
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
                      <strong> Cybersecurity Best Practices:</strong> With our
                      expertly curated content and streamlined administration
                      through our cloud-based platform, Turnkey Kinetics makes
                      cybersecurity awareness training an impactful and
                      integrated part of your organization&apos;s security strategy.
                    </div>
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
