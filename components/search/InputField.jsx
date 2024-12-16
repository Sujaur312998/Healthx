import { IoMdSearch } from "react-icons/io";
import styles from "./search.module.css";
import { GoLocation } from "react-icons/go";

const InputField = ({ placeholder, location }) => {
  return (
    <div className={styles.input_container}>
      
      {location ? <GoLocation className={styles.searchIcon} /> : <IoMdSearch className={styles.searchIcon} />}
      <input type="text" className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
