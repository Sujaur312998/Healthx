import Button from "@/components/button/Button";
import styles from "./hero.module.css";
import Image from "next/image";
import Content_Header from "../Content_header";
import {hero_doctor} from '@/lib/imageLink'

const Hero = () => {
  return (
    <div className={styles.main_box}>
      <div className={styles.container_box}>
        {/* 1st  section */}
        <div className={styles.container_box_item}>
          
          {/* 24/7 Emergency service */}
          <Content_Header content={"24/7 Emergency Service"} />

          {/* hero headline */}

          <div className={styles.care_box}>
            <p className={styles.care_for_health}>
              Caring for
              <span>
                {" "}
                Health
                <div className={styles.health_vector}></div>
              </span>
            </p>
            <p className={styles.care_for_you}>Caring for You</p>

            <p className={styles.statement}>
              A brief statement outlining the purpose and mission of the clinic.
              This can include the commitment to patient care, community health.
            </p>

            <div className={styles.btn_div}>
              <Button
                content="DISCOVER MORE"
                gradientColor={{ start: "#2CBEFF", end: "#00A4F400" }}
                width={{ width: "153px" }}
              />
              <Button
                content="SEE ALL SERVICES"
                gradientColor={{ start: "#004990", end: "#9ab5fa" }}
                width={{ width: "153px" }}
              />
            </div>
          </div>
        </div>
        {/* 2nd Section */}
        <div className={styles.container_box_item}>
          <Image src={hero_doctor} alt="doctorxbd" width={550} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
