(this["webpackJsonpreact-amazon-transcribe-streaming"]=this["webpackJsonpreact-amazon-transcribe-streaming"]||[]).push([[0],{109:function(e,t){},111:function(e,t){},146:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(2),i=n.n(a),c=n(76),o=n.n(c),s=(n(92),n(85)),u=n(6),l=n(16),d=n(4),f=n.n(d),b=n(26),x=n(41);function h(){return(h=Object(x.a)(f.a.mark((function e(t){var n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,r=function(){return new Promise((function(e){t.once("data",(function(t){e(t)}))}))},e.prev=2;case 3:return e.next=6,Object(b.a)(r());case 6:if(null!==(a=e.sent)){e.next=10;break}return n=!0,e.abrupt("break",14);case 10:return e.next=12,a;case 12:e.next=3;break;case 14:return e.prev=14,n||t.destroy(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,,14,17]])})))).apply(this,arguments)}function m(e){return Object(l.a)({},Symbol.asyncIterator,(function(){return function(e){return h.apply(this,arguments)}(e)}))}var j=n(13),v=function(e){var t=e.text;return Object(r.jsx)("h1",{className:"flex-grow flex py-8 rounded-full text-2xl font-bold justify-center",children:t})},p=n(27),g=n(54),O=n(14),y=function(e){var t=e.text,n=e.color,a=e.disabled,i=e.onClick;return Object(r.jsx)("button",{type:"button",disabled:a,onClick:i,className:["transition duration-500 ease text-white  ","focus:outline-none focus:shadow-outline","border rounded-md px-4 py-2 m-2 select-none","".concat(a?"bg-gray-300  border-gray-300 cursor-not-allowed":"border-".concat(n,"-500 bg-").concat(n,"-500 hover:bg-").concat(n,"-600"))].join(" "),children:t})},w=function(e){var t=e.name,n=e.placeholder,a=e.value;return Object(r.jsx)("textarea",{className:"flex-grow flex mx-8 my-4 bg-gray-100 border-black border-2 text-sm",id:t,name:t,placeholder:n,rows:10,value:a,readOnly:!0})},k=n(18),S=n(19),C=n(42),N=n(39),E=n(50),A=n(148),P=n(149),T=n(35),_=n.n(T),D=n(36),R=n(21),M=n(77),z=n.n(M),F=Object({NODE_ENV:"production",PUBLIC_URL:"/react-amazon-transcribe-streaming-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NAME:"React - Amazon Transcribe Demo!",REACT_APP_LOG_LEVEL:"info"}),K=F.NODE_ENV,L={name:F.REACT_APP_NAME||"React - Amazon Transcribe Demo!",level:F.REACT_APP_LOG_LEVEL||"info",prettyPrint:!("production"===K)},B=z()(L),I=n(78),H=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"_transform",value:function(e,t,n){var r=Object(I.a)(e);this.push(r),n()}}]),n}(D.Transform),V=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(){var e;return Object(k.a)(this,n),(e=t.call(this)).audioStream=void 0,e.rawMediaStream=void 0,e.audioPayloadStream=void 0,e.transcribeConfig=void 0,e.client=void 0,e.started=void 0,e.audioStream=null,e.rawMediaStream=null,e.audioPayloadStream=null,e.started=!1,e}return Object(S.a)(n,[{key:"hasConfig",value:function(){return!!this.transcribeConfig}},{key:"setConfig",value:function(e){this.transcribeConfig=e}},{key:"validateConfig",value:function(){var e;if(!(null===(e=this.transcribeConfig)||void 0===e?void 0:e.accessKey)||!this.transcribeConfig.secretAccessKey)throw new Error("missing required config: access key and secret access key are required")}},{key:"init",value:function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.started=!0,this.transcribeConfig){e.next=3;break}throw new Error("transcribe config is not set");case 3:return B.info("transcribe config",this.transcribeConfig),this.validateConfig(),B.info("setting up microphone stream"),this.audioStream=new _.a,e.next=9,window.navigator.mediaDevices.getUserMedia({video:!1,audio:{sampleRate:this.transcribeConfig.sampleRate}});case 9:return this.rawMediaStream=e.sent,e.next=12,this.audioStream.setStream(this.rawMediaStream);case 12:return B.info("setting up streams"),this.audioPayloadStream=this.audioStream.pipe(new H).pipe(new D.PassThrough({highWaterMark:1024})),t={region:this.transcribeConfig.region,credentials:{accessKeyId:this.transcribeConfig.accessKey,secretAccessKey:this.transcribeConfig.secretAccessKey}},B.info("setting up transcribe client with config",t),this.client=new A.a(t),n=new P.a({LanguageCode:this.transcribeConfig.language,MediaEncoding:"pcm",MediaSampleRateHertz:this.transcribeConfig.sampleRate,AudioStream:this.audioGenerator.bind(this)()}),e.next=20,this.client.send(n);case 20:r=e.sent,this.onStart(r);case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onStart",value:function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r,a,i,c,o,s,u,l,d,b,x,h,m,j,v;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B.info("recognition started",t),!t.TranscriptResultStream){e.next=36;break}n=!0,r=!1,e.prev=4,i=Object(E.a)(t.TranscriptResultStream);case 6:return e.next=8,i.next();case 8:return c=e.sent,n=c.done,e.next=12,c.value;case 12:if(o=e.sent,n){e.next=20;break}(l=null===(s=o.TranscriptEvent)||void 0===s||null===(u=s.Transcript)||void 0===u?void 0:u.Results)&&l.length>0&&(d=Object(O.a)(l,1),b=d[0],x=!b.IsPartial,(h=b.Alternatives)&&h.length>0&&(m=Object(O.a)(h,1),j=m[0],v=j.Transcript,this.emit("recognized",{text:v,final:x})));case 17:n=!0,e.next=6;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(4),r=!0,a=e.t0;case 26:if(e.prev=26,e.prev=27,n||null==i.return){e.next=31;break}return e.next=31,i.return();case 31:if(e.prev=31,!r){e.next=34;break}throw a;case 34:return e.finish(31);case 35:return e.finish(26);case 36:case"end":return e.stop()}}),e,this,[[4,22,26,36],[27,,31,35]])})));return function(t){return e.apply(this,arguments)}}()},{key:"stop",value:function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.started=!1,null===(t=this.audioStream)||void 0===t||t.stop(),this.audioStream=null,this.rawMediaStream=null,null===(n=this.audioPayloadStream)||void 0===n||n.removeAllListeners(),null===(r=this.audioPayloadStream)||void 0===r||r.destroy(),this.audioPayloadStream=null,null===(a=this.client)||void 0===a||a.destroy(),this.client=void 0;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"audioGenerator",value:function(){var e=this;return Object(x.a)(f.a.mark((function t(){var n,r,a,i,c,o,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.audioPayloadStream){t.next=2;break}throw new Error("payload stream not created");case 2:n=!0,r=!1,t.prev=4,i=Object(E.a)(m(e.audioPayloadStream));case 6:return t.next=8,Object(b.a)(i.next());case 8:return c=t.sent,n=c.done,t.next=12,Object(b.a)(c.value);case 12:if(o=t.sent,n){t.next=24;break}if(s=o,!e.started){t.next=20;break}return t.next=18,{AudioEvent:{AudioChunk:s}};case 18:t.next=21;break;case 20:return t.abrupt("break",24);case 21:n=!0,t.next=6;break;case 24:t.next=30;break;case 26:t.prev=26,t.t0=t.catch(4),r=!0,a=t.t0;case 30:if(t.prev=30,t.prev=31,n||null==i.return){t.next=35;break}return t.next=35,Object(b.a)(i.return());case 35:if(t.prev=35,!r){t.next=38;break}throw a;case 38:return t.finish(35);case 39:return t.finish(30);case 40:case"end":return t.stop()}}),t,null,[[4,26,30,40],[31,,35,39]])})))()}}]),n}(R.EventEmitter),G={accessKey:"",secretAccessKey:"",language:"en-US",region:"eu-west-1",sampleRate:44100,vocabularyName:""},U=a.createContext([G,function(){}]),W=function(e){var t=e.children,n=a.useState(G);return Object(r.jsx)(U.Provider,{value:n,children:t})},q=function(){return a.useContext(U)},J=function(){var e=q(),t=Object(O.a)(e,1)[0],n=Object(a.useState)([]),i=Object(O.a)(n,2),c=i[0],o=i[1],s=Object(a.useState)(""),u=Object(O.a)(s,2),l=u[0],d=u[1],b=Object(a.useState)(!1),x=Object(O.a)(b,2),h=x[0],m=x[1],j=Object(a.useMemo)((function(){return new V}),[]);return Object(a.useEffect)((function(){j.setConfig(t),m(!1)}),[t,j]),Object(a.useEffect)((function(){var e=function(e){var t=e.text,n=e.final;B.info({text:t,final:n}),n?(d(""),o((function(e){return[].concat(Object(g.a)(e),[t])}))):d(t)};return j.on("recognized",e),function(){j.removeListener("recognized",e)}}),[j]),Object(a.useEffect)((function(){Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=8;break}return B.info("attempting to start transcription"),o([]),d(""),e.next=6,j.init().catch((function(e){B.error(e),m(!1)}));case 6:e.next=11;break;case 8:return B.info("stopping transcription"),e.next=11,j.stop();case 11:case"end":return e.stop()}}),e)})))()}),[h,j]),Object(r.jsxs)("div",{className:"flex-grow flex flex-col",children:[Object(r.jsx)(w,{name:"streaming-result",placeholder:"Your text will show up here",value:[].concat(Object(g.a)(c),[l]).join(" ")}),Object(r.jsxs)("div",{className:"flex-grow flex flex-row justify-center",children:[Object(r.jsx)(y,{text:"Start",color:"green",disabled:h,onClick:function(){return m(!0)}}),Object(r.jsx)(y,{text:"Stop",color:"red",disabled:!h,onClick:function(){return m(!1)}})]})]})},Y=n(84),Q=n.n(Y),X=function(e){var t=e.name,n=e.context,a=e.onInputChange,i=e.type,c=Q()(t);return Object(r.jsxs)("div",{className:"flex flex-col text-black items-start",children:[Object(r.jsx)("label",{className:"capitalize font-bold",htmlFor:c,children:t}),Object(r.jsx)("input",{id:c,type:i,name:c,placeholder:t,className:"w-full mx-auto bg-gray-200 text-sm py-2 px-3 rounded mb-2 text-black border-black border-b-2",value:n[c],onChange:a})]})},Z={Heading:v,StreamingView:J,DynamicTranscribeForm:function(e){var t=e.fields,n=q(),a=Object(O.a)(n,2),i=a[0],c=a[1],o=function(e){e.persist(),"function"===typeof c&&c(Object(j.a)(Object(j.a)({},i),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(r.jsx)("form",{className:"flex flex-col my-5 border-black border-2 text-center w-1/3 px-3 py-4 text-white mx-auto rounded",children:t.map((function(e){return Object(r.jsx)(X,{type:"text",name:e,context:i,onInputChange:o},e)}))})}};var $=function(e,t){var n=Z[e.componentName];return Object(r.jsx)(n,Object(j.a)({},e),t)};function ee(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}var te={Blank:function(e){return Object(r.jsxs)("div",{style:{backgroundColor:ee()},children:[" ",Array(500).fill(e.id).join(" ")," "]})},Dynamic:function(e){var t=e.components;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,t){return $(e,t)}))})}},ne=function(e){var t=te[e.layoutName];return Object(r.jsx)(t,Object(j.a)({},e))},re=function(e){var t=e.children;return Object(r.jsx)(r.Fragment,{children:t})},ae=Z.Heading,ie=function(e){var t=e.children,n=e.heading,a=e.horizontal,i=void 0===a||a;return Object(r.jsxs)("div",{className:"flex-grow flex flex-col bg-white text-black shadow-lg my-5",children:[n&&Object(r.jsx)(ae,{componentName:"Heading",text:n}),Object(r.jsx)("div",{className:"flex-grow flex ".concat(i?"flex-row":"flex-col"),children:t})]})},ce=n(53),oe={None:re,Box:ie,Basic:function(e){var t=e.children,n=e.header,a=e.title;return Object(r.jsxs)("div",{className:"px-2 lg:px-10 py-28 flex flex-col",children:[Object(r.jsxs)("div",{className:"flex flex-col justify-around uppercase max-w-3/5",children:[Object(r.jsx)(ce.a,{direction:"left",className:"text-xs pb-4 text-gray-400 tracking-5px",children:Object(r.jsx)("div",{children:Object(r.jsx)("span",{className:"transition-all duration-500 ease-in-out hover:text-black hover:text-lg hover:font-bold",children:n})})}),Object(r.jsx)(ce.a,{direction:"up",duration:1500,className:"text-xl font-bold tracking-5px",children:Object(r.jsx)("div",{children:Object(r.jsx)("span",{className:"transition-all duration-500 ease-in-out hover:text-black hover:text-2xl hover:font-bold",children:a})})})]}),Object(r.jsx)("div",{className:"mt-16",children:t})]})}};function se(e,t){var n=oe[e.wrap];return Object(r.jsxs)(n,Object(j.a)(Object(j.a)({},e),{},{children:[t," "]}))}var ue=function(e){var t=ne(e);if(!t)throw new Error("No layout built");var n,a=se(e,t);return Object(r.jsx)("div",{id:(n=e.id,"".concat(n,"-section")),className:"",children:a},e.id)},le={sections:[{id:"header",layoutName:"Dynamic",wrap:"Box",heading:"Amazon Transcribe Demo!",components:[]},{id:"config-manager",layoutName:"Dynamic",wrap:"Box",horizontal:!0,components:[{componentName:"DynamicTranscribeForm",fields:["Access Key","Secret Access Key"]},{componentName:"DynamicTranscribeForm",fields:["language","region"]}]},{id:"streaming",layoutName:"Dynamic",wrap:"Box",heading:"Streaming",components:[{componentName:"StreamingView"}]}]},de=a.createContext(le),fe=function(e){var t=e.children;return Object(r.jsx)(de.Provider,{value:le,children:t})},be=function(){return a.useContext(de)},xe=function(e){var t=e.children;return Object(r.jsx)(fe,{children:Object(r.jsx)(W,{children:t})})},he=function(){var e=be().sections.map(ue);return Object(r.jsx)("div",{className:"flex-grow m-10",children:e})};var me=function(){return Object(r.jsx)("div",{className:"flex mx-auto min-w-0 h-screen",children:Object(r.jsx)(xe,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(u.c,{children:Object(r.jsx)(u.a,{path:"/",children:Object(r.jsx)(he,{})})})})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(me,{})}),document.getElementById("root")),je(B.info.bind(B))},78:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n(35),a=n.n(r);function i(t){for(var n=a.a.toRaw(t),r=0,i=new ArrayBuffer(2*n.length),c=new DataView(i),o=0;o<n.length;o++,r+=2){var s=Math.max(-1,Math.min(1,n[o]));c.setInt16(r,s<0?32768*s:32767*s,!0)}return e.from(i)}}).call(this,n(17).Buffer)},92:function(e,t,n){},97:function(e,t){},99:function(e,t){}},[[146,1,2]]]);
//# sourceMappingURL=main.c3794bc6.chunk.js.map