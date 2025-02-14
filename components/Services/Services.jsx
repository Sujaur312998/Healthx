// 'use client';
import styles from "./services.module.css";
import ServiceHeader from "./ServiceHeader";
import { servicesData } from "@/lib/servicesData";
import Image from "next/image";
import Button from "../button/Button";
import Content_Breaker from "../Content_breaker";

const Services = () => {
  return (
    <div className={styles.service_main}>
      <div className={styles.service_container}>
        {/* First Section */}
        <div className={styles.service_container_first_item}>
          <ServiceHeader />
          <div className={styles.services_items}>
            {servicesData.map((item, index) => {
              return (
                <div key={index} className={styles.service_card}>
                  <div className={styles.service_image_box}>
                    <Image
                      src={item.src}
                      alt={item.serviceName}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.service_name}>{item.serviceName}</div>
                  <div className={styles.service_doctors}>30+ Doctors</div>
                  <div className={styles.service_btn}>
                    <Button
                      content="READ MORE"
                      gradientColor={{ start: "#004990", end: "#9ab5fa" }}
                      width={{ width: "90px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.service_container_second_item}>
        <Content_Breaker content={"You Get Our 20+ More services..."} />
      </div>
    </div>
  );
};

export default Services;
