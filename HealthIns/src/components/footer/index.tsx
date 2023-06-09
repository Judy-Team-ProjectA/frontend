import styles from "./styles.module.scss";
import dashBoardIcon from "@/assets/gym.png";
import calendarIcon from "@/assets/Schedule.png";
import groupIcon from "@/assets/Group.png";
import listIcon from "@/assets/Vector.png";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <img src={dashBoardIcon} alt="" />
          <div>Dashboard</div>
        </div>
        <div className={styles.item}>
          <picture>
            <img src={listIcon} alt="" />
          </picture>
          <div>Client list</div>
        </div>
        <div className={styles.item}>
          <picture>
            <img src={calendarIcon} alt="" />
          </picture>
          <div>Schedule</div>
        </div>
        <div className={styles.item}>
          <picture>
            <img src={groupIcon} alt="" />
          </picture>
          <div>Profile</div>
        </div>
      </div>
    </>
  );
}
