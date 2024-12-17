import styles from "./hs.module.css";
import Hs_Content from "./Hs_content";
import Hs_Doctor from "./Hs_Doctor";

const Health_Services = () => {
  return (
    <div className={styles.health_services}>
      <div className={styles.hs_container}>
        {/* 1st section */}
        <Hs_Content />
        {/* 2nd Section */}
        <Hs_Doctor />
      </div>
    </div>
  );
};

export default Health_Services;
