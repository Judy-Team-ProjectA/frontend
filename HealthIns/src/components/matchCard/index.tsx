import { User } from "@/types/user";
import styles from "./styles.module.scss";

export default function MatchCard({
  userId,
  userUuid,
  userName,
  userAge,
  userPhoto,
  userAddress,
  userSbd,
}: User) {
  //  console.log(name);
  return (
    <>
      <div className={styles.container}>
        <img className={styles.profile} src={userPhoto} alt="" />
        <div className={styles.textContainer}>
          <div>{userName}</div>
          <div>{userAge}</div>
          <div>{userAddress}</div>
          <div>{userSbd}</div>
        </div>
      </div>
    </>
  );
}

// userId: "2",
//     userUuid: "b",
//     userName: "Jack",
//     userAge: "12",
//     userPhoto: "a",
//     userAddress: "a",
//     userSbd: "23",
//     userDetailInfo: [
//       {
//         userGym: "Hello Gym",
//         Monday: "Arm",
//         Tuesday: "Arm",
//         Wednesday: "Arm",
//         Thursday: "Arm",
//         Friday: "Arm",
//         Saturday: "Arm",
//         Sunday: "Arm",
//       },
//     ],
