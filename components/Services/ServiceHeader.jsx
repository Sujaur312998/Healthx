import styles from "./services.module.css";
import Icon from "../Navbar/icon/Icon";

const ServiceHeader=()=>{
    return(
        <div className={styles.Service_header}>
            {/* header one */}
            <div className={styles.service_logo}>
              <Icon
                topLeft={{
                  width: "10.73px",
                  height: "10.72px",
                  top: "2.77px",
                  right: "1.8px",
                }}
                topRight={{
                  width: "16.4px",
                  height: "16.39px",
                  bottom: "1px",
                  left: "-1px",
                }}
                bottomLeft={{
                  width: "10.73px",
                  height: "11.35px",
                  right: "4.56px",
                }}
                bottomRight={{
                  width: "10.73px",
                  height: "11.35px",
                  right: "4.41px",
                }}
              />
              <span>OUR SERVICES </span>
            </div>
            {/* header two */}
            <div className={styles.service_moto}>
              <p>Our Mediax specialties <br /> service</p>
            </div>
          </div>
    )
}

export default ServiceHeader