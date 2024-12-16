import styles from "./navbar.module.css";
import Icon from "./icon/Icon";
import IconName from "./icon/IconName";
import { navbarItemData } from "@/lib/navbarItemData";
import { IoMdSearch } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import Button from "@/components/button/Button";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        {/* logo Section */}
        <div className={styles.navbar_items}>
          <Icon />
          <IconName />
        </div>
        {/* Nav Items */}
        <div className={styles.navbar_items}>
          {navbarItemData.map((item, index) => {
            return (
              <span className={styles.navbar_item_data} key={index}>
                {item.title}
              </span>
            );
          })}
        </div>

        <div className={styles.navbar_items}>
          <div className={styles.navbar_item_icon_border}>
            <IoMdSearch className={styles.navbar_item_icon} />
          </div>
          <div className={styles.navbar_item_icon_border}>
            <CgShoppingCart className={styles.navbar_item_icon} />
            <div className={styles.navbar_notification_box}>
              <span className={styles.navbar_notification_count}>5</span>
            </div>
          </div>
        </div>
        {/* icon section */}
        <div className={styles.navbar_items}>
            <Button content='Appointment now' gradientColor={{ start: "#004990", end: "#9ab5fa" }}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
