import Styles from "./icon.module.css";

const Icon = ({ topLeft, topRight, bottomLeft, bottomRight }) => {
  return (
    <div className={Styles.icon_box}>
      <div className={Styles.icon_box_first_half}>
        <div
          className={Styles.icon_box_top_left}
          style={{ width: topLeft?.width, height: topLeft?.height, top:topLeft?.top, right:topLeft?.right }}
        ></div>
        <div
          className={Styles.icon_box_top_right}
          style={{ width: topRight?.width, height: topRight?.height, bottom:topRight?.bottom, left:topRight?.left }}
        ></div>
      </div>
      <div className={Styles.icon_box_second_half}>
        <div
          className={Styles.icon_box_bottom_left}
          style={{ width: bottomLeft?.width, height: bottomLeft?.height, right: bottomLeft?.right }}
        ></div>
        <div
          className={Styles.icon_box_bottom_right}
          style={{ width: bottomRight?.width, height: bottomRight?.height, right:bottomRight?.right }}
        ></div>
      </div>
    </div>
  );
};

export default Icon;
