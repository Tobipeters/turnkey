import styles from "./styles/service.module.css";
import { Contact, Seo } from "@/components";
import Image from "next/image";
import BenefitImg from "../assets/Hand.png";
import ListTickIcon from "../assets/Tick.png";
import HeroBg from "../assets/it-service-bg.png";
import ITServiceBg from "../assets/it-service/Manage-IT-service-brief-bg.png";
import SupportIcon from "../assets/it-service/Support-icon.png";
import CostIcon from "../assets/it-service/Budget.png";
import ResultIcon from "../assets/it-service/Results.png";
import ProjectMgtImg from "../assets/it-service/porject-mgt-img.png";
import ITStaffImg from "../assets/it-service/IT-staff-img.png";
import NetworkDesignImg from "../assets/it-service/network-design-img.png";
import TechnicalSupportImg from "../assets/it-service/Technical-support-img.png";
import ITAdvisoryImg from "../assets/it-service/IT-advisory-img.png";

export default function ITService() {
  const subServices = [
    {
      icon: SupportIcon,
      name: "Proactive Technical Support",
      value:
        "Anticipating tech issues, so you can focus on what matters most—your business",
    },
    {
      icon: CostIcon,
      name: "Predictable costs",
      value:
        "Say goodbye to budgeting surprises with our transparent and consistent pricing",
    },
    {
      icon: ResultIcon,
      name: "Reliable results ",
      value:
        " Our commitment to excellence ensures consistent performance and dependable outcomes",
    },
  ];

  return (
    <>
      <Seo
        title="Turnkey Kinetics Services | Managed IT Services"
        description="Turnkey Kinetic Provides Managed IT Service Which Integrates The Monitoring Of All Critical Resources Across The Network To Ensure Optimum Performance, And A Proactive Approach To Mitigate Potential Problems In An Environment Before They Occur."
        image="/og-images/Manage-IT-service-brief-bg.png"
        keywords="Turnkey, Service, IT, Manitoba, Canada, Support, Security, Malware, Protection, Risk, Costs, Advisory, Consulting, Assessment, Network, Design, Training, Staff, Augmentation, Project, Management"
      />

      <header
        className={styles.header_section}
        style={{
          backgroundImage: `url(${HeroBg.src})`,
        }}
      >
        <div className="container h-100">
          <div className={styles.text_holder}>
            <h2 className={styles.title}>Managed IT Services</h2>
          </div>
        </div>
      </header>

      <section className={styles.brief_section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className={styles.text_holder}>
                <p className={styles.details}>
                  Turnkey Kinetic provides Managed IT Service which integrates
                  the monitoring of all critical resources across the network to
                  ensure optimum performance, and a proactive approach to
                  mitigate potential problems in an environment before they
                  occur. We will ensure your network runs as if it were our own,
                  by keeping systems updated with the latest security patches,
                  managing alterations to the network, and ensuring backup
                  systems are performing optimally.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                className="img-fluid"
                src={ITServiceBg}
                alt="Managed IT Services - Turnkey"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about_section}>
        <div className="container">
          <div className={styles.text_holder}>
            <h3 className={styles.title}>
              Experience Turnkey IT Support Perks
            </h3>
            <p className={styles.details}>
              Discover the advantages of our comprehensive IT support services,
              tailored to meet your unique needs and ensure your business
              operates at its best
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
          <h3 className={styles.title}>Managed IT Services Key Features</h3>

          <section className="row" id="IT_advisory">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>IT Advisory and Consulting</h5>
                <p className={styles.details}>
                  At Turnkey Kinetics, we understand that the ever-growing list
                  of regulations poses a complex challenge for businesses.
                  Simultaneously, they must address emerging risks, all while
                  maintaining a delicate balance between revenue growth and
                  cost-saving priorities.
                  <br />
                  In this service area, we focus on harnessing technology to
                  drive growth and streamline operations while effectively
                  mitigating technology-related risks.
                  <br />
                  When you partner with Turnkey Kinetics, you collaborate with a
                  team that has earned the trust of boards in multinational
                  organizations. We operate in both developed markets and the
                  vital emerging economies of Central and Eastern Europe,
                  Central and South America, and Asia-Pacific.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>IT Advisory and Consulting</h5>
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
                      <strong>
                        {" "}
                        Information Protection and Business Resilience:
                      </strong>{" "}
                      Safeguarding data and ensuring operational resilience for
                      business continuity.
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
                      <strong> IT Internal Audit:</strong> Independent
                      evaluation of IT processes and controls for organizational
                      compliance and effectiveness.
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
                      <strong> IT Attestation:</strong> Third-party validation
                      of IT controls and compliance for regulatory assurance.
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
                        IT Governance, Risk, and Compliance (GRC) and Controls
                        Integration:
                      </strong>
                      Aligning IT processes to governance, managing risks,
                      ensuring compliance, and integrating controls.
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
                      <strong> Information Governance Services:</strong>
                      Strategic management of information assets to meet legal,
                      regulatory, and business requirements.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                className={`img-fluid ${styles.section_img}`}
                src={ITAdvisoryImg}
                alt="IT Advisory and Consulting - Turnkey"
              />
            </div>
          </section>

          <section className="row" id="technical_support">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>Proactive Technical Support</h5>
                <p className={styles.details}>
                  Turnkey Kinetics, we believe in making customer support a
                  seamless and proactive experience, that empowers your
                  customers and reduces their service time, making your
                  organization a customer service standout.This increases
                  loyalty and reduces customer service resources.
                  <br />
                  We believe that in customer service, tomorrow&apos;s questions
                  should be answered today, well before your customers even
                  think to ask them. Customers demand quick, efficient support,
                  and traditional methods like call queues, call-back options,
                  and self-service resources are no longer enough.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={TechnicalSupportImg}
                alt="Proactive Technical  Support - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-4 ms-lg-2`}>
                {/* <h5 className={styles.name}>Proactive Technical Support</h5>
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
                      <strong> Recorded answers to common questions:</strong>
                      Providing information through automated messages, and
                      answering questions before customers ask.
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
                      <strong>Tooltips for technical vocabulary;</strong> Using
                      tooltips to explain complex terms in online resources,
                      simplifying customer understanding.
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
                      <strong> Live chat for confused shoppers:</strong>
                      Recognizing browsing patterns and offering immediate
                      assistance when a customer is stuck in the purchase
                      process.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="row" id="network_design">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>Network Design and Management</h5>
                <p className={styles.details}>
                  Turnkey Kinetics&apos; approach is all-encompassing. We
                  seamlessly integrate third-party systems into your network
                  while safeguarding your data&apos;s integrity and security. We
                  recognize the fast-paced landscape of technology, where
                  connectivity is not just an advantage but a necessity for
                  sustainable growth.
                  <br />
                  We understand that IT networks are the backbone of your
                  business operations, and our Network Design and Management
                  services cover a spectrum of network complexities, from
                  unmanaged networks to intricate Layer 2 &amp; Layer 3 routing
                  and switching solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>Network Design and Management</h5>
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
                      <strong>Comprehensive Network Design:</strong> Holistic
                      planning for robust and efficient network infrastructure.
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
                      <strong>Layer 2 &amp; Layer 3 Routing:</strong> Efficient
                      data transmission through network layers for optimal
                      performance.
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
                      <strong>Integration Expertise:</strong> Seamless
                      incorporation of diverse systems and technologies for
                      unified functionality.
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
                      <strong> Security Optimization:</strong> Strengthening
                      network security measures for enhanced protection against
                      potential threats.
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
                      <strong> Data Protection:</strong> Safeguarding sensitive
                      information from unauthorized access and potential
                      breaches.
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
                      <strong> Network Speed Optimization:</strong> Enhancing
                      data transfer rates and overall network performance for
                      efficiency.
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
                      <strong> Troubleshooting &amp; Support:</strong> Swift
                      identification and resolution of network issues, ensuring
                      continuous operational support.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                src={NetworkDesignImg}
                alt="Network Design and Management - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>
          </section>

          <section className="row" id="staff_augmentation">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>IT Staff Augmentation</h5>
                <p className={styles.details}>
                  Turnkey Kinetics provides exceptional staff augmentation
                  services since the utilization of contingent workers has
                  witnessed remarkable growth across global organizations.
                  <br />
                  Ensuring your organization has the IT talent and flexibility
                  required to excel in today&apos;s dynamic business environment
                  is what we offer
                </p>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={ITStaffImg}
                alt="IT Staff Augmentation - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-4 ms-lg-2`}>
                {/* <h5 className={styles.name}>IT Staff Augmentation</h5>
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
                      <strong> Temporary IT Staffing:</strong> Short-term
                      recruitment to meet fluctuating resource needs.
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
                      <strong> Project-Based Staffing:</strong> Specialized
                      personnel allocation tailored to project requirements and
                      timelines.
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
                      <strong> Contract-to-Hire:</strong> Trial period for
                      evaluating candidates before permanent employment
                      decisions.
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
                      <strong> On-Site Support:</strong> In-person assistance
                      for immediate IT issue resolution and support.
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
                      <strong> Training and Skill Development:</strong> Programs
                      enhancing employee capabilities for improved performance.
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
                      <strong> 24/7 Support:</strong> Round-the-clock assistance
                      for immediate issue resolution and continuous operational
                      support.
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
                      <strong> Customized Solutions:</strong> Tailored IT
                      strategies and services to meet specific business
                      requirements.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="row" id="project_management">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>IT Project Management</h5>
                <p className={styles.details}>
                  Data security is the foundation of trust in technology. The
                  practice of safeguarding digital information from unauthorized
                  access, corruption, and theft throughout its entire lifecycle,
                  is a holistic concept with various dimensions which our team
                  of experts at Turnkey Kinetics promises.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>IT Project Management</h5>
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
                      <strong> Data Discovery and Classification:</strong>{" "}
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
                      <strong>File Activity Monitoring:</strong> Real-time
                      tracking of file interactions for security and compliance
                      monitoring.
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
                      <strong>Automated Compliance Reporting:</strong>
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
                      <strong> Access Management and Controls:</strong> Regulate
                      user access to data assets, ensuring confidentiality and
                      integrity.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                src={ProjectMgtImg}
                alt="IT Project Management - Turnkey"
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
