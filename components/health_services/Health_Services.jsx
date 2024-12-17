import styles from "./hs.module.css";
import HS_Content from "./Hs_content";

const Health_Services = () => {
  return (
    <div className={styles.health_services}>
      <div className={styles.hs_container}>
        {/* 1st section */}
        <HS_Content />
        {/* 2nd Section */}
      </div>
    </div>
  );
};

export default Health_Services;
