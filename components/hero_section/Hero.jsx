import Button from "@/components/button/Button";
import styles from "./hero.module.css";
import Image from "next/image";
import Content_Header from "../Content_header";

const Hero = () => {
  const heroImg = `https://s3-alpha-sig.figma.com/img/7804/e5f2/776e41d6b125a1ff07effac37d6ff11b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vt1w0Fz-Fo~Mzv8p8N5wmnTWNTfA-NXJhp7Mg5fzO-YRe~MnBU6Xeq6iN2qt3k4I~v4qJVoXxPsXUXk871OkN7v31osE~gHaQB9X54IxfJk70s569ncVy6NbwenxgDwzu6hmZQuo7lAZwosOhdZdoGanUdqAHbuR2H-dFAPQlCQfx3UcsgBYu2iJ6C8lDEY8WFORpO5Od-7kOAqAwNL0-CbIgYGFbhtFYxONYN3CjaFNGroIiJgUnlo-xxedV5rRMc-v7fk0ifnVKtT5c0u68ehiPZNJ6apYfF~eeFpXO34Ey0EHk5uPgClG1InvjMrNdu88CPxtM8puFFrnuSEkCQ__`;

  return (
    <div className={styles.main_box}>
      <div className={styles.container_box}>
        {/* 1st  section */}
        <div className={styles.container_box_item}>
          
          {/* 24/7 Emergency service */}
          <Content_Header content={"24/7 Emergency Service"} />

          {/* hero headline */}

          <div className={styles.care_box}>
            <p className={styles.care_for_health}>
              Caring for
              <span>
                {" "}
                Health
                <div className={styles.health_vector}></div>
              </span>
            </p>
            <p className={styles.care_for_you}>Caring for You</p>

            <p className={styles.statement}>
              A brief statement outlining the purpose and mission of the clinic.
              This can include the commitment to patient care, community health.
            </p>

            <div className={styles.btn_div}>
              <Button
                content="DISCOVER MORE"
                gradientColor={{ start: "#2CBEFF", end: "#00A4F400" }}
                width={{ width: "153px" }}
              />
              <Button
                content="SEE ALL SERVICES"
                gradientColor={{ start: "#004990", end: "#9ab5fa" }}
                width={{ width: "153px" }}
              />
            </div>
          </div>
        </div>
        {/* 2nd Section */}
        <div className={styles.container_box_item}>
          <Image src={heroImg} alt="doctorxbd" width={550} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
