import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GiCambodia, GiMedicalPackAlt, GiPerson } from "react-icons/gi";

const MedicalDTL = ({ Data }) => {
  return (
    <div className="flex-box">
      <div className="flex-col hide">
        <p>Phone No</p>
        <p>Mail ID</p>
        <p>Affected Side</p>
        <p>Condition</p>
        <p>Speciality</p>
      </div>
      <div className="flex-col icon-bar">
        <span className="flex-box ">
          <BsTelephoneFill />
          {Data.Phone}
        </span>
        <span className="flex-box ">
          <AiOutlineMail />
          {Data.Mail}
        </span>
        <span className="flex-box ">
          <GiPerson /> {Data.Affected}
        </span>
        <span className="flex-box ">
          <GiCambodia />
          {Data.Condition}
        </span>
        <span className="flex-box ">
          <GiMedicalPackAlt />
          {Data.Speciality}
        </span>
      </div>
    </div>
  );
};

export default MedicalDTL;
