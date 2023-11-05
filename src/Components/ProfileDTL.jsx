import React from "react";
import usericon from "../Assets/account_3033143.png";
const ProfileDTL = ({ Data }) => {
  return (
    <div className="flex-box">
      <div>
        <p>
          {Data.name},
          {(Data.gender === "female" && "F") || (Data.gender === "male" && "M")}
          /{Data.age}
        </p>
        <p>patient ID:{Data.id}</p>
      </div>
      <div>
        <img src={usericon} alt="usericon" width={"50px"} />
      </div>
    </div>
  );
};

export default ProfileDTL;
