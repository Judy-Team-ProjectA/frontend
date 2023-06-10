import { UserInfoDetail } from "./userInfoDetail";

export type User = {
  userId: string;
  userUuid: string;
  userAge: string;
  userName: string;
  userPhoto: string;
  userAddress: string;
  userSbd: string;
  userDetailInfo: UserInfoDetail[];
};

export type UserX = {
  userId: string;
  userUuid: string;
  userPhoto: string;
  status: string;
};

// "userId":"",
// "userUuid": "",
// "userName":"",
// "userAge":"",
// "userPhoto":"",
// "userAddress":"",
// "userSbd": "",
// "userDetailInfo": [ "userGym":"", "Monday": "~", ~일주일간의 운동 정보 ]
