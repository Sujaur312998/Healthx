'use client';
import styles from "./contact.module.css";
import Content_Header from "../Content_header";
import { contact_us } from "@/lib/imageLink";
import Image from "next/image";
import Form from "./Form";

const Contact = () => {
  return (
    <div className={styles.contact_section}>
      <div className={styles.contact_container}>
        <Content_Header
          content={"CONTRACT US"}
          style={{ justifyContent: "center" }}
        />
        {/* moto */}
        <div className={styles.contact_moto}>
          <h3>
            Get A Quote <span>Today</span>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        {/* form */}
        <div className={styles.contact_form}>
          <div className={styles.contact_img}>
            <div className={styles.img_background}>
              <Image
                src={contact_us}
                alt="contact_doctor"
                width={543}
                height={700}
              />
            </div>
          </div>
            <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
