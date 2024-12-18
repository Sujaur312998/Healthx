'use client';
import styles from "./search.module.css";
import Button from "../button/Button";
import InputField from "./InputField";

const SearchBar = () => {
  return (
    <div className={styles.search_section}>
      <div className={styles.search_bar}>
        <form >
            <InputField placeholder={'Ex. Doctor, Hospital'}/>
            <InputField placeholder={'Ex. Surgeon, Cardiologist'}/>
            <InputField placeholder={'Set your location'} location={true}/>
            <Button
              content="Search"
              gradientColor={{ start: "#004990", end: "#9ab5fa" }}
              searchIcon={true}
              width={{width:'90px'}}
            />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
