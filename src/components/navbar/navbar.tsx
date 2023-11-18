import styles from "./styles.module.css";
import { DropDownIcon } from "@/assets/svg";
import { TButton } from "..";
import Image from "next/image";
import TurkeyLogo from "../../assets/logo-turnkey.png";
import Link from "next/link";
import { services } from "@/mock-data";
import { IService, ISubService } from "@/mock-data/model";
import React from "react";
import { MenuIcon, CloseMenuIcon } from "@/assets/svg";
import { useRouter } from "next/router";

export const NavBar = () => {
  const tabletBreakpoint: number = 992;
  const router = useRouter();
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const menuLists = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/#about_section",
    },
  ];

  const handleShowSubService = (index: number) => setHoveredIndex(index);

  const handleHideSubService = (index: number) => {
    if (index === hoveredIndex) setHoveredIndex(null);
    else handleShowSubService(index);
  };

  const handleMenuToggle = () => setShowMenu(!showMenu);

  const closeMenu = () => handleMenuToggle();

  const goToContact = () => router.push(`${router.pathname}#contact_section`);

  const renderMainMenu = (is_btn: boolean = true) => {
    return (
      <ul className={styles.menu_group}>
        {menuLists.map((menu: any, id: number) => (
          <li className={styles.menu_list} key={id}>
            <Link
              className={router.asPath === menu.link ? styles.active_link : ""}
              href={menu.link}
              onClick={closeMenu}
            >
              {menu.name}
            </Link>
          </li>
        ))}

        {is_btn && <TButton click={goToContact} size="sm" text="Contact us" />}
      </ul>
    );
  };

  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <div className="container">
          <div className={styles.nav_container}>
            <Link href={"/"} className={styles.logo}>
              <Image src={TurkeyLogo} alt="Turnkey logo" width={"240"} />
            </Link>

            <div
              onClick={handleMenuToggle}
              className={`d-inline-block d-lg-none ms-auto 
              ${showMenu ? styles.show_menu : styles.hide_menu} 
              ${styles.menu_icon_container}`}
            >
              {showMenu ? (
                <div className={styles.close_menu_icon}>
                  <CloseMenuIcon />
                </div>
              ) : (
                <div className={styles.menu_icon}>
                  <MenuIcon />
                </div>
              )}
            </div>

            <div className="d-none d-lg-block ms-lg-auto">
              {renderMainMenu()}
            </div>
          </div>

          <div
            className={`${
              showMenu ? styles.show_mob_menu : styles.hide_mob_menu
            }  ${styles.mobile_nav_holder}`}
          >
            <div className="d-block d-lg-none"> {renderMainMenu(false)}</div>
            <ul className={styles.services_nav}>
              {services.map((service: IService, index: number) => (
                <li
                  key={index}
                  className={`${styles.list} ${
                    hoveredIndex === index ? styles.show : styles.hide
                  }`}
                  onMouseEnter={() => {
                    if (window.innerWidth >= tabletBreakpoint) {
                      handleShowSubService(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= tabletBreakpoint) {
                      handleHideSubService(index);
                    }
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <Link
                      href={service.link}
                      onClick={closeMenu}
                      className={
                        router.pathname === service.link
                          ? styles.active_link
                          : ""
                      }
                    >
                      {service?.title}
                    </Link>
                    <div
                      className={styles.dropdown_icon_holder}
                      onClick={() => {
                        if (window.innerWidth < tabletBreakpoint) {
                          if (typeof hoveredIndex !== "number") {
                            handleShowSubService(index);
                          } else {
                            console.log("got here");
                            handleHideSubService(index);
                          }
                        }
                      }}
                    >
                      <DropDownIcon />
                    </div>
                  </div>

                  <ul className={styles.sub_service_group}>
                    {service.sub_services.map(
                      (sub_service: ISubService, id: number) => (
                        <li key={id}>
                          <Link
                            href={`${service.link}#${sub_service.link}`}
                            className={
                              router.asPath ===
                              `${service.link}#${sub_service.link}`
                                ? styles.active_sub_service_link
                                : ""
                            }
                          >
                            {sub_service.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ))}
            </ul>
            <div className={`${styles.btn_holder} d-lg-none`}>
              <TButton
                click={() => {
                  goToContact();
                  closeMenu();
                }}
                fullWidth
                size="sm"
                text="Contact us"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
