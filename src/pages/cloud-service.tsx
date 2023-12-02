import styles from "./styles/service.module.css";
import { Contact, Seo } from "@/components";
import Image from "next/image";
import BenefitImg from "../assets/Hand.png";
import ListTickIcon from "../assets/Tick.png";
import HeroBg from "../assets/cloud-bg.png";
import CloudAboutImg from "../assets/cloud/cloud-about-img.png";
import CloudServiceImg from "../assets/cloud/cloud-service-img.png";
import MicrosoftSuitImg from "../assets/cloud/microsoft-suit-img.png";
import MigrationImg from "../assets/cloud/migration.png";
import VoiceServiceImg from "../assets/cloud/voice-service.png";
import PayImg from "../assets/cloud/pay-img.png";
import DistributionIcon from "../assets/cloud/Distributed.png";
import DataMigrationIcon from "../assets/cloud/Data migration.png";
import ProductivityIcon from "../assets/cloud/Productivity.png";
import { Slide, Bounce, Fade } from "react-awesome-reveal";

export default function CloudService() {
  const subServices = [
    {
      icon: DistributionIcon,
      name: "Microsoft 365 and Azure Integration",
      value:
        "Integrate Microsoft 365 and Azure for a powerful synergy of productivity and cloud capabilities.",
    },
    {
      icon: DataMigrationIcon,
      name: "AWS Migrations and Vmware Solutions",
      value:
        "Migrate to AWS with confidence and optimize your IT infrastructure with VMware solutions for a seamless transition to the cloud",
    },
    {
      icon: ProductivityIcon,
      name: "Turnkey Cloud Voice Services - Productivity Everywhere ",
      value:
        "Turnkey Cloud Voice Services empower your organization to communicate effortlessly, fostering productivity from anywhere, anytime.",
    },
  ];

  return (
    <>
      <Seo
        title="Turnkey Kinetics Services | Turnkey Cloud"
        description="Elevate Your Business With Our Managed Cloud Services. Our Experts Ensure Security, 24/7 Support, And Cost-Efficiency. Tailored Solutions, Scalability, And Streamlined Management, All In One Package. Contact Us Today For A Seamless Cloud Experience"
        image="/og-images/cloud-service-img.png"
        keywords="Turnkey, Service, IT, Manitoba, Canada, Cloud, IaaS, PaaS, SaaS, BMaaS, STaaS, Microsoft 365, Azure, Integration, Migration, AWS, Server, Telephony, VoIP, Security"
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
              <h2 className={styles.title}>Turnkey Cloud</h2>
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
                    Our Managed Cloud solution is available for Microsoft 365
                    and Microsoft Azure — services are offered on a per seat,
                    per month plan. These easy-to-budget solutions offer
                    significant business value for our Small and Medium-sized
                    (SMB) client base.
                    <br /> <br />A true &ldquo;Cloud Office&rdquo; solution is a
                    reality for businesses with adequate Internet and
                    appropriate redundancies. Many of our clients enjoy the
                    benefits of a complete business solution in a monthly
                    payment instead of upfront capital costs for a server. Clear
                    Concepts specializes in bringing enterprise-grade cloud
                    solutions to an SMB market. Don&quot;t get lost in working
                    with a national telecom that doesn&quot;t understand the
                    needs of your business — contact Clear Concepts and let us
                    earn your business.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6">
              <Bounce>
                <Image
                  className="img-fluid"
                  src={CloudAboutImg}
                  alt="Cloud Services - Turnkey"
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
                Experience Turnkey cloud services Perks
              </h3>
            </Fade>
            <Fade direction="down">
              <p className={styles.details}>
                Elevate your business with our Managed Cloud Services. Our
                experts ensure security, 24/7 support, and cost-efficiency.
                Tailored solutions, scalability, and streamlined management, all
                in one package. Contact us today for a seamless cloud experience
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
          <h3 className={styles.title}>Managed Turnkey Cloud Features</h3>

          <section className="row" id="cloud_service">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>Managed Cloud Services</h5>
                <Fade direction="down">
                  <p className={styles.details}>
                    Choose Turnkey Kinetics for Managed Cloud Services that
                    provide tailored solutions, scalability, cost-efficiency,
                    and robust security controls, ensuring optimal performance
                    and data protection for your organization.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>Managed Cloud Services</h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                        <strong> IaaS (Infrastructure as a Service):</strong>{" "}
                        Rent virtual computing resources on-demand, including
                        infrastructure, processing power, storage, and
                        networking components.
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
                        <strong> PaaS (Platform as a Service):</strong> Access
                        application development platforms with development
                        tools, operating systems, middleware, and databases for
                        seamless application development in the cloud.
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
                        <strong> SaaS (Software as a Service):</strong> Utilize
                        ready-to-use cloud-based applications via subscription
                        models for increased productivity.
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
                        <strong> BMaaS (Bare Metal as a Service):</strong>{" "}
                        Deploy dedicated physical servers on a pay-per-use
                        basis, offering exclusive hardware control and
                        management.
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
                        <strong> STaaS (Storage as a Service):</strong> Acquire
                        storage capacity through cloud-based subscriptions,
                        including storage volumes, raw capacity, and network
                        file systems.
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
                        <strong> Cost-Effectiveness:</strong> Pay only for the
                        resources you use, eliminating the need for costly
                        hardware and software investments.
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
                        <strong> Customized Solutions:</strong> Tailor your
                        cloud services to your unique workloads, especially in
                        complex multi-cloud environments.
                      </div>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                className={`img-fluid ${styles.section_img}`}
                src={CloudServiceImg}
                alt="Managed Cloud Services - Turnkey"
              />
            </div>
          </section>

          <section className="row" id="microsoft_365_and_azure_integration">
            <div className="col-12 mb-12">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>
                  Microsoft 365 and Azure Integration
                </h5>
                <Fade direction="down">
                  <p className={styles.details}>
                    At Turnkey Kinetics, we specialize in seamlessly merging
                    Microsoft 365 and Azure, two of the most influential pillars
                    in cloud-based services, to empower your organization.
                    Businesses must harness the power of integrated technology
                    solutions to stay competitive.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={MicrosoftSuitImg}
                alt="Microsoft 365 and Azure Integration - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-4 ms-lg-2`}>
                {/* <h5 className={styles.name}>
                  Microsoft 365 and Azure Integration
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                        <strong> Azure Cloud Migration:</strong> Seamless
                        transition to Microsoft Azure for enhanced scalability
                        and efficiency.
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
                        <strong> Microsoft 365 Setup:</strong> Tailored setup
                        ensuring optimal utilization of Microsoft 365 suite
                        features.
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
                        <strong> Data Integration:</strong> Efficient merging of
                        diverse datasets for unified business insights.
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
                        <strong> Security and Compliance:</strong> Robust
                        measures ensuring data security and regulatory
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
                        <strong> Custom Application Development:</strong>{" "}
                        Tailored applications aligning with specific business
                        requirements and goals.
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
                        <strong> 24/7 Support:</strong> Continuous assistance
                        and troubleshooting for uninterrupted system
                        functionality.
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
                        <strong> Performance Optimization:</strong> Fine-tuning
                        systems for peak performance and enhanced operational
                        efficiency.
                      </div>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </section>

          <section className="row" id="aws_migration_and_wmware_solution">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                <h5 className={styles.name}>
                  AWS Migrations and Vmware Solutions
                </h5>
                <Fade direction="down">
                <p className={styles.details}>
                  Our team at Turnkey Kinetics offers a comprehensive suite of
                  services to facilitate your AWS migrations and VMware
                  solutions.
                  <br />
                  When it comes to migrating vSphere-based environments to the
                  cloud, enterprises with VMware workloads have a powerful ally
                  in AWS Migrations and VMware Solutions. These are the kind of
                  solutions we provide to facilitate the seamless transfer of
                  virtual machines between on-premises data centers and the
                  VMware Cloud on AWS software-defined data center (SDDC).
                </p>
                </Fade>
              </div>
            </div>

            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                {/* <h5 className={styles.name}>
                  AWS Migrations and Vmware Solutions
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                      <strong> AWS Server Migration:</strong> Seamless
                      relocation of servers to Amazon Web Services
                      infrastructure.
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
                        AWS Application Migration Service (AWS MGN):
                      </strong>
                      Streamlined migration service for efficient application
                      transfer to AWS.
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
                      <strong> AWS Connector Configuration:</strong> Setting up
                      connectors for smooth communication between systems and
                      AWS.
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
                      <strong> Hybrid Cloud Integration:</strong> Integrating
                      on-premises infrastructure with AWS for enhanced
                      flexibility.
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
                      <strong> Minimal Downtime Migration:</strong> Ensuring
                      minimal disruption during the migration process for
                      uninterrupted operations.
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
                      <strong> Physical to AWS Migration:</strong> Effortless
                      migration of physical servers to Amazon Web Services
                      environment.
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
                      <strong> Multi-Cloud Compatibility: </strong> Supporting
                      migration and operation across multiple cloud environments
                      seamlessly.
                    </div>
                  </li>
                </ul>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <Image
                src={MigrationImg}
                alt="AWS Migrations and Vmware Solutions - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>
          </section>

          <section className="row" id="voice_service">
            <div className="col-12 mb-3">
              <div className={`${styles.text_holder}`}>
                <h5 className={styles.name}>
                  Turnkey Cloud Voice Services - Productivity Everywhere
                </h5>
                <Fade direction="down">
                <p className={styles.details}>
                  Turnkey Kinetics Cloud Voice Services focuses on proving you
                  with efficient, cost-effective, and secure communication
                  solutions, backed by excellent customer service and the latest
                  technology innovations.
                </p>
                </Fade>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={VoiceServiceImg}
                alt="Turnkey Cloud Voice Services - Productivity Everywhere - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={`${styles.text_holder} ms-xl-4 ms-lg-2`}>
                {/* <h5 className={styles.name}>
                  Turnkey Cloud Voice Services - Productivity Everywhere
                </h5>
                <p className={styles.details}>
                  Lorem ipsum dolor sit amet consectetur. Orci vel feugiat magna
                  massa quis massa ornare etiam pellentesque. Massa massa nunc
                  nibh et interdum a. Interdum ultrices porttitor odio sed et a
                  condimentum quis arcu. Euismod dolor dignissim ut felis vitae
                  nulla fermentum sapien.
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
                      <strong> Cloud Telephony Solutions:</strong> Modern phone
                      services hosted on cloud platforms for businesses.
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
                        Unified Communications as a Service (UCaaS):
                      </strong>
                      Integrated communication services accessible through
                      cloud-based platforms.
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
                      <strong> Cloud Communications Providers:</strong>{" "}
                      Companies offering cloud-based solutions for streamlined
                      and flexible communications.
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
                      <strong> VoIP Service:</strong> Voice over Internet
                      Protocol for efficient and cost-effective communication.
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
                      <strong> Hardware Reduction:</strong> Minimizing reliance
                      on physical equipment for communication infrastructure.
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
                      <strong> Cost-Efficiency:</strong> Lowering communication
                      costs through cloud-based and VoIP services.
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
                      <strong> Simplified Implementation:</strong> Easy and
                      straightforward deployment of cloud-based communication
                      solutions.
                    </div>
                  </li>
                </ul>
                </Fade>
              </div>
            </div>
          </section>

          {/* <section className="row" id="pay_for_what_you_use">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={`${styles.text_holder} me-xl-4 me-lg-2`}>
                <h5 className={styles.name}>Pay for What you Use</h5>
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
                src={PayImg}
                alt="Pay for What you Use - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>
          </section> */}
        </div>
      </main>
      <Contact isBanner={false} />
    </>
  );
}
