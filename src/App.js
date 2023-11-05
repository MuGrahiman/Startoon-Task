import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ProfileDTL from "./Components/ProfileDTL";
import ApexChart from "./Components/ApexChart";
import MedicalDTL from "./Components/MedicalDTL";
import MedHistory from "./Components/MedHistory";
const App = () => {
  const userData = {
    id: 8720200727153457,
    name: "S.Mena",
    gender: "female",
    age: 23,
  };
  const mediData = {
    Phone: 8022334455,
    Mail: "meenarabinsachi2@gmail.com",
    Affected: "Billeteral",
    Condition: "Ortho",
    Speciality: "Ostheoastritis",
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="grid-box">
          <div className="grid-box">
            <ProfileDTL Data={userData} />
            <ApexChart />
          </div>
          <div>
            <MedicalDTL Data={mediData} />
          </div>
        </div>
        <MedHistory History={["Hypertention", "DM", "Hypothyrodism"]} />
      </div>
    </div>
  );
};

export default App;
