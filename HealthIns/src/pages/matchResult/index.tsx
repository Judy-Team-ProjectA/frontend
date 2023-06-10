import ResultCard from "@/components/resultCard";
import { User, UserX } from "@/types/user";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
export default function MatchResult() {
  const [userList, setUserlist] = useState<UserX[]>([]);
  //const [user, setUser] = useState<UserX>();
  useEffect(() => {
    axios.get("/users/a/likes").then((res) => {
      setUserlist(res.data);
      console.log(res);
    });
  }, []);
  console.log(userList);
  return (
    <div className={styles.container}>
      {userList.map((data, index) => {
        if (userList[index].status === "pending") {
          return (
            <ResultCard
              userId={userList[index].userId}
              userUuid={userList[index].userUuid}
              userPhoto={userList[index].userPhoto}
              status={userList[index].status}
            />
          );
        }
      })}
      <div className={styles.line}></div>
      {userList.map((data, index) => {
        if (userList[index].status === "approved") {
          return (
            <ResultCard
              userId={userList[index].userId}
              userUuid={userList[index].userUuid}
              userPhoto={userList[index].userPhoto}
              status={userList[index].status}
            />
          );
        }
      })}
    </div>
  );
}
