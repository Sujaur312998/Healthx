import styles from "./doctor.module.css";
import { doctorList } from "@/lib/doctorList";
import Image from "next/image";

const DoctorDetails = () => {
  return (
    <div className={styles.doctor_details_container}>
      {doctorList.map((item, index) => {
        return (
          <div className={styles.doctor_details_box} key={index}>
            <div className={styles.doctor_img_box}>
              <Image
                src={item.avatar}
                alt={item.doctorName}
                width={311.25}
                height={359.88}
              />
            </div>
            {/* Doctor Name */}
            <h3>{item.doctorName}</h3>

            {/* Specialist box */}
            <div className={styles.specialist_box}>
              <div className={styles.specialist}>{item.specialist}</div>
              <div className={styles.rating}>
                &#11088;
                <span>{item.rating}</span>
                &nbsp;
                <span>({item.rateCount})</span>
              </div>
            </div>

            {/* Patient & Hospital name */}

            <div className={styles.patient}>{item.patients} Patients</div>
            <div className={styles.hospital}>{item.hospital}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorDetails;
