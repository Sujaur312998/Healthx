import styles from "./hs.module.css";
import Content_Header from "../Content_header";

const Health_Services = () => {
  return (
    <div className={styles.health_services}>
      <div className={styles.hs_container}>
        {/* 1st section */}
        <div className={styles.hs_first_item}>
          <Content_Header content={'WHY CHOOSE US'}/>
        </div>

        {/* 2nd section */}
        <div className={styles.hs_second_item}></div>
      </div>
    </div>
  );
};

export default Health_Services;
