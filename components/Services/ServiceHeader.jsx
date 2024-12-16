import styles from "./services.module.css";
import Content_Header from "../Content_header";

const ServiceHeader=()=>{
    return(
        <div className={styles.Service_header}>
            {/* header one */}
            <Content_Header content={'OUR SERVICES'} style={{ justifyContent: "center" }}/>
            {/* header two */}
            <div className={styles.service_moto}>
              <p>Our Mediax specialties <br /> service</p>
            </div>
          </div>
    )
}

export default ServiceHeader