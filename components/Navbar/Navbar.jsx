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
        <div className={styles.navbar_log_item}>
          <Icon
            topLeft={{ width: "17.01px", height: "17px", top: "5.48px" }}
            topRight={{width: "26.02px", height: "28px", bottom: "2px", left: "2px"}}
            bottomLeft={{ width: "17.01px", height: "18px", right: "4.5px" }}
            bottomRight={{ width: "17.01px", height: "18px", right: "4.5px" }}
          />
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

          <div className={styles.navbar_btn_items}>
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
            <Button
              content="APPOINTMENT NOW"
              gradientColor={{ start: "#004990", end: "#9ab5fa" }}
              width={{width:'153px'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
