(this.webpackJsonpmoveotask=this.webpackJsonpmoveotask||[]).push([[0],{34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(14),a=n(15),c=n(3),s=n.p+"static/media/Bass Warwick heavy funk groove on E 120 BPM.52c24c81.mp3";Object(c.f)({useProxies:"always"});var l,u,d,f,p=new(function(){function e(){Object(r.a)(this,e),this.playTime=0,this.isPlayed="none",this.isRecorded="none",this.isAll="none",this.beatsRate=1,this.gumStream={},this.recordedUrl="",this.bass=s,Object(c.l)(this,{playTime:c.m,isPlayed:c.m,isRecorded:c.m,isAll:c.m,beatsRate:c.m,gumStream:c.m,recordedUrl:c.m,bass:c.m})}return Object(a.a)(e,[{key:"getPlayTime",get:function(){return this.playTime=(new Date).getTime()/1e3}},{key:"getDelayedTime",get:function(){return(new Date).getTime()/1e3}},{key:"getBeatsRate",get:function(){return this.beatsRate}},{key:"getIsPlayed",get:function(){return this.isPlayed}},{key:"setIsPlayed",value:function(e){return this.isPlayed=e}},{key:"setIsRecorded",value:function(e){return this.isRecorded=e}},{key:"setIsAll",value:function(e){return this.isAll=e}},{key:"setBeatsRate",value:function(e){return this.beatsRate=e}},{key:"setGumStream",value:function(e){return this.gumStream=e}},{key:"setRecord",value:function(e){return this.record=e}},{key:"syncTime",value:function(e,t){return(t-e)%8}},{key:"setRecordedUrl",value:function(e){return this.recordedUrl=e}}]),e}()),b=i.a.createContext(p),j=n(13),h=n.n(j),x=(n(34),n(4)),m=n(5),y=n.p+"static/media/120_future_funk_beats_25.5eb417fc.mp3",g=n.p+"static/media/120_stutter_breakbeats_16.37c82282.mp3",O=n.p+"static/media/electric guitar coutry slide 120bpm - B.230fcab8.mp3",v=n.p+"static/media/FUD_120_StompySlosh.27bdc145.mp3",k=n.p+"static/media/GrooveB_120bpm_Tanggu.3e1411b4.mp3",w=n.p+"static/media/MazePolitics_120_Perc.2d08c654.mp3",R=n.p+"static/media/PAS3GROOVE1.03B.f77c6da4.mp3",S=n.p+"static/media/SilentStar_120_Em_OrganSynth.f2d668af.mp3",P=n(9),C=n(6),z=n(2);var A,B=Object(m.b)(l||(l=Object(x.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),U=m.a.div(u||(u=Object(x.a)(["\n  position: relative;\n  background: ",";\n  text-align: center;\n  border-style: dotted;\n  border-color: ",";\n  :hover {\n    background-color: #BDB76B;\n  }\n"])),(function(e){return"on"===e.clicked||"all"===e.isAll?"#FFFACD":"#708090"}),(function(e){return"play"===e.isPlayed&&"on"===e.clicked?"green":"red"})),I=m.a.div(d||(d=Object(x.a)(["\n  position: absolute;\n  align-items: center;\n  position: absolute;\n  top: 22%;\n  left: 22%;\n"]))),T=m.a.div(f||(f=Object(x.a)(["\n  align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 22%;\n  left: 22%;\n  animation: "," 2s linear infinite;\n"])),B),E=function(e){var t=e.beat,n=Object(o.useState)("off"),r=Object(P.a)(n,2),a=r[0],c=r[1],s=i.a.useContext(b),l=Object(o.useRef)(null),u=t.icon,d=function(){"stop"===s.isPlayed&&"off"===a&&s.setIsPlayed("none"),"play"===s.isPlayed&&"on"===a&&s.setIsAll("none"),c("off"===a?"on":"off")};return Object(o.useEffect)((function(){"play"===s.isPlayed&&"on"===a?(l.current.currentTime=parseInt(s.syncTime(s.playTime,s.getDelayedTime)),l.current.playbackRate=s.getBeatsRate,l.current.play()):"all"!==s.isAll||"none"!==s.isPlayed&&"play"!==s.isPlayed||"off"!==a?"stop"===s.isPlayed&&"on"===a?c("off"):l.current.pause():c("on")}),[s.isPlayed,s.isAll,a,s.beatsRate]),Object(o.useEffect)((function(){l.current.load(),l.current.loop=!0}),[]),Object(C.d)((function(){return Object(z.jsxs)(U,{clicked:a,onClick:d,isPlayed:s.isPlayed,isAll:s.isAll,beatsRate:s.beatsRate,children:["play"===s.isPlayed&&"on"===a?Object(z.jsxs)(T,{clicked:a,isPlayed:s.isPlayed,children:[" ",u]}):Object(z.jsxs)(I,{clicked:a,isPlayed:s.isPlayed,children:[" ",u]}),Object(z.jsx)("audio",{ref:l,src:t.data,autoPlay:!1})]})}))},_=n(10),F=n(26),D=n(27),M=n(7),V=[{data:y,icon:Object(z.jsx)(_.c,{style:{fontSize:"50px"}})},{data:g,icon:Object(z.jsx)(F.a,{style:{fontSize:"50px"}})},{data:s,icon:Object(z.jsx)(M.c,{style:{fontSize:"50px"}})},{data:O,icon:Object(z.jsx)(M.b,{style:{fontSize:"50px"}})},{data:v,icon:Object(z.jsx)(D.a,{style:{fontSize:"50px"}})},{data:k,icon:Object(z.jsx)(_.a,{style:{fontSize:"50px"}})},{data:w,icon:Object(z.jsx)(M.e,{style:{fontSize:"50px"}})},{data:R,icon:Object(z.jsx)(_.d,{style:{fontSize:"50px"}})},{data:S,icon:Object(z.jsx)(M.a,{style:{fontSize:"50px"}})}];var L,W,G,J,N=m.a.div(A||(A=Object(x.a)(["\n  position: center;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  height: 300px;\n  width: 300px;\n  position: relative;\n  bottom: 20px;\n"]))),Y=function(){return Object(C.d)((function(){return Object(z.jsx)(N,{children:V.map((function(e,t){return Object(z.jsx)(E,{beat:e},t)}))})}))},q=n(12),H=n(19),K=n(20),Q=n(11),X=n(29),Z=n(28),$=n.n(Z),ee=function(){function e(t,n){var o=this;Object(r.a)(this,e),this.config={bufferLen:4096,numChannels:2,mimeType:"audio/wav"},this.recording=!1,this.callbacks={getBuffer:[],exportWAV:[]},Object.assign(this.config,n),this.context=t.context,this.node=(this.context.createScriptProcessor||this.context.createJavaScriptNode).call(this.context,this.config.bufferLen,this.config.numChannels,this.config.numChannels),this.node.onaudioprocess=function(e){if(o.recording){for(var t=[],n=0;n<o.config.numChannels;n++)t.push(e.inputBuffer.getChannelData(n));o.worker.postMessage({command:"record",buffer:t})}},t.connect(this.node),this.node.connect(this.context.destination);this.worker=new $.a((function(){var e,t,n=0,o=[];function i(){for(var e=0;e<t;e++)o[e]=[]}function r(e,t){for(var n=new Float32Array(t),o=0,i=0;i<e.length;i++)n.set(e[i],o),o+=e[i].length;return n}function a(e,t,n){for(var o=0;o<n.length;o++)e.setUint8(t+o,n.charCodeAt(o))}this.onmessage=function(c){switch(c.data.command){case"init":s=c.data.config,e=s.sampleRate,t=s.numChannels,i();break;case"record":!function(e){for(var i=0;i<t;i++)o[i].push(e[i]);n+=e[0].length}(c.data.buffer);break;case"exportWAV":!function(i){for(var c,s=[],l=0;l<t;l++)s.push(r(o[l],n));c=2===t?function(e,t){var n=e.length+t.length,o=new Float32Array(n),i=0,r=0;for(;i<n;)o[i++]=e[r],o[i++]=t[r],r++;return o}(s[0],s[1]):s[0];var u=function(n){var o=new ArrayBuffer(44+2*n.length),i=new DataView(o);return a(i,0,"RIFF"),i.setUint32(4,36+2*n.length,!0),a(i,8,"WAVE"),a(i,12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,t,!0),i.setUint32(24,e,!0),i.setUint32(28,4*e,!0),i.setUint16(32,2*t,!0),i.setUint16(34,16,!0),a(i,36,"data"),i.setUint32(40,2*n.length,!0),function(e,t,n){for(var o=0;o<n.length;o++,t+=2){var i=Math.max(-1,Math.min(1,n[o]));e.setInt16(t,i<0?32768*i:32767*i,!0)}}(i,44,n),i}(c),d=new Blob([u],{type:i});this.postMessage({command:"exportWAV",data:d})}(c.data.type);break;case"getBuffer":!function(){for(var e=[],i=0;i<t;i++)e.push(r(o[i],n));this.postMessage({command:"getBuffer",data:e})}();break;case"clear":n=0,o=[],i()}var s}}),{}),this.worker.postMessage({command:"init",config:{sampleRate:this.context.sampleRate,numChannels:this.config.numChannels}}),this.worker.onmessage=function(e){var t=o.callbacks[e.data.command].pop();"function"==typeof t&&t(e.data.data)}}return Object(a.a)(e,[{key:"record",value:function(){this.recording=!0}},{key:"stop",value:function(){this.recording=!1}},{key:"clear",value:function(){this.worker.postMessage({command:"clear"})}},{key:"getBuffer",value:function(e){if(!(e=e||this.config.callback))throw new Error("Callback not set");this.callbacks.getBuffer.push(e),this.worker.postMessage({command:"getBuffer"})}},{key:"exportWAV",value:function(e,t){if(t=t||this.config.mimeType,!(e=e||this.config.callback))throw new Error("Callback not set");this.callbacks.exportWAV.push(e),this.worker.postMessage({command:"exportWAV",type:t})}}],[{key:"forceDownload",value:function(e,t){var n=(window.URL||window.webkitURL).createObjectURL(e),o=window.document.createElement("a");o.href=n,o.download=t||"output.wav";var i=document.createEvent("Event");i.initEvent("click",!0,!0),o.dispatchEvent(i)}}]),e}();var te,ne=Object(m.b)(L||(L=Object(x.a)(["{\n\t0%{\n\t\tbox-shadow: 0px 0px 5px 0px rgba(173,0,0,.3);\n\t}\n\t65%{\n\t\tbox-shadow: 0px 0px 5px 13px rgba(173,0,0,.3);\n\t}\n\t90%{\n\t\tbox-shadow: 0px 0px 5px 13px rgba(173,0,0,0);\n\t}\n}"]))),oe=m.a.div(W||(W=Object(x.a)(["\n  cursor: pointer;\n  font-size: 35px;\n  animation: ",' 2s linear infinite;\n  color: "red";\n'])),ne),ie=m.a.div(G||(G=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 350px;\n  height: 45px;\n  background-color: #bdb76b;\n  border-radius: 25px;\n  position: relative;\n  bottom: 80px;\n"]))),re=m.a.div(J||(J=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100px;\n  height: 30px;\n  background-color: #bdb76b;\n  border-radius: 25px;\n  margin-top: 25px;\n  position: relative;\n  bottom: 80px;\n"]))),ae=function(){var e=i.a.useContext(b),t=Object(o.useState)(null),n=Object(P.a)(t,2),r=n[0],a=n[1],c=function(){return e.setIsAll("none")&&e.setIsPlayed("stop")},s=function(t){var n=URL.createObjectURL(t);e.setRecordedUrl(n),e.setIsRecorded("off")};return Object(C.d)((function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(re,{children:[.5===e.beatsRate?Object(z.jsx)(M.f,{onClick:function(){return e.setBeatsRate(.5)},style:{cursor:"pointer",fontSize:"25px",color:"green"}}):Object(z.jsx)(M.f,{onClick:function(){return e.setBeatsRate(.5)},style:{cursor:"pointer",fontSize:"25px"}}),1===e.beatsRate?Object(z.jsx)(Q.b,{onClick:function(){return e.setBeatsRate(1)},style:{cursor:"pointer",fontSize:"25px",color:"green"}}):Object(z.jsx)(Q.b,{onClick:function(){return e.setBeatsRate(1)},style:{cursor:"pointer",fontSize:"25px"}}),2===e.beatsRate?Object(z.jsx)(M.d,{onClick:function(){return e.setBeatsRate(2)},style:{cursor:"pointer",fontSize:"25px",color:"green"}}):Object(z.jsx)(M.d,{onClick:function(){return e.setBeatsRate(2)},style:{cursor:"pointer",fontSize:"25px"}})]}),Object(z.jsxs)(ie,{children:["play"===e.isPlayed?Object(z.jsx)(q.b,{onClick:function(){return e.setIsPlayed("play")},style:{cursor:"pointer",fontSize:"35px",color:"#4169E1"}}):Object(z.jsx)(q.b,{onClick:function(){return e.setIsPlayed("play")},style:{cursor:"pointer",fontSize:"35px"}}),"pause"===e.isPlayed?Object(z.jsx)(q.a,{style:{cursor:"pointer",fontSize:"35px",color:"lightGrey"}}):Object(z.jsx)(q.a,{onClick:function(){return e.setIsPlayed("pause")},style:{cursor:"pointer",fontSize:"35px"}}),"stop"===e.isPlayed?Object(z.jsx)(H.a,{onClick:function(){return c()},style:{cursor:"pointer",fontSize:"35px",color:"red"}}):Object(z.jsx)(H.a,{onClick:function(){return c()},style:{cursor:"pointer",fontSize:"35px"}}),"all"===e.isAll?Object(z.jsx)(K.a,{onClick:function(){return e.setIsAll("all")},style:{cursor:"pointer",fontSize:"35px",color:"#FFD700"}}):Object(z.jsx)(K.a,{onClick:function(){return e.setIsAll("all")},style:{cursor:"pointer",fontSize:"35px"}}),"on"===e.isRecorded?Object(z.jsxs)(oe,{children:[" ",Object(z.jsx)(Q.a,{style:{color:"red"}})]}):Object(z.jsx)(Q.a,{onClick:function(){navigator.mediaDevices.getDisplayMedia({audio:!0,video:!0}).then((function(t){var n=new window.AudioContext;e.setGumStream(t);var o=n.createMediaStreamSource(t),i=new ee(o,{numChannels:1});i.record(),e.setIsRecorded("on"),a(i)})).catch((function(t){console.log(t.message),e.setIsRecorded("off")}))},style:{cursor:"pointer",fontSize:"35px"}}),"on"===e.isRecorded?Object(z.jsx)(X.a,{onClick:function(){return function(){console.log("stopButton clicked");try{r.stop(),e.gumStream.getAudioTracks()[0].stop(),r.exportWAV(s)}catch(t){e.setIsRecorded("off"),console.log(t)}}()},style:{cursor:"pointer",fontSize:"25px",color:"black"}}):""]})]})}))},ce=n(8);var se,le,ue,de=m.a.div(te||(te=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 250px;\n  height: 40px;\n  border-radius: 25px;\n  position: relative;\n  bottom: 50px;\n  color:#bdb76b;\n"]))),fe=function(){var e=Object(o.useState)(""),t=Object(P.a)(e,2),n=(t[0],t[1]),r=i.a.useContext(b),a=Object(o.useRef)(null);return Object(o.useEffect)((function(){n(r.recordedUrl),r.recordedUrl&&(a.current.load(),a.current.loop=!0)}),[r.recordedUrl]),Object(C.d)((function(){return""===r.recordedUrl&&"off"===r.isRecorded?Object(z.jsx)(de,{children:"Please mark the audio share when recording"}):Object(z.jsx)(de,{children:Object(z.jsxs)("audio",{ref:a,src:r.recordedUrl,autoPlay:!1,controls:!0,children:[Object(z.jsx)("source",{src:r.recordedUrl,type:"audio/ogg"}),Object(z.jsx)("source",{src:r.recordedUrl,type:"audio/mpeg"})]})})}))},pe=n.p+"static/media/background.44c3644e.jpg";Object(c.f)({useProxies:"always"});var be=m.a.div(se||(se=Object(x.a)(["\n  height: 100vh;\n  width: 100vw;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),je=m.a.div(le||(le=Object(x.a)(["\n  background-image: url(",");\n  background-size: cover; /* Resize the background image to cover the entire container */\n"])),pe),he=m.a.div(ue||(ue=Object(x.a)(["\n  text-align: center;\n  justify-content: center;\n  font-size: 45px;\n  width: 100vw;\n  color: white;\n"]))),xe=Object(ce.a)((function(){var e=i.a.useContext(b);return Object(z.jsxs)(je,{children:[Object(z.jsxs)(he,{children:[" ","\u266f \u266a Yair's"," ",Object(z.jsx)(_.b,{style:{paddingbottom:"25px"}}),"eats Machine \u266b \u2669"]}),Object(z.jsxs)(be,{children:[Object(z.jsx)(ae,{}),"off"===e.isRecorded?Object(z.jsx)(fe,{}):"",Object(z.jsx)(Y,{})]})]})})),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))};h.a.render(Object(z.jsx)("div",{children:Object(z.jsx)(b.Provider,{value:p,children:Object(z.jsx)(xe,{})})}),document.getElementById("root")),me()}},[[38,1,2]]]);
//# sourceMappingURL=main.589808af.chunk.js.map