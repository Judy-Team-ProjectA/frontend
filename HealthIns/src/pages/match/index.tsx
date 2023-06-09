import Footer from "@/components/footer";
import styles from "./styles.module.scss";
import dislike from "@/assets/dislikeIcon.png";
import like from "@/assets/likeIcon.png";
import locationIcon from "@/assets/locationIcon.png";
import filterIcon from "@/assets/filter.png";
export default function Matching() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <img src={locationIcon} alt="" />
          <span>GangaNam , Korea </span>
          <img src={filterIcon} alt="" />
        </div>
        <div className={styles.matchCard}></div>
        <div className={styles.btnContainer}>
          <button>
            <img src={dislike} alt="" />
          </button>
          <button>
            <img src={like} alt="" />
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}
