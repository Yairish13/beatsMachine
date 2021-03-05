import React from "react";
import AllPads from "./components/AllPads";
import ControlRow from "./components/ControlRow";
import styled from "styled-components";
import { configure } from "mobx";
import { observer } from "mobx-react";
import { StoreContext } from "./StoreContext";
import { SiBeatsbydre } from "react-icons/si";
import Records from "./components/Records";
import background from './background.jpg'

configure({
  useProxies: "always",
});

function App() {
  const store = React.useContext(StoreContext);
  return (
    <WholeAppDiv>
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
    </WholeAppDiv>
  );
}

const AppDiv = styled.div`
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
const WholeAppDiv = styled.div`
  background-image: url(${background});
  background-size: cover; /* Resize the background image to cover the entire container */
`

const HeaderDiv = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 45px;
  width: 100vw;
  color: white;
`;

export default observer(App);
