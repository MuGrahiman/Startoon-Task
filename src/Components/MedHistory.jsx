import React from "react";
import { LiaFileMedicalAltSolid } from "react-icons/lia";

const MedHistory = ({History}) => {
  return (
    <div className="grid-box">
      <div className="flex-box">
        <div className="flex-col ">
          <span className="flex-box ">
            <LiaFileMedicalAltSolid />
            <small>
              <b>Medical history</b>
            </small>
          </span>
        </div>
        <div className="flex-col ">
          <span className="flex-box ">
          {History.map(data=><p>{data},</p>)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MedHistory;
