import Styles from "./icon.module.css";

const Icon = () => {
  return (
    <div className={Styles.icon_box}>
      <div className={Styles.icon_box_first_half}>
        <div className={Styles.icon_box_top_left}></div>
        <div className={Styles.icon_box_top_right}></div>
      </div>
      <div className={Styles.icon_box_second_half}>
        <div className={Styles.icon_box_bottom_left}></div>
        <div className={Styles.icon_box_bottom_right}></div>
      </div>
    </div>
  );
};

export default Icon;
