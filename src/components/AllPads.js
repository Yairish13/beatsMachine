import React from "react";
import styled from "styled-components";
import future_funk from "../audioFiles/120_future_funk_beats_25.mp3";
import stutter_break from "../audioFiles/120_stutter_breakbeats_16.mp3";
import bass_funk from "../audioFiles/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import electric_guitar from "../audioFiles/electric guitar coutry slide 120bpm - B.mp3";
import stompy_slosh from "../audioFiles/FUD_120_StompySlosh.mp3";
import groove_tango from "../audioFiles/GrooveB_120bpm_Tanggu.mp3";
import maze_politics from "../audioFiles/MazePolitics_120_Perc.mp3";
import pas_groove from "../audioFiles/PAS3GROOVE1.03B.mp3";
import silent_star from "../audioFiles/SilentStar_120_Em_OrganSynth.mp3";
import OnePad from "./OnePad";
import { SiDiscogs, SiBeatport, SiGroovy } from "react-icons/si";
import { CgSandClock } from "react-icons/cg";
import { FaDrumSteelpan } from "react-icons/fa";
import {
  GiGuitarBassHead,
  GiGuitar,
  GiMazeSaw,
  GiCursedStar,
} from "react-icons/gi";
import { useObserver } from "mobx-react";

//Inserting into an array of objects the beats and icons
const data = [
  { data: future_funk, icon: <SiDiscogs style={{ fontSize: "50px" }} /> },
  { data: stutter_break, icon: <CgSandClock style={{ fontSize: "50px" }} /> },
  { data: bass_funk, icon: <GiGuitarBassHead style={{ fontSize: "50px" }} /> },
  { data: electric_guitar, icon: <GiGuitar style={{ fontSize: "50px" }} /> },
  { data: stompy_slosh, icon: <FaDrumSteelpan style={{ fontSize: "50px" }} /> },
  { data: groove_tango, icon: <SiBeatport style={{ fontSize: "50px" }} /> },
  { data: maze_politics, icon: <GiMazeSaw style={{ fontSize: "50px" }} /> },
  { data: pas_groove, icon: <SiGroovy style={{ fontSize: "50px" }} /> },
  { data: silent_star, icon: <GiCursedStar style={{ fontSize: "50px" }} /> },
];

function AllPads() {
  return useObserver(() => (
    //Mapping the beats to onePad components and give each one another beat
    <AllPadsDiv>
      {data.map((d, i) => {
        return (
          <OnePad
            beat={d}
            key={i}
          />
        );
      })}
    </AllPadsDiv>
  ));
}

const AllPadsDiv = styled.div`
  position: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  height: 300px;
  width: 300px;
  position: relative;
  bottom: 20px;
`;

export default AllPads;
