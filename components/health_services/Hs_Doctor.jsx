import Image from "next/image";
import styles from "./hs.module.css";
import { hs_doctor } from "@/lib/imageLink";
import PlusSvgComponent from '@/lib/svg/Plus_svg'

const Hs_Doctor = () => {
  return (
    <div className={styles.hs_second_item}>
      <div className={styles.dc_frame}>
        <div className={styles.plus_container}>
          <Image
            src={hs_doctor}
            alt="hs_doctor"
            width={623}
            height={800}
            className={styles.image}
          />
        </div>
        <div className={styles.plus_box}>
          <PlusSvgComponent  className={styles.plus_svg}/>
          <div className={styles.round_content}>
            <div className={styles.horizontal_bar}></div>
            <div className={styles.vertical_bar}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hs_Doctor;

{
  /*  */
}
