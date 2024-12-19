// 'use client';
import styles from "./doctor.module.css";
import Content_Header from "../Content_header";
import DoctorDetails from "./DoctorDetails";
import Content_Breaker from "../Content_breaker";

const Doctors = () => {
  return (
    <div className={styles.doctor_section}>
      <div className={styles.doctor_container}>
        <Content_Header
          content={"OUR DOCTORS"}
          style={{ justifyContent: "center" }}
        />
        <div className={styles.content}>
          <h3>our special doctors</h3>
          <p>
            Our team of specialists is at the forefront of medical innovation.
            Each specialist brings a unique blend of expertise, empathy, and
            experience to ensure that your health is in the best hands:
          </p>
        </div>
        <DoctorDetails />
      </div>
      <div className={styles.doctor_second_container}>
        <Content_Breaker content={"You Get Our 100+ More Doctor... "} />
      </div>
    </div>
  );
};

export default Doctors;
