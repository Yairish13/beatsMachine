import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { StoreContext } from "../StoreContext";
import { useObserver } from "mobx-react";

function OnePad({ beat }) {
  const [clicked, setClicked] = useState("off");
  const store = React.useContext(StoreContext);
  const selectedBeat = useRef(null);
  const icon = beat.icon;

  //Handling the click on each pad and set his state
  const handleClick = () => {
    if (store.isPlayed === "stop" && clicked === "off") {
      store.setIsPlayed("none");
    }
    if (store.isPlayed === "play" && clicked === "on") {
      store.setIsAll("none");
    }
    clicked === "off" ? setClicked("on") : setClicked("off");
  };

  //That useEffect listen to relevant changes at the store and play the audio files
  useEffect(() => {
    if (store.isPlayed === "play" && clicked === "on") {
      selectedBeat.current.currentTime = parseInt(store.syncTime(store.playTime, store.getDelayedTime));
      selectedBeat.current.playbackRate = store.getBeatsRate;
      selectedBeat.current.play();
    } else if (
      store.isAll === "all" &&
      (store.isPlayed === "none" || store.isPlayed === "play") && clicked === "off") {
      setClicked("on");
    } else if (store.isPlayed === "stop" && clicked === "on") {
      setClicked("off");
    } else {
      selectedBeat.current.pause();
    }
  }, [store.isPlayed, store.isAll, clicked, store.beatsRate]);

  useEffect(() => {
    selectedBeat.current.load();
    selectedBeat.current.loop = true;
  }, []);

  return useObserver(() => (
    <PadDiv
      clicked={clicked}
      onClick={handleClick}
      isPlayed={store.isPlayed}
      isAll={store.isAll}
      beatsRate={store.beatsRate}
    >
      {store.isPlayed === "play" && clicked === "on" ? (
        <ClickedPadDiv clicked={clicked} isPlayed={store.isPlayed}>
          {" "}
          {icon}
        </ClickedPadDiv>
      ) : (
        <IconDiv clicked={clicked} isPlayed={store.isPlayed}>
          {" "}
          {icon}
        </IconDiv>
      )}
      <audio ref={selectedBeat} src={beat.data} autoPlay={false}></audio>
    </PadDiv>
  ));
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const PadDiv = styled.div`
  position: relative;
  background: ${(props) => (props.clicked === "on"||props.isAll === "all"? "#FFFACD" : "#708090")};
  text-align: center;
  border-style: dotted;
  border-color: ${(props) =>
    props.isPlayed === "play" && props.clicked === "on" ? "green" : "red"};
  :hover {
    background-color: yellow;
  }
`;
const IconDiv = styled.div`
  position: absolute;
  align-items: center;
  position: absolute;
  top: 22%;
  left: 22%;
`;
const ClickedPadDiv = styled.div`
  align-items: center;
  align-items: center;
  position: absolute;
  top: 22%;
  left: 22%;
  animation: ${rotate} 2s linear infinite;
`;

export default OnePad;
