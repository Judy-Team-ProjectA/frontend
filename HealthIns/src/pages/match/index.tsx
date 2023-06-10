import Footer from "@/components/footer";
import styles from "./styles.module.scss";
import dislike from "@/assets/dislikeIcon.png";
import like from "@/assets/likeIcon.png";
import locationIcon from "@/assets/locationIcon.png";
import filterIcon from "@/assets/filter.png";
import MatchCard from "@/components/matchCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/types/user";
import { useNavigate } from "react-router-dom";

export default function Matching() {
  const [List, setList] = useState<User[]>([]);
  const [mate, setMate] = useState<User>();
  const [index, setIndex] = useState(0);
  const navigator = useNavigate();
  const goList = async () => {
    navigator("/matchResult");
  };

  useEffect(() => {
    axios
      .get("/users/matchings")
      .then((res: any) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Next() {
    setIndex((prev) => prev + 1);
  }
  function LikeClick() {
    axios.post("/users/" + mate?.userUuid + "/likes/").then((res) => {
      console.log(res);
      Next();
      setMate(List[index]);
    });
  }
  function DisLikeClick() {
    Next();
    setMate(List[index]);
  }
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <img className={styles.locationIcon} src={locationIcon} alt="" />
        <span>GangaNam , Korea </span>
        <div className={styles.filter}>
          <img className={styles.filterIcon} src={filterIcon} alt="" />
        </div>
      </div>

      {/* {List.map((item) => {
        return (
          <div>
            <MatchCard name={item.name} age={item.age} pic={item.pic} />
          </div>
        );
      })} */}
      <MatchCard
        userName={mate?.userName as string}
        userAge={mate?.userAge as string}
        userPhoto={mate?.userPhoto as string}
        userAddress={mate?.userAddress as string}
        userSbd={mate?.userSbd as string}
        userId={mate?.userId as string}
        userUuid={mate?.userUuid as string}
        userDetailInfo={[]}
      />

      <div className={styles.btnContainer}>
        <button>
          <img src={dislike} alt="" onClick={DisLikeClick} />
        </button>
        <button>
          <img src={like} alt="" onClick={LikeClick} />
        </button>
      </div>
      <Footer />
    </div>
  );
}
