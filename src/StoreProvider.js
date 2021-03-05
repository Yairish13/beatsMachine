import { observable, makeObservable } from "mobx";
import { configure } from "mobx";
import bass_funk from "./audioFiles/Bass Warwick heavy funk groove on E 120 BPM.mp3";

configure({
  useProxies: "always",
});

//Set store to save and observale global variables
class Store {
  constructor() {
    makeObservable(this, {
        playTime: observable,
        isPlayed: observable,
        isRecorded:observable,
        isAll:observable,
        beatsRate: observable,
        gumStream:observable,
        recordedUrl:observable,
        bass:observable,
    });
  }
   playTime = 0;
   isPlayed="none";
   isRecorded="none";
   isAll="none";
   beatsRate =1;
   gumStream = {};
   recordedUrl = '';
   bass = bass_funk;

  get getPlayTime() {
    return this.playTime = new Date().getTime()/1000
  }
  get getDelayedTime() {
    return  new Date().getTime()/1000
  }
  get getBeatsRate() {
      return this.beatsRate;
  }
  get getIsPlayed() {
    return this.isPlayed;
  }


setIsPlayed(status){
    return this.isPlayed=status;
}
setIsRecorded(status){
    return this.isRecorded=status;
}

setIsAll(str){
return this.isAll=str;
}
setBeatsRate(num){
    return this.beatsRate = num;
}

setGumStream(stream){
  return this.gumStream = stream;
}
setRecord(rec){
  return this.record = rec;
}
  syncTime(playTime,delayedTime) {
    return ((delayedTime - playTime))%8
  }
  setRecordedUrl(url){
    return this.recordedUrl = url;
   }
}

export const storeInstance = new Store();
