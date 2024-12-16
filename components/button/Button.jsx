import styles from "./button.module.css";
import { IoMdSearch } from "react-icons/io";

const Button = ({ content, gradientColor, width, searchIcon }) => {
  return (
    <div
      className={styles.button_box}
      style={{
        background: `linear-gradient(to bottom, ${gradientColor?.start} 0%, ${gradientColor?.end} 100%)`,
      }}
    >
      <div className={styles.button_text} style={{width:width?.width}}>
        {searchIcon ? <IoMdSearch className={styles.searchIcon} /> : null}
        {content}
      </div>
    </div>
  );
};

export default Button;
