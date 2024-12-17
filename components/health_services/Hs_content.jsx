import styles from "./hs.module.css";
import Content_Header from "../Content_header";
import { DM_Sans } from "next/font/google";
import { hs_points } from "@/lib/hs_point";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

const HS_Content = () => {
  return (
    <div className={styles.hs_first_item}>
      {/* Logo and Moto */}
      <div className={styles.hs_logo_moto}>
        <Content_Header content={"WHY CHOOSE US"} />
        <p className={styles.hs_moto}>
          We Remain continuously <br />
          Available For Your Health <br />
          Services
        </p>
      </div>
      {/* Contenet */}
      {hs_points.map((item, index) => {
        return (
          <div key={index} className={styles.hs_points}>
            <div className={styles.hs_points_serial}>
              <span className={dmSans.className}>{item.serial}</span>
            </div>
            <div className={styles.hs_points_details}>
              <div className={styles.hs_title}>{item.title}</div>

              <p className={styles.hs_body}> {item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default HS_Content;
