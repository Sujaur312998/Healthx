import styles from "./footer.module.css";
import Content_Header from "../Content_header";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { footerData } from "@/lib/footer_data";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <div className={styles.footer_section}>
      <div className={styles.footer_container}>
        {/* Footer Content */}
        <div className={styles.footer_content}>
          {/* Contact detais */}
          <div className={styles.contact_box}>
            <Content_Header
              content={"Health"}
              style={{
                color: "white", 
                fontWeight: "800", 
                fontSize: "27.48px",
              }}
            />
            <div className={styles.contact_details}>
              <p>Sahibabad, Ghaziabad, Uttar Pradesh </p>
              <p>201005</p>
              <p>+1-887*****78787</p>
              <p>info@demohelp.com</p>
            </div>

            <div className={styles.icons}>
              <div className={styles.icon_box}>
                <FaFacebookF className={styles.icon_color} />
              </div>
              <div className={styles.icon_box}>
                <IoLogoTwitter className={styles.icon_color} />
              </div>
              <div className={styles.icon_box}>
                <FaYoutube className={styles.icon_color} />
              </div>
              <div className={styles.icon_box}>
                <FaPinterest className={styles.icon_color} />
              </div>
            </div>
          </div>
          {/* Quick Access */}

          <div className={styles.quick_access}>
            {footerData.map((item, index) => {
              return <div key={index} className={styles.quick_access_box}>
                <h3>{item.content}</h3>
                <div>
                  {
                    item.items.map((item,index)=>{
                      return(
                        <div key={index} className={roboto.className}>
                          <span className={styles.gt_icon}> &gt; &nbsp; &nbsp; </span>
                          <span  className={styles.gt_item}> {item.item} </span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>;
            })}
          </div>
        </div>
        {/* Footer Copyright */}
        <div className={styles.footer_copyright}>
          Copyright &copy; 2024 Health.com. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
