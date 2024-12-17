import styles from "./content.module.css";

const Content_Breaker = ({ content }) => {
  return (
    <div className={styles.service_horizontal_line}>
      <hr className={styles.hr_line} />
      <div className={styles.more_service_box}>
        <p>
          {content} <span>EXPLORE ALL SERVICES</span>
        </p>
      </div>
      <hr className={styles.hr_line} />
    </div>
  );
};

export default Content_Breaker;
