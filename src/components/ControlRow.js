import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { HiStop } from "react-icons/hi";
import { TiThSmallOutline } from "react-icons/ti";
import { MdKeyboardVoice, MdLooksOne } from "react-icons/md";
import { GiTurtle, GiHorseHead } from "react-icons/gi";
import { RiStopCircleLine } from "react-icons/ri";
import { StoreContext } from "../StoreContext";
import { useObserver } from "mobx-react";
import Record from "../Record";

function ControlRow() {
  const store = React.useContext(StoreContext);
  const [record, setRecord] = useState(null);

  //When stop is clicked set the relevant states
  const handleStop = () => {
    return store.setIsAll("none") && store.setIsPlayed("stop");
  };

  //the function that responsible for start recording
  const startRecording = () => {
    var constraints = {
      audio: true,
      video: true,
    };
    navigator.mediaDevices
      .getDisplayMedia(constraints)
      .then(function (stream) {
        var audioContext = new window.AudioContext();
        store.setGumStream(stream);
        /* use the stream */
        var input = audioContext.createMediaStreamSource(stream);
        /* Create the Recorder object and configure to record mono sound (1 channel) Recording 2 channels will double the file size */
        let record = new Record(input, {
          numChannels: 1,
        });
        //start the recording process
        record.record();
        store.setIsRecorded("on");
        setRecord(record);
      })
      .catch(function (err) {
        console.log(err.message);
        store.setIsRecorded("off");
      });
  };

  //the function that responsible for stop and save the record to the store
  const stopRecording = () => {
    console.log("stopButton clicked");
    try {
      record.stop(); //stop microphone access
      store.gumStream.getAudioTracks()[0].stop();
      //create the wav blob and pass it on to createDownloadLink
      record.exportWAV(createDownloadLink);
    } catch (err) {
      store.setIsRecorded("off");
      console.log(err);
    }
  };

  // function that make the url and set the store
  const createDownloadLink = (blob) => {
    var url = URL.createObjectURL(blob);
    store.setRecordedUrl(url);
    store.setIsRecorded("off");
  };

  return useObserver(() => (
    <>
      <BeatRateDiv>
        {store.beatsRate === 0.5 ? (
          <GiTurtle
            onClick={() => store.setBeatsRate(0.5)}
            style={{ cursor: "pointer", fontSize: "25px", color: "green" }}
          />
        ) : (
          <GiTurtle
            onClick={() => store.setBeatsRate(0.5)}
            style={{ cursor: "pointer", fontSize: "25px" }}
          />
        )}
        {store.beatsRate === 1 ? (
          <MdLooksOne
            onClick={() => store.setBeatsRate(1)}
            style={{ cursor: "pointer", fontSize: "25px", color: "green" }}
          />
        ) : (
          <MdLooksOne
            onClick={() => store.setBeatsRate(1)}
            style={{ cursor: "pointer", fontSize: "25px" }}
          />
        )}
        {store.beatsRate === 2 ? (
          <GiHorseHead
            onClick={() => store.setBeatsRate(2)}
            style={{ cursor: "pointer", fontSize: "25px", color: "green" }}
          />
        ) : (
          <GiHorseHead
            onClick={() => store.setBeatsRate(2)}
            style={{ cursor: "pointer", fontSize: "25px" }}
          />
        )}
      </BeatRateDiv>
      <ControlDiv>
        {store.isPlayed === "play" ? (
          <AiFillPlayCircle
            onClick={() => store.setIsPlayed("play")}
            style={{ cursor: "pointer", fontSize: "35px", color: "#4169E1" }}
          />
        ) : (
          <AiFillPlayCircle
            onClick={() => store.setIsPlayed("play")}
            style={{ cursor: "pointer", fontSize: "35px" }}
          />
        )}
        {store.isPlayed === "pause" ? (
          <AiFillPauseCircle
            //   onClick={() => handlePause()}
            style={{ cursor: "pointer", fontSize: "35px", color: "lightGrey" }}
          />
        ) : (
          <AiFillPauseCircle
            onClick={() => store.setIsPlayed("pause")}
            style={{ cursor: "pointer", fontSize: "35px" }}
          />
        )}
        {store.isPlayed === "stop" ? (
          <HiStop
            onClick={() => handleStop()}
            style={{ cursor: "pointer", fontSize: "35px", color: "red" }}
          />
        ) : (
          <HiStop
            onClick={() => handleStop()}
            style={{ cursor: "pointer", fontSize: "35px" }}
          />
        )}
        {store.isAll === "all" ? (
          <TiThSmallOutline
            onClick={() => store.setIsAll("all")}
            style={{ cursor: "pointer", fontSize: "35px",color:"#FFD700" }}
          />
        ) : (
          <TiThSmallOutline
            onClick={() => store.setIsAll("all")}
            style={{ cursor: "pointer", fontSize: "35px" }}
          />
        )}
        {store.isRecorded === "on" ? (
          <RecordingButtonDiv>
            {" "}
            <MdKeyboardVoice style={{ color: "red" }} />
          </RecordingButtonDiv>
        ) : (
          <MdKeyboardVoice
            onClick={() => startRecording()}
            style={{ cursor: "pointer", fontSize: "35px" }}
          />
        )}
        {store.isRecorded === "on" ? (
          <RiStopCircleLine
            onClick={() => stopRecording()}
            style={{ cursor: "pointer", fontSize: "25px", color: "black" }}
          />
        ) : (
          ""
        )}
      </ControlDiv>
    </>
  ));
}

const pulse = keyframes`{
	0%{
		box-shadow: 0px 0px 5px 0px rgba(173,0,0,.3);
	}
	65%{
		box-shadow: 0px 0px 5px 13px rgba(173,0,0,.3);
	}
	90%{
		box-shadow: 0px 0px 5px 13px rgba(173,0,0,0);
	}
}`;

const RecordingButtonDiv = styled.div`
  cursor: pointer;
  font-size: 35px;
  animation: ${pulse} 2s linear infinite;
  color: "red";
`;

const ControlDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  height: 45px;
  background-color: #bdb76b;
  border-radius: 25px;
  position: relative;
  bottom: 80px;
`;
const BeatRateDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  height: 30px;
  background-color: #bdb76b;
  border-radius: 25px;
  margin-top: 25px;
  position: relative;
  bottom: 80px;
`;
export default ControlRow;
