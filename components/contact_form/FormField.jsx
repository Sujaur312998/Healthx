import styles from "./contact.module.css";
import { countrycode } from "@/lib/country code";

const FormField = ({ label, placeholder, type, rows, selectbox, textArea }) => {

  return (
    <div className={styles.FormField}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.inputbox}>
        {selectbox ? (
          <select>
            <option hidden value="">Select</option>
            {
                countrycode.map((item,index)=>{
                    return <option key={index} value={item.code}>{item.code}</option>
                })
            }
          </select>
        ) : null}

        {!textArea ? (
          <input id={label} placeholder={placeholder} type={type} rows={rows} />
        ) : (
          <textarea id={label} rows={rows} type={type} />
        )}
      </div>
    </div>
  );
};

export default FormField;
