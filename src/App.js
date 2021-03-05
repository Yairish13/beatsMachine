import React from "react";
import AllPads from "./components/AllPads";
import ControlRow from "./components/ControlRow";
import styled from "styled-components";
import { configure } from "mobx";
import { observer } from "mobx-react";
import { StoreContext } from "./StoreContext";
import { SiBeatsbydre } from "react-icons/si";
import Records from "./components/Records";

configure({
  useProxies: "always",
});

function App() {
  const store = React.useContext(StoreContext);
  return (
    <>
      <HeaderDiv>
        {" "}
        &#9839; &#9834; Yair's{" "}
        <SiBeatsbydre style={{ paddingbottom: "25px" }} />
        eats Machine &#9835; &#9833;
      </HeaderDiv>
      <AppDiv>
        <ControlRow />
        {store.isRecorded === "off" ? <Records /> : ""}
        <AllPads />
      </AppDiv>
    </>
  );
}

const AppDiv = styled.div`
  background: #F0E68C;
  height: 100vh;
  width: 100vw;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeaderDiv = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 45px;
  width: 100vw;
  background-color: #FFE4B5;
`;

export default observer(App);
