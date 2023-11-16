import styles from "./styles/service.module.css";
import { Contact } from "@/components";
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

          <section className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>IT Advisory and Consulting</h5>
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
                src={ITAdvisoryImg}
                alt="IT Advisory and Consulting - Turnkey"
              />
            </div>
          </section>

          <section className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={TechnicalSupportImg}
                alt="Proactive Technical  Support - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>Proactive Technical Support</h5>
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
                <h5 className={styles.name}>Network Design and Management</h5>
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
                src={NetworkDesignImg}
                alt="Network Design and Management - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>
          </section>

          <section className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <Image
                src={ITStaffImg}
                alt="IT Staff Augmentation - Turnkey"
                className={`img-fluid ${styles.section_img}`}
              />
            </div>

            <div className="col-lg-6">
              <div className={styles.text_holder}>
                <h5 className={styles.name}>IT Staff Augmentation</h5>
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
                <h5 className={styles.name}>IT Project Management</h5>
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
