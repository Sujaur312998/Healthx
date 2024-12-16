import styles from "./services.module.css";
import ServiceHeader from "./ServiceHeader";
import { servicesData } from "@/lib/servicesData";
import Image from "next/image";
import Button from "../button/Button";

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
                  <Button
                    content="READ MORE"
                    gradientColor={{ start: "#004990", end: "#9ab5fa" }}
                    // width={{ width: "90px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.service_container_second_item}>
          <div className={styles.service_horizontal_line}>
            <hr className={styles.hr_line}/>
            <div className={styles.more_service_box}>
              <span>You Get Our 20+ More services...</span>
              <span>Explore All Services</span>
            </div>
            <hr className={styles.hr_line}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
