import styles from "./styles.module.css";
import { services } from "@/mock-data";
import { TButton } from "..";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Contact: React.FC<IProps> = ({ isBanner = true }) => {
  const router = useRouter();
  const [btnText, setBtnText] = React.useState<string>("Send");
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit = (event: any) => {
    setBtnText("Loading...");
    event.preventDefault();

    if (formRef && formRef.current) {
      const formData = new FormData(formRef.current);

      // Perform any additional actions or submit the form data to your server
      fetch(`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ID}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          const res = response.json();

          console.log(res);
        })
        .then((data) => {
          // Handle the response from the server

          setBtnText("Success, We'll reply you shortly");
          formRef.current?.reset();

          // console.log("Form submitted successfully:", data);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        })
        .finally(() => {
          setTimeout(() => {
            setBtnText("Send");
          }, 5000);
        });
    }
  };

  return (
    <section className={styles.contact_section} id="contact_section">
      <div className="container">
        {isBanner && (
          <div className={styles.banner}>
            <div className={styles.text_holder}>
              <h3 className={styles.title}>Turnkey</h3>
              <p className={styles.details}>Do you need help with coms</p>
              {/* <p className={styles.details}>Are you in the market for staff</p>
            <p className={styles.details}>Would you want to be cybersafe</p> */}
            </div>
            <div className={styles.banner_img}></div>
          </div>
        )}

        <div className={styles.contact_form_section}>
          <div className={styles.title}>Contact us</div>

          <div className="row">
            <div className="col-lg-6">
              <form
                ref={formRef}
                className={styles.form_section}
                action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ID}`}
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: "none" }} />

                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value={"false"} />

                {/* Redirect after submission */}
                {/* <input
                  type="hidden"
                  name="_next"
                  value={`${currentDomain}${router.asPath}`}
                /> */}

                <h4 className={styles.details}>Send us a message</h4>
                <div className="mb-4">
                  <label className={styles.label}>Select service* </label>
                  <select className="form-control" name="service" required>
                    {services.map((service, id) => (
                      <option key={id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className={styles.label}>Your name* </label>
                  <input
                    className="form-control"
                    placeholder="Enter First and last name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={styles.label}>Your email* </label>
                  <input
                    className="form-control"
                    placeholder="Enter email address"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={styles.label}>Your message* </label>
                  <textarea
                    className="form-control"
                    placeholder="Hello Turnkey"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className={`form-check ${styles.form_check}`}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">
                    I agree that my personal information will be processed in
                    accordance with the privacy policay
                  </label>
                </div>

                <TButton text={btnText} type="submit" />
              </form>
            </div>

            <div className="col-lg-6">
              <iframe
                className="address_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.0444318735213!2d-97.0621687!3d49.8228301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea77c712ee4f29%3A0x41e65e0133bd7e24!2s1515%20Warde%20Ave%2C%20Winnipeg%2C%20MB%20R3X%202H5%2C%20Canada!5e0!3m2!1sen!2sng!4v1699007641630!5m2!1sen!2sng"
                width={550}
                height={400}
                style={{
                  border: "0",
                  borderRadius: "20px",
                  width: "100% !important",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className={`${styles.info_container} mt-4 mb-5`}>
                <h6 className={styles.name}>Find us at</h6>
                <address className={styles.value}>
                  Winnipeg Office <br />
                  1515, Warde Avenue,
                  <br />
                  Winnipeg, Canada
                </address>
              </div>

              <div className={styles.info_container}>
                <h6 className={styles.name}>Company Info</h6>
                <Link className={styles.value} href="tel:+12049523913">
                  tel. +1 204 952 3913
                </Link>
                <br />
                <Link
                  href="https://www.turnkeyunified.com"
                  className={styles.value}
                >
                  www.turnkeyunified.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface IProps {
  isBanner?: boolean;
}
