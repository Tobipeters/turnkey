import styles from "./styles.module.css";
import { DropDownIcon } from "@/assets/svg";
import { TButton } from "..";
import Image from "next/image";
import TurkeyLogo from "../../assets/logo-turnkey.png";
import Link from "next/link";
import { services } from "@/mock-data";
import { IService, ISubService } from "@/mock-data/model";
import React from "react";

export const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const menuLists = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about-us",
    },
  ];

  return (
    <nav className={"container"}>
      <div className={styles.nav_container}>
        <Link href={"/"} className={styles.logo}>
          <Image src={TurkeyLogo} alt="Turnkey logo" width={"240"} />
        </Link>
        
        <ul className={styles.menu_group}>
          {menuLists.map((menu: any, id: number) => (
            <li className={styles.menu_list} key={id}>
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          ))}
          <TButton size="sm" text="Contact us" />
        </ul>
      </div>

      <ul className={styles.services_nav}>
        {services.map((service: IService, index: number) => (
          <li
            key={index}
            className={`${styles.list} ${
              hoveredIndex === index ? styles.show : styles.hide
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              className="d-flex align-items-center gap-2"
              href={service.link}
            >
              {service?.title} <DropDownIcon />
            </Link>
            <ul className={styles.sub_service_group}>
              {service.sub_services.map((sub_service: ISubService, id: number) => (
                <li key={id}>
                  <Link href={sub_service.link}>{sub_service.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
