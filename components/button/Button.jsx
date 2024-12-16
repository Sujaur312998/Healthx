import styles from "./button.module.css";

const Button = ({content,gradientColor }) => {
  return (
    <div
      className={styles.button_box}
      style={{
        background: `linear-gradient(to bottom, ${gradientColor?.start} 0%, ${gradientColor?.end} 100%)`,
      }}
    >
      <div className={styles.button_text}>{content}</div>
    </div>
  );
};

export default Button;
