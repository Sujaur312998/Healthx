import styles from "./contact.module.css";
import FormField from "./FormField";
import Button from "../button/Button";

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_div}>
        <FormField
          label={"First Name"}
          placeholder={"First Name"}
          type={"text"}
        />
        <FormField
          label={"Last Name"}
          placeholder={"Last Name"}
          type={"text"}
        />
      </div>
      <div className={styles.form_div}>
        <FormField
          label={"Email"}
          placeholder={"you@company.com"}
          type={"email"}
        />
      </div>
      <div className={styles.form_div}>
        <FormField
          label={"Phone number"}
          placeholder={"(+880)000-0000"}
          type={"text"}
          selectbox={true}
        />
      </div>
      <div className={styles.form_div}>
        <FormField
          label={"Select Date"}
          placeholder={"December - 02 - 2022"}
          type={"date"}
        />
      </div>
      <div className={styles.textArea}>
        <FormField
          label={"Message"}
          placeholder={""}
          rows={5}
          type={"text-area"}
          textArea={true}
        />
      </div>
      <div className={styles.form_div}>
        <Button
          content="APPOINTMENT NOW"
          gradientColor={{ start: "#004990", end: "#9ab5fa" }}
          width={{ width: "153px" }}
        />
      </div>
    </form>
  );
};

export default Form;
