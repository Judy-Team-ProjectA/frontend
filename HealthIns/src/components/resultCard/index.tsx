import { UserX } from "@/types/user";
import styles from "./styles.module.scss";
import optionIcon from "@/assets/option.svg";
import checkIcon from "@/assets/check.svg";
import xIcon from "@/assets/disapprove.svg";
export default function ResultCard({
  userId,
  userUuid,
  userPhoto,
  status,
}: UserX) {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.profile} src={userPhoto} alt="" />
        <div className={`${styles.text} flex flex-col gap-3`}>
          <div className="flex flex-row gap-5">
            <div>{userId}</div>
          </div>
          <div>{status}</div>
        </div>
        {status === "pending" ? (
          <div className={styles.btnContainer}>
            <button>
              <img className={styles.icon} src={checkIcon}></img>
            </button>
            <button>
              <img className={styles.icon} src={xIcon} alt="" />
            </button>
          </div>
        ) : status === "approved" ? (
          <div className={styles.btnContainer}>
            <button>
              <img className={styles.icon} src={optionIcon}></img>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
