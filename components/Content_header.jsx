import styles from './content.module.css'
import Icon from './Navbar/icon/Icon'

const Content_Header=({content, style })=>{
    return(
        <div className={styles.content_header} style={{ '--justify-content': style?.justifyContent }}>
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
            <span className={styles.logo_text}>{content}</span>
          </div>
    )
}

export default Content_Header