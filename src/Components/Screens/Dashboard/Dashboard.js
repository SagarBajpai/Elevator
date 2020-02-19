import React from "react";
import "./Dashboard.scss";
import liftData from "../../Assets/Data/Lift";
import Button from "../../Utils/Button/Button";
import Lift from "../../Utils/Lift/Lift";
import Container from "../../Utils/Container/Container";

function getLiftData() {
  return liftData.map(lift => {
    return <Button key={lift.name} name={lift.name} value={lift.name} />;
  });
}

function getContainer() {
  return liftData.map((container, index) => {
    return <Container key={index} />;
  });
}

const Dashboard = () => {
  const setLiftBtns = getLiftData();
  const setContainer = getContainer();
  return (
    <div className="flex">
      <div className="main-space">
        <div className="btn-holder">
          <div>{setLiftBtns}</div>
        </div>
        <div className="ctn-holder">
          {setContainer}
          <Lift />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
