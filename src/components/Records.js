import React, { useState, useEffect, useRef } from "react";
import { StoreContext } from "../StoreContext";
import { useObserver } from "mobx-react";
import styled  from "styled-components";

function Records() {
  const [records, setRecords] = useState("");
  const store = React.useContext(StoreContext);
  const selectedAudio = useRef(null);

//useEffect thay waiting to recieve the recording url
  useEffect(() => {
    setRecords(store.recordedUrl);
    if (store.recordedUrl) {
      selectedAudio.current.load();
      selectedAudio.current.loop = false;
    }
  }, [store.recordedUrl]);

  return useObserver(() =>
    store.recordedUrl === "" && store.isRecorded === "off" ? (
      <RecordDiv>Please mark the audio share when recording</RecordDiv>
    ) : (
      <RecordDiv>
        <audio
          ref={selectedAudio}
          src={store.recordedUrl}
          autoPlay={false}
          controls
        >
          <source src={store.recordedUrl} type="audio/ogg" />
          <source src={store.recordedUrl} type="audio/mpeg" />
        </audio>
      </RecordDiv>
    )
  );
}
const RecordDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 40px;
  border-radius: 25px;
  position: relative;
  bottom: 50px;
  color:#bdb76b;
`;

export default Records;
